# Forced GitHub Admin

This version forces Decap to use the GitHub backend from inside `public/admin/index.html`.

Important:
- Delete any leftover `app/admin` folder from GitHub.
- Keep only `public/admin/index.html` and `public/admin/config.yml` for admin.

Vercel env variables:
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
- CMS_SITE_URL = https://w-masters.vercel.app
- CMS_REPO = Wmasters0/W-Masters

After upload:
1. Commit to GitHub
2. Redeploy on Vercel
3. Open `/admin/` in incognito
4. If it still shows email/password, clear cache/site data for w-masters.vercel.app.
