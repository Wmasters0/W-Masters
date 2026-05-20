# Decap CMS + GitHub OAuth on Vercel

This version changes Decap CMS from Netlify Git Gateway to GitHub OAuth.

## 1. Replace placeholders in config.yml

Open:

`public/admin/config.yml`

Replace:

`YOUR_GITHUB_USERNAME/YOUR_REPO_NAME`

with your real repo, for example:

`blendwithpeople/wmasters-site`

Replace:

`https://YOUR_VERCEL_DOMAIN.vercel.app`

with your real Vercel domain, for example:

`https://wmasters.vercel.app`

## 2. Create GitHub OAuth App

GitHub → Settings → Developer settings → OAuth Apps → New OAuth App

Use:

Application name:
`W Masters CMS`

Homepage URL:
`https://YOUR_VERCEL_DOMAIN.vercel.app/admin/`

Authorization callback URL:
`https://YOUR_VERCEL_DOMAIN.vercel.app/api/callback`

After creation, copy:
- Client ID
- Client Secret

## 3. Add Vercel environment variables

Vercel → Project → Settings → Environment Variables

Add:

`GITHUB_CLIENT_ID`
= your GitHub OAuth Client ID

`GITHUB_CLIENT_SECRET`
= your GitHub OAuth Client Secret

Set them for Production, Preview, Development.

Then redeploy.

## 4. Test

Open:

`/admin/config.yml`

Then:

`/admin/`

Click Login with GitHub.

## Notes

The GitHub user that logs in must have write/push access to the repository.
When you publish from Decap CMS, it commits markdown files directly into:
- `content/analyses`
- `content/signals`
- `content/learn`

Vercel will then auto-deploy the new commit.
