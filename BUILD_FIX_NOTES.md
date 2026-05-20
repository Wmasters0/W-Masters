# Build Fix v31

Fixed Vercel build error:

`You cannot define a route with the same specificity as an optional catch-all route ("/studio" and "/studio[[...index]]").`

What changed:
- Removed duplicate `pages/studio`
- Removed duplicate `app/studio/page.jsx`
- Kept only `app/studio/[[...tool]]/page.jsx`

Studio URL:
`/studio`
