# Custom Domain Setup για Netlify

## 1. Αγόρασε domain
Π.χ. wmasters.gr, wmasters.io, wmasters.vip.

Προτεινόμενα:
- Cloudflare Domains
- Namecheap
- Papaki για .gr

## 2. Netlify
Netlify → Site configuration → Domain management → Add custom domain.

Βάλε το domain σου, π.χ.
wmasterstrading.com

## 3. DNS
Αν το domain είναι σε Cloudflare/Namecheap/Papaki, βάλε τα DNS records που θα σου δώσει το Netlify.

Συνήθως:
- CNAME για www προς το Netlify site
- A records ή ALIAS/ANAME για root domain

## 4. HTTPS
Netlify → Domain management → HTTPS → Verify DNS configuration → Provision certificate.

## 5. Τελικό
Όταν ενεργοποιηθεί, το site θα ανοίγει από το custom domain σου.
