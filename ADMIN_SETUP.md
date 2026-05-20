# Admin panel check

After deploy, test these URLs:

1. `/admin/config.yml`
   - Must show the YAML config text.
   - If this is 404, the config file is not deployed.

2. `/admin/`
   - Must load the Decap CMS interface.

Important:
The current backend is `git-gateway`, which works with Netlify Identity.
On Vercel, the CMS can load, but publishing will require GitHub OAuth backend or Netlify as CMS/admin host.
