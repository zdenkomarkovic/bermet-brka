# Cloudflare Setup - NAJBOLJE REŠENJE za Bot Protection

## Problem
Sajt ima 1500-2000 edge requests na sat, čak i noću kada ljudi spavaju. To su **botovi** koji ignorišu robots.txt i napadaju sajt.

## Rešenje: Cloudflare + Vercel

Cloudflare postavljen **ispred** Vercela će zaustaviti botove PRE nego što stignu do tvog sajta.

---

## Korak po Korak Setup

### 1️⃣ Napravi Cloudflare Account
1. Idi na https://www.cloudflare.com/
2. Klikni "Sign Up" (besplatno)
3. Napravi account

### 2️⃣ Dodaj Domen u Cloudflare
1. Klikni "Add a Site"
2. Unesi: `vinarijaaleks.co.rs`
3. Izaberi **Free Plan** (sasvim dovoljno)
4. Klikni "Continue"

### 3️⃣ Prebaci Nameservere
Cloudflare će ti dati 2 nameservera, npr:
```
ava.ns.cloudflare.com
bob.ns.cloudflare.com
```

**Idi kod registrara domena** (gde si kupio .co.rs domen):
1. Prijavi se
2. Nađi DNS/Nameserver Settings
3. Zameni postojeće nameservere sa Cloudflare nameserverima
4. Sačekaj 5-30 minuta da se propagira

### 4️⃣ Podesi DNS u Cloudflare

U Cloudflare DNS Settings:

1. **Obriši sve postojeće zapise**
2. **Dodaj CNAME za Vercel:**

| Type  | Name | Content (Target)           | Proxy Status |
|-------|------|----------------------------|--------------|
| CNAME | @    | cname.vercel-dns.com       | ✅ Proxied   |
| CNAME | www  | cname.vercel-dns.com       | ✅ Proxied   |

⚠️ **VAŽNO**: "Proxy Status" mora biti **Proxied** (narandžasta cloud ikonica) - to znači da Cloudflare štiti sajt!

### 5️⃣ Podesi Security Settings u Cloudflare

#### A) Security Level
1. Idi na **Security** → **Settings**
2. Postavi **Security Level** na: **High** ili **I'm Under Attack**
   - High = blokira sumnjive
   - I'm Under Attack = najjači nivo (pokazuje challenge svima)

#### B) Bot Fight Mode
1. Idi na **Security** → **Bots**
2. Uključi **Bot Fight Mode** (FREE opcija)
   - Ovo automatski blokira poznate botove!

#### C) Challenge Passage
1. U **Security** → **Settings**
2. Postavi **Challenge Passage** na: **30 minutes**

#### D) Browser Integrity Check
1. U **Security** → **Settings**
2. Uključi **Browser Integrity Check**

### 6️⃣ Firewall Rules (Napredna Zaštita)

Idi na **Security** → **WAF** → **Custom Rules**

#### Pravilo 1: Blokiraj Botove
```
(cf.client.bot) or
(http.user_agent contains "bot") or
(http.user_agent contains "crawler") or
(http.user_agent contains "spider")
```
**Action**: Block

#### Pravilo 2: Rate Limiting
```
(http.request.uri.path eq "/api/send-order")
```
**Action**: Rate Limit
- Requests: 5 per 1 hour
- Period: 1 hour
- Action: Block

#### Pravilo 3: Blokiraj sumnjive zemlje (OPCIONO)
Ako ne očekuješ posetioce van Evrope:
```
(ip.geoip.country ne "RS" and ip.geoip.country ne "HR" and
 ip.geoip.country ne "BA" and ip.geoip.country ne "ME" and
 ip.geoip.continent ne "EU")
```
**Action**: Challenge (JS Challenge)

### 7️⃣ Caching Settings

Idi na **Caching** → **Configuration**

1. **Caching Level**: Standard
2. **Browser Cache TTL**: 4 hours
3. **Always Online**: On

### 8️⃣ Speed Optimization (Bonus)

Idi na **Speed** → **Optimization**

Uključi:
- ✅ Auto Minify (JavaScript, CSS, HTML)
- ✅ Brotli
- ✅ Early Hints
- ✅ Rocket Loader (pazi, može pokvariti Next.js - testirati)

---

## 🎯 Rezultati koje možeš očekivati

### PRE Cloudflare:
- 1500-2000 edge requests/sat
- Botovi non-stop napadaju
- Vercel bandwidth troškovi

### POSLE Cloudflare:
- 50-200 edge requests/sat (90%+ pad!)
- Cloudflare blokira botove PRE Vercela
- Bandwidth ušteda
- Besplatan DDoS protection

---

## 🔍 Monitoring

### U Cloudflare:
1. **Analytics** → **Traffic** - vidi koliko zahteva Cloudflare blokira
2. **Security** → **Events** - vidi blokirane botove
3. **Analytics** → **Performance** - brzina sajta

### U Vercel:
- Edge requests bi trebalo da padnu za **80-95%**!

---

## ⚡ ALTERNATIVA: Vercel WAF (Plaćeno)

Ako ne želiš Cloudflare, možeš koristiti:

**Vercel Firewall** (Pro plan - $20/mesec)
- Idi na Vercel Project Settings
- Security → Firewall
- Dodaj Custom Rules

Ali **Cloudflare je BOLJE i BESPLATNO**!

---

## 🆘 Troubleshooting

### Problem: Sajt ne radi nakon prebacivanja na Cloudflare
**Rešenje**: Proveri da je "Proxy Status" **Proxied** (narandžasta cloud)

### Problem: Redirect loop
**Rešenje**: U Cloudflare → SSL/TLS → Overview
- Postavi na **Full** ili **Full (strict)**

### Problem: Još uvek ima puno requests
**Rešenje**:
1. Proveri da DNS propagacija završena (check: https://dnschecker.org)
2. Uključi "I'm Under Attack" mode
3. Dodaj firewall rules

---

## 📊 Expected Timeline

- **0-30 min**: DNS propagacija
- **1-2 sata**: Cloudflare počinje da blokira botove
- **24 sata**: Pun efekat - pad od 80-95% u edge requests

---

## 🎓 Zaključak

**Vercel nameserveri NEĆE pomoći** - oni su samo DNS, ne štite od botova.

**Cloudflare JE PRAVO REŠENJE**:
✅ Besplatan
✅ Zaustavlja botove PRE Vercela
✅ DDoS protection
✅ Smanjuje bandwidth
✅ Ubrzava sajt (CDN)
✅ SSL/TLS automatski

Postavi Cloudflare DANAS i videćeš rezultate za 24h!
