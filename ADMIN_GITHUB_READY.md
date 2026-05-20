# Admin GitHub OAuth Ready

This version uses a clean static Decap admin page:

- `/admin/`
- `/admin/config.yml`

Config is already set to:

- repo: `Wmasters0/W-Masters`
- base_url: `https://w-masters.vercel.app`
- auth_endpoint: `api/auth`

Vercel environment variables still needed:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `CMS_REPO` = `Wmasters0/W-Masters`
- `CMS_SITE_URL` = `https://w-masters.vercel.app`

GitHub OAuth callback URL must be:

`https://w-masters.vercel.app/api/callback`

After upload:
1. Commit to GitHub
2. Redeploy on Vercel
3. Open `/admin/config.yml`
4. Open `/admin/` in incognito
