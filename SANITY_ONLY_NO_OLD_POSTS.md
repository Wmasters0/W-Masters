# Sanity-only version

This version removes fallback to old markdown posts.

That means:
- The site will show ONLY Sanity content.
- Old files inside `content/analyses`, `content/learn`, `content/signals` are ignored by the code.
- These folders are empty except `.gitkeep`.

Important:
If you still see old posts after uploading this:
1. The new `app/lib.js` did not replace the old file in GitHub.
2. Or Vercel is still serving an old deployment.
3. Or the browser cache is showing old data.

Check GitHub:
`app/lib.js` must NOT include `readCollection` or `gray-matter`.

Then Vercel:
Deployments → latest deploy must be Ready.

Then open:
`/analyses` in incognito.
