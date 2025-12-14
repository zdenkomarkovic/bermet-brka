# 🚀 Deploy Checklist - Bot Protection

## ✅ Što je urađeno

### 1. Agresivna Middleware Zaštita
- ✅ Blokiranje 40+ bot user-agentova
- ✅ Rate limiting: 5 req/min (opšti), 2 req/min (API)
- ✅ Suspicious path blocking
- ✅ Referer validation za POST/PUT/DELETE
- ✅ Security headers (HSTS, XSS, Frame Options)

### 2. API Hardening
- ✅ IP-based spam protection (5 narudžbina/sat)
- ✅ Input validation (email, cart, polja)
- ✅ Error handling

### 3. Optimizacije
- ✅ Long-term caching (statički fajlovi)
- ✅ Image optimization (AVIF/WebP)
- ✅ Compression enabled
- ✅ Package optimizations

### 4. SEO & Security
- ✅ Robots.txt (blokira AI/SEO botove)
- ✅ Full metadata (OG, Twitter Cards)
- ✅ Sitemap generation

### 5. Monitoring
- ✅ Health check endpoint (`/api/health`)
- ✅ Vercel config za caching
- ✅ Dokumentacija

---

## 📋 Pre Deploy-a

### 1. Git Commit
```bash
git add .
git commit -m "feat: aggressive bot protection + Cloudflare setup guide"
git push
```

### 2. Proveri Environment Variables na Vercelu
Idi u Vercel → Project → Settings → Environment Variables

Proveri da su setovane:
- ✅ `SMTP_HOST`
- ✅ `SMTP_PORT`
- ✅ `SMTP_USER`
- ✅ `SMTP_PASS`
- ✅ `CONTACT_EMAIL`

---

## 📊 Posle Deploy-a - Praćenje (Prvi 24h)

### U Vercel Analytics
1. **Edge Requests** - trebalo bi da vidiš pad, ali neće biti drastičan bez Cloudflare
2. **Top Paths** - koje rute dobijaju najviše traffica
3. **Status Codes**:
   - `403` - blokirani botovi (dobro!)
   - `429` - rate limited (dobro!)
   - `500` - greške (loše - istraži)

### U Vercel Logs
```
Projekat → Logs → Filter po:
- Status 403 (botovi)
- Status 429 (rate limited)
```

Gledaj:
- Koji user-agenti se blokiraju
- Koje IP adrese napadaju
- Koji paths se napadaju

---

## 🎯 SLEDECI KORAK: Cloudflare Setup

**Middleware će pomoći ali NEĆE rešiti problem 100%**

Razlog: Botovi i dalje stižu do Vercel edge-a = troše bandwidth

### Procitaj: `CLOUDFLARE_SETUP.md`

**Setup Cloudflare za 80-95% smanjenje traffica!**

Timeline:
- ⏱️ 5-10 min: Napravi Cloudflare account
- ⏱️ 10-20 min: Prebaci nameservere
- ⏱️ 30-60 min: DNS propagacija
- ⏱️ 24h: Pun efekat

---

## 🔍 Debugging ako problem postoji

### Scenario 1: Još uvek 1500+ req/sat
**Uzrok**: Botovi koji imitiraju normalne browsere
**Rešenje**:
1. Setup Cloudflare (PRVO)
2. U Cloudflare: Security Level = "I'm Under Attack"
3. Uključi Bot Fight Mode

### Scenario 2: Normalni korisnici blokirani
**Uzrok**: Previše strogi rate limit
**Rešenje**: U `middleware.ts` povećaj:
```typescript
const MAX_REQUESTS_PER_WINDOW = 10 // sa 5 na 10
```

### Scenario 3: API narudžbine ne rade
**Uzrok**: Referer validation
**Rešenje**: Privremeno onemogući u `middleware.ts` linija 98-103

### Scenario 4: Edge requests RASTAO
**Uzrok**: 403/429 responses i dalje troše edge
**Rešenje**: MORA Cloudflare - blokira PRE edge-a

---

## 📈 Success Metrics

### Dobri znaci:
- ✅ Edge requests padaju (makar malo)
- ✅ Više 403/429 status kodova (znači middleware radi)
- ✅ Manje noćnih request-ova
- ✅ Bandwidth se smanjuje

### Loši znaci:
- ❌ Edge requests i dalje 1500+/sat
- ❌ Normalni korisnici se žale
- ❌ API ne radi

---

## 🆘 Hitna Pomoć

Ako nešto pukne posle deploya:

### Quick Rollback
```bash
# U Vercelu: Deployments → prethodni deployment → "Promote to Production"
```

### Disable Middleware (hitno)
U `middleware.ts` dodaj na vrh:
```typescript
export const config = {
  matcher: [], // Disable sve
}
```

### Kontaktiraj Support
- Vercel Support (ako je Vercel problem)
- Cloudflare Support (ako je CF problem)

---

## 📚 Dodatni Resursi

1. **CLOUDFLARE_SETUP.md** - Detaljan setup guide
2. **SECURITY_OPTIMIZATION.md** - Tehnički detalji
3. Vercel Docs: https://vercel.com/docs/security
4. Cloudflare Docs: https://developers.cloudflare.com/

---

## ✨ Finalna Preporuka

1. ✅ Deploy ove izmene ODMAH
2. ⏱️ Prati 24h
3. 🎯 Setup Cloudflare što pre
4. 📊 Monitor rezultate
5. 🎉 Uživaj u 90% manjem trafficu!

Good luck! 🍀
