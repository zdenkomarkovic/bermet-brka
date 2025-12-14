import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting store (in-memory - for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30 // 30 requests per minute (normal browsing)
const API_RATE_LIMIT = 5 // 5 API calls per minute

// Known bad bots and crawlers
const BLOCKED_USER_AGENTS = [
  'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget', 'python', 'go-http-client',
  'ahrefsbot', 'semrushbot', 'dotbot', 'mj12bot', 'rogerbot', 'exabot', 'facebot',
  'ia_archiver', 'bingbot', 'bingpreview', 'msnbot', 'slurp', 'duckduckbot',
  'baiduspider', 'yandexbot', 'sogou', 'teoma', 'seznambot', 'uptimerobot',
  'gptbot', 'chatgpt', 'claudebot', 'anthropic', 'ccbot', 'claude-web',
  'bytespider', 'petalbot', 'zoominfobot', 'axios', 'node-fetch', 'headless',
  'phantom', 'selenium', 'webdriver', 'playwright', 'puppeteer',
  'screaming frog', 'majestic', 'linkchecker', 'validator', 'checker'
]

// Suspicious patterns in paths
const SUSPICIOUS_PATHS = [
  '/.env', '/wp-admin', '/wp-login', '/admin', '/phpmyadmin', '/.git',
  '/config', '/backup', '/test', '/demo', '/.well-known', '/api/graphql',
  '/xmlrpc.php', '/wp-content', '/wordpress', '/joomla',
  // SQL injection patterns
  '/index.php', '/moja-prodavnica', 'by,', 'results,', '%60', 'product_sku',
  'product_name', 'category_name', 'ordering', 'mf_name', 'dirDesc',
  // Common attack patterns
  'union', 'select', 'insert', 'update', 'delete', 'drop', 'exec',
  '../', '..\\', '<script', 'javascript:', 'onerror=', 'onload=',
  // Query param attacks
  'iccaldate=', 'id=', 'cat=', 'page='
]

function getRateLimitKey(ip: string, pathname: string): string {
  return `${ip}:${pathname}`
}

function checkRateLimit(key: string, limit: number): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(key)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}, 60000) // Clean every minute

function isBot(userAgent: string): boolean {
  if (!userAgent) return true // No user agent = suspicious

  const ua = userAgent.toLowerCase()

  // Allow legitimate browsers explicitly
  const legitimateBrowsers = ['mozilla', 'chrome', 'safari', 'edge', 'firefox', 'opera']
  const hasLegitBrowser = legitimateBrowsers.some(browser => ua.includes(browser))

  // If it looks like a real browser AND contains bot keyword, check more carefully
  if (hasLegitBrowser && ua.includes('mozilla/5.0')) {
    // Only block if it's DEFINITELY a bot (not just contains "bot" in user agent)
    const definitelyBot = ['ahrefsbot', 'semrushbot', 'dotbot', 'mj12bot', 'gptbot',
                           'claudebot', 'ccbot', 'bytespider', 'petalbot'].some(bot => ua.includes(bot))
    return definitelyBot
  }

  return BLOCKED_USER_AGENTS.some(bot => ua.includes(bot))
}

function isSuspiciousPath(pathname: string): boolean {
  return SUSPICIOUS_PATHS.some(path => pathname.toLowerCase().includes(path))
}

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ||
             request.headers.get('x-real-ip') ||
             'unknown'
  const pathname = request.nextUrl.pathname
  const userAgent = request.headers.get('user-agent') || ''

  // Block known bots immediately
  if (isBot(userAgent)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Block suspicious paths with 410 Gone (stronger signal to bots)
  if (isSuspiciousPath(pathname)) {
    return new NextResponse('Gone', { status: 410 })
  }

  // Block requests without referer (except for direct navigation)
  const referer = request.headers.get('referer')
  const method = request.method

  // If it's a POST/PUT/DELETE without referer, it's likely a bot
  if (['POST', 'PUT', 'DELETE'].includes(method) && !referer) {
    const origin = request.headers.get('origin')
    if (!origin || !origin.includes('vinarijaaleks.co.rs')) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  // Apply stricter rate limiting for API routes
  if (pathname.startsWith('/api/')) {
    const apiKey = getRateLimitKey(ip, pathname)

    if (!checkRateLimit(apiKey, API_RATE_LIMIT)) {
      return new NextResponse(
        JSON.stringify({
          error: 'Previše zahteva. Pokušajte ponovo za minut.'
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '60'
          }
        }
      )
    }
  }

  // Apply general rate limiting
  const generalKey = getRateLimitKey(ip, 'general')
  if (!checkRateLimit(generalKey, MAX_REQUESTS_PER_WINDOW)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: { 'Retry-After': '60' }
    })
  }

  // Add security headers
  const response = NextResponse.next()

  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
