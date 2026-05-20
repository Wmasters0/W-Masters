# v26 OAuth Popup Fix

This version updates `/app/api/callback/route.js` so it posts multiple Decap-compatible auth messages back to the opener window.

After uploading:
1. Make sure old `app/admin` folder is deleted from GitHub.
2. Commit this version.
3. Let Vercel deploy.
4. Open `/admin/` in incognito.
5. Click Login with GitHub from Decap, not `/api/auth` directly.

If the popup says Authentication complete but does not close:
- allow popups for `w-masters.vercel.app`
- return to the admin tab and refresh once.
