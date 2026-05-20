# W Masters Premium

Next.js + Sanity CMS project.

## GitHub upload
Upload the contents of this folder to GitHub. Do not upload node_modules, .next, .sanity or zip files.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Sanity admin
1. Create a Sanity project.
2. Add these env vars in `.env.local` and Vercel:
   - NEXT_PUBLIC_SANITY_PROJECT_ID
   - NEXT_PUBLIC_SANITY_DATASET
   - NEXT_PUBLIC_SANITY_API_VERSION
3. Run admin locally:
```bash
npm run studio
```
4. Deploy Sanity Studio:
```bash
npm run studio:deploy
```

Note: There is no `studio` folder in this version. The Sanity Studio runs from the root `sanity.config.ts`, so GitHub web upload should not crash on a problematic studio directory.
