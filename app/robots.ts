import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'GPTBot',
          'CCBot',
          'anthropic-ai',
          'ClaudeBot',
          'Bytespider',
          'PetalBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.vinarijaaleks.co.rs/sitemap.xml',
  }
}
