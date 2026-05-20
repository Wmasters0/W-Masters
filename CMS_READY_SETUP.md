# W Masters CMS Ready Setup

This version does NOT require editing `public/admin/config.yml`.
The CMS config is generated dynamically from Vercel environment variables.

## Step 1 — Upload this version to GitHub

Replace your repo files with this ZIP, commit, and let Vercel deploy.

## Step 2 — Find your repo name

Example:
`blendwithpeople/wmasters-site`

You need the format:
`GITHUB_USERNAME/REPO_NAME`

## Step 3 — Create GitHub OAuth App

Go to:

GitHub → Settings → Developer settings → OAuth Apps → New OAuth App

Use:

Application name:
`W Masters CMS`

Homepage URL:
`https://YOUR_VERCEL_DOMAIN.vercel.app/admin/`

Authorization callback URL:
`https://YOUR_VERCEL_DOMAIN.vercel.app/api/callback`

After creating it, copy:
- Client ID
- Client Secret

## Step 4 — Add Vercel Environment Variables

Vercel → Project → Settings → Environment Variables

Add these:

`GITHUB_CLIENT_ID`
= your GitHub OAuth Client ID

`GITHUB_CLIENT_SECRET`
= your GitHub OAuth Client Secret

`CMS_REPO`
= your GitHub repo, for example:
`blendwithpeople/wmasters-site`

`CMS_SITE_URL`
= your live Vercel site, for example:
`https://wmasters.vercel.app`

Set all variables for:
- Production
- Preview
- Development

Then Redeploy.

## Step 5 — Test

Open:

`/admin/config.yml`

You should see YAML text and it should include your repo.

Then open:

`/admin/`

Click Login with GitHub.

## Important

The GitHub account that logs in must have write access to the repo.

When you publish from CMS:
CMS → GitHub commit → Vercel auto deploy → live site updates.
