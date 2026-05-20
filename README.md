# W Masters Next.js v7 Platform

Pages:
- `/` Home
- `/analyses` Ανάλυση της Εβδομάδας & archive
- `/analysis/[slug]` Dynamic CMS analysis pages
- `/dashboard` ROI Dashboard από CMS signals
- `/learn` Learn Trading posts από CMS
- `/learn/[slug]` Dynamic lessons
- `/coaching` Book 1on1 Coaching
- `/trade-journal` Future trade tracker tool
- `/admin` Decap CMS

Netlify:
- Build command: `npm run build`
- Publish directory: `.next`

CMS Collections:
- Trading Αναλύσεις
- Signal Tracker / ROI
- Learn Trading Posts

Custom domain:
- See `CUSTOM_DOMAIN_SETUP.md`


## TradingView Embed Note
Το TradingView embed είναι πιο βαρύ από τα static sections, αλλά βρίσκεται χαμηλά στο Home, άρα δεν επηρεάζει τόσο το πρώτο impression. Αν θέλουμε πιο γρήγορο loading, μπορούμε να το βάλουμε σε ξεχωριστή σελίδα `/markets`.


## Paid Course Setup

1. Create a Stripe account.
2. Create Product: W Masters Trading Course.
3. Create Payment Link.
4. In Netlify:
   Site configuration → Environment variables → Add variable

Name:
NEXT_PUBLIC_COURSE_CHECKOUT_URL

Value:
your Stripe Payment Link

5. Redeploy site.

Pages:
- /course
- /course/success
- /course/cancel

For Stripe Payment Link settings, set:
- Success URL: https://yourdomain.com/course/success
- Cancel URL: https://yourdomain.com/course/cancel


## v14 Hero Update
The Home hero visual now uses a static W Masters banner with a subtle animated matrix/trading background.
Component: `components/RotatingLogo3D.jsx`
Asset: `public/assets/w_masters_hero_banner.png`


## v15 Premium Logo Hero
The Home hero visual now uses only the W Masters mark as a large premium 3D coin-style emblem.
Component: `components/RotatingLogo3D.jsx`
Asset: `public/assets/w_masters_mark.png`


## v16 Emerald Depth Hero
Hero visual updated to Emerald Depth: premium 3D coin mark, teal smoke atmosphere, cinematic gold/emerald lighting.
Component: `components/RotatingLogo3D.jsx`


## v17 Emerald Palette
Site-wide palette updated to match the Emerald Depth reference: darker panels, teal smoke ambience, metallic gold highlights.
