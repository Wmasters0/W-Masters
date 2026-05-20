# GitHub Upload Notes

This version is GitHub web-upload friendly.

Important changes:
- Removed `app/studio/[[...tool]]` because GitHub's web uploader can fail on catch-all bracket folders.
- Sanity Studio now runs as a standalone admin panel.

## Website on Vercel
Deploy this repo normally as a Next.js app.

## Admin panel locally
```bash
npm install
npm run studio
```

## Deploy Sanity admin panel
```bash
npm run studio:deploy
```

After deployment, Sanity will give you a Studio URL.

## Required Vercel environment variables
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```
