# Optimizacija sajta - smanjenje edge requests

## Problem
Sajt je imao preko milion edge requests dnevno na Vercelu, što može biti uzrok:
- Bot napadi na API endpoint
- Nedostatak rate limiting-a
- Loše keširanje statičkih fajlova

## Implementirana rešenja

### 1. Middleware sa Rate Limiting (`middleware.ts`)
- **Opšti rate limit**: 10 zahteva po minuti po IP adresi
- **API rate limit**: 3 zahteva po minuti za `/api/*` rute
- **Security headers**: HSTS, XSS Protection, Frame Options, itd.
- Automatsko blokiranje pri prekoračenju limita (HTTP 429)

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

### Preporuke za production

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
