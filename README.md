# Bark & Sparkle — GitHub + Netlify Deploy Guide

This folder contains everything Netlify needs to build your site.

## What’s in here
- `src/` — your React code (App.js is your site)
- `public/` — static files
  - `uploads/` — images (placeholders included so the site builds now)
- `package.json` — project settings and dependencies

---

## Upload to GitHub (so Netlify can build it for you)
1. Go to https://github.com and sign in.
2. Click the **+** (top-right) → **New repository** → Name it `barkandsparkle` → **Create repository**.
3. Click **Upload files**.
4. On your computer, open this folder and **select all the contents**:
   - `src/`, `public/`, `package.json`, (and this) `README.md`
   - **Do not** upload the parent folder; upload the contents inside it.
5. Drag them into GitHub’s upload area → **Commit changes**.

---

## Connect GitHub to Netlify (auto-build, no terminal)
1. Log in at https://app.netlify.com
2. Open your site’s project (the card tied to `barkandsparkle.net`).
3. Go to **Site settings → Build & deploy → Continuous deployment**.
4. Click **Link to Git provider** → choose **GitHub** → authorize if asked.
5. Select your repo (e.g., `barkandsparkle`).
6. Confirm build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
7. Click **Deploy site**.

Netlify will build and publish the *real* site (with photos and logo).

---

## Replace placeholder images with your real photos
Right after it builds, upload your real images (same filenames) to replace the placeholders:

1. In GitHub, open `public/uploads/`.
2. Click **Add file → Upload files**.
3. Drag your actual images. Make sure filenames match exactly (case-sensitive).
4. Click **Commit changes**.

Netlify will rebuild automatically and the real images will appear on your site.

**Filenames expected:**  
`Logo_white_background_converted.png`, `AKC_Salon_Cert.png`, `AKC_Certificate.jpeg`, `IMG_2760.jpeg`, `IMG_2782.jpeg`, `IMG_3008.jpeg`, `IMG_3195.jpeg`, `IMG_3198.jpeg`, `IMG_3263.png`, `IMG_3322.PNG`, `IMG_3560.png`, `IMG_3561.png`, `IMG_3616.jpeg`, `3816949068861536524.png`, `IMG_3877.jpeg`, `IMG_3943.jpeg`, `IMG_3975.PNG`, `IMG_4252.jpeg`, `IMG_5117.jpeg`, `IMG_5121.jpeg`

> Tip: If any image doesn’t show, double-check the exact filename (including uppercase/lowercase).

---

## (Optional) Local preview
If you ever want to preview on your computer:
```bash
npm install
npm start
```
Then visit http://localhost:3000

---

## Troubleshooting
- **White page on Netlify** → Make sure the build settings are exactly:
  - Build command: `npm run build`
  - Publish directory: `build`
- **Images not appearing** → Replace the placeholders in `public/uploads/` with your real images using the exact same filenames.
- **404 on reload** → We include `public/_redirects` so SPA routing works.
- **Wrong domain** → In Netlify **Site settings → Domains**, set `barkandsparkle.net` as **Primary domain** and ensure HTTPS is enabled.
