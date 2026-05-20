# W Masters + Sanity Setup

This version includes Sanity Studio at:

`/studio`
and
`/studio/`

## 1. Create Sanity Project

Go to:

https://www.sanity.io/manage

Create project:
- Name: W Masters
- Dataset: production

Copy your Project ID.

## 2. Add Vercel Environment Variables

Vercel → Project → Settings → Environment Variables

Add:

`NEXT_PUBLIC_SANITY_PROJECT_ID`
= your Sanity Project ID

`NEXT_PUBLIC_SANITY_DATASET`
= production

`NEXT_PUBLIC_SANITY_API_VERSION`
= 2025-01-01

Then redeploy.

## 3. Add CORS in Sanity

Sanity dashboard → Project → API → CORS origins → Add origin

Add:

`https://w-masters.vercel.app`

Enable credentials: YES.

## 4. Open Studio

Go to:

`https://w-masters.vercel.app/studio`

If it still shows 404:
- Check Vercel latest deployment logs
- Check GitHub contains `app/studio/page.jsx`
- Check GitHub contains `app/studio/[[...tool]]/page.jsx`
