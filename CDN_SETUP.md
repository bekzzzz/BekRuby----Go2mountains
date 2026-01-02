CDN setup notes
================

Use these steps once you have a CDN bucket (Cloudflare R2, AWS S3 + CloudFront, etc.):

1. Sync the `assets/` folder to your CDN bucket, keeping the same paths (e.g., `https://cdn.example.com/assets/...`).
2. After the upload, replace local asset URLs in the HTML with the CDN base. Example command from the project root (update the URL):
   - macOS/Linux: `find . -name "*.html" -print0 | xargs -0 sed -i '' 's|src="assets/|src="https://cdn.example.com/assets/|g; s|href="assets/|href="https://cdn.example.com/assets/|g'`
3. Set long cache headers on the CDN (e.g., 30 days) and enable gzip/brotli.
4. Keep a small set of critical-above-the-fold assets (logos, first hero slide) cached closer or inline if needed.
5. When updating assets, re-sync to the CDN and redeploy the HTML with the new absolute URLs.
