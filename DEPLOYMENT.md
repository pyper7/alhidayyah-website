# Deployment Guide

## Quick Deploy to Vercel (Recommended - Easiest)

### Step 1: Prepare Your Repository
1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub:
   - Create a new repository on GitHub
   - Push your code:
```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in 2-3 minutes!

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., alhidayyahislamicfoundation.net)
4. Follow DNS configuration instructions

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Manual Deployment

### Build the Project
```bash
npm install
npm run build
```

### Static Export (Optional)
If you want a fully static site, add to `next.config.mjs`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

Then build:
```bash
npm run build
```

The `out` folder will contain your static site ready to deploy anywhere.

## Environment Variables

Currently, no environment variables are required. If you add features like:
- Contact form backend
- Analytics
- CMS integration

You'll need to add them in your deployment platform's environment variables section.

## Performance Tips

1. **Images**: Optimize images before uploading
2. **Fonts**: Already optimized with `next/font`
3. **Caching**: Vercel/Netlify handle caching automatically
4. **CDN**: Both platforms provide global CDN automatically

## Monitoring

After deployment:
- Check site speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor uptime
- Set up analytics (Google Analytics, etc.)

## Updates

To update the site:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel/Netlify will automatically redeploy

---

**Recommended**: Use Vercel for the easiest deployment experience with Next.js!

