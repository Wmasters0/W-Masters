# Final Sanity Version Notes

This full ZIP includes:
- Sanity Studio at `/studio`
- Sanity schemas for analyses, lessons, signals, course modules
- Public site connected to Sanity data
- Old local markdown content emptied
- Fallback remains, but folders are empty

Required Vercel env variables:
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET = production
- NEXT_PUBLIC_SANITY_API_VERSION = 2025-01-01

Required Sanity CORS:
- https://w-masters.vercel.app
- Allow credentials: YES

After upload:
1. Commit to GitHub.
2. Let Vercel deploy.
3. Open `/studio`.
4. Publish an analysis with a title, slug, summary, date.
5. Open `/analyses`.

Important:
If you create a post but it does not appear:
- Make sure it is Published, not Draft.
- Make sure it has a Slug.
- Make sure Vercel env variables are correct.
