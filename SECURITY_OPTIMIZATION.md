# Optimizacija sajta - smanjenje edge requests

## Problem
Sajt je imao preko milion edge requests dnevno (1500-2000/sat čak i noću) na Vercelu, što je uzrok:
- ❌ Bot napadi na API endpoint
- ❌ Nedostatak rate limiting-a
- ❌ Loše keširanje statičkih fajlova
- ❌ Botovi ignorišu robots.txt
- ❌ Automatski crawleri (SEO tools, AI scrapers)

## Implementirana rešenja

### 1. **AGRESIVNI** Middleware sa Bot Blocking (`middleware.ts`)
- **REDUCED rate limit**: 5 zahteva po minuti po IP adresi (bilo 10)
- **REDUCED API rate limit**: 2 zahteva po minuti za `/api/*` rute (bilo 3)
- **Security headers**: HSTS, XSS Protection, Frame Options, itd.
- **Bot detection**: Blokira 40+ poznatih bot user-agentova
  - AI botovi: GPTBot, ClaudeBot, CCBot, anthropic-ai
  - SEO botovi: AhrefsBot, SemrushBot, DotBot, Majestic
  - Crawleri: Bingbot, Yandex, Baidu, Sogou
  - Headless: Puppeteer, Playwright, Selenium, PhantomJS
  - HTTP clients: curl, wget, axios, python, go-http-client
- **Suspicious path blocking**: WordPress, admin panels, .env, .git
- **Referer validation**: POST/PUT/DELETE bez refera = BLOCK
- Automatsko blokiranje pri prekoračenju limita (HTTP 429/403)

### 2. Optimizovan API Endpoint (`app/api/send-order/route.ts`)
- **Spam zaštita**: Maksimalno 5 narudžbina po IP adresi na sat
- **Validacija**: Provera svih obaveznih polja
- **Email validacija**: Regex provera za email format
- **Cart validacija**: Provera da korpa nije prazna

### 3. Next.js Konfiguracija (`next.config.ts`)
- **Image optimization**: AVIF i WebP formati
- **Long-term caching**: 1 godina za statičke fajlove
- **Compression**: Omogućena kompresija
- **Package optimization**: Optimizovani importi za lucide-react

### 4. Robots.txt (`app/robots.ts`)
- Blokiranje AI botova: GPTBot, ClaudeBot, CCBot, etc.
- Blokiranje SEO crawlera: AhrefsBot, SemrushBot, DotBot
- Zaštita `/api/` i `/_next/` ruta

### 5. Vercel konfiguracija (`vercel.json`)
- Security headers za sve rute
- No-cache za API endpointe
- Silent GitHub deployments

## Kako dalje pratiti

### Vercel Analytics
1. Idi na Vercel Dashboard
2. Otvori svoj projekat
3. Klikni na "Analytics" tab
4. Prati:
   - Edge requests per day
   - Bandwidth usage
   - Top paths (koje rute se najviše pozivaju)
   - 429 responses (blokirani zahtevi)

## ⚠️ GLAVNI PROBLEM: Botovi ignorišu middleware!

**Middleware POMAŽE ali NIJE DOVOLJNO** jer:
- Botovi i dalje dolaze do edge functions
- Svaki request troši Vercel bandwidth
- Edge middleware execution = trošak

## 🎯 PRAVO REŠENJE: CLOUDFLARE

**Detaljno uputstvo u fajlu: `CLOUDFLARE_SETUP.md`**

Cloudflare postavljen ispred Vercela:
✅ Zaustavlja botove PRE nego stignu do Vercela
✅ 100% BESPLATNO
✅ Bot Fight Mode (blokira poznate botove)
✅ Rate limiting na edge nivou
✅ DDoS protection
✅ Geo-blocking (blokiraj zemlje)
✅ Challenge suspicious traffic
✅ CDN za brži sajt

**Očekivani rezultat**: 80-95% smanjenje edge requests!

---

### Alternative opcije (ako Cloudflare ne želiš)

Ako problem i dalje postoji, razmotri:

1. **Vercel Web Application Firewall (WAF)**
   - Dodatna zaštita od DDoS napada
   - Dostupno na Pro/Enterprise planu

2. **Cloudflare ispred Vercela**
   - Dodatni DDoS protection layer
   - Bot management
   - Rate limiting na edge nivou

3. **Redis/Upstash za Rate Limiting**
   - Trenutno koristi in-memory storage
   - Za multi-region deploy treba eksterno skladište
   ```bash
   npm install @upstash/redis
   ```

4. **Honeypot za kontakt forme**
   - Dodatna zaštita od botova

5. **Google reCAPTCHA v3**
   - Za kritične forme (narudžbine)
   ```bash
   npm install react-google-recaptcha-v3
   ```

## Testiranje

Nakon deploy-a:

```bash
# Test rate limiting
curl -X POST https://www.vinarijaaleks.co.rs/api/send-order \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'

# Ponovi 4 puta brzo - 5. poziv treba da vrati 429
```

## Monitoring

Prati sledeće metrike:
- ✅ Edge requests (treba da padnu značajno)
- ✅ 429 error rate (povećanje = botovi se blokiraju)
- ✅ Bandwidth (treba da se smanji zbog boljeg kešinga)
- ✅ Build size (optimizovan)

## Kontakt

Ako i dalje postoje problemi, proveri:
1. Vercel Logs - da vidiš koje IP adrese napadaju
2. Top Paths - koje rute dobijaju najviše traffica
3. Referrers - odakle dolaze zahtevi
