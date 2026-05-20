# v25 Admin Fix

This fixes the issue where Decap was redirecting to api.netlify.com.

The fix:
- `window.CMS_MANUAL_INIT = true` is now set BEFORE the Decap script loads.
- Decap is manually initialized with GitHub backend.
- It forces:
  - base_url: https://w-masters.vercel.app
  - auth_endpoint: api/auth

After uploading:
1. Delete any old `app/admin` folder from GitHub if it remains.
2. Commit this ZIP.
3. Redeploy Vercel.
4. Open `/admin/` in incognito.
5. Click Login with GitHub.
