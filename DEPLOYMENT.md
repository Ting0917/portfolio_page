# Deployment Guide

This guide covers deploying your trilingual portfolio to various platforms.

## Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by the Next.js team
- Zero configuration needed
- Free SSL certificates
- Global CDN
- Automatic deployments from Git
- Built-in analytics available

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Time to deploy**: ~3 minutes

---

## Option 2: Netlify

**Steps:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Git**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Or drag and drop**
   - Run `npm run build`
   - Drag `.next` folder to Netlify

**Time to deploy**: ~5 minutes

---

## Option 3: GitHub Pages

**Note**: Requires static export. Some Next.js features won't work.

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update next.config.js**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

3. **Add deploy script to package.json**
   ```json
   "scripts": {
     "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

**Time to deploy**: ~10 minutes

---

## Option 4: Cloudflare Pages

**Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Deploy**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect your repository
   - Build settings:
     - Framework: Next.js
     - Build command: `npm run build`
     - Build output: `.next`
   - Click "Save and Deploy"

**Time to deploy**: ~5 minutes

---

## Adding Analytics After Deployment

### Vercel Analytics

1. **Install**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to layout**
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **Redeploy** - Analytics will appear in Vercel dashboard

### Google Analytics

1. **Get GA4 Measurement ID**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to layout** (`src/app/[locale]/layout.tsx`)
   ```typescript
   <head>
     <script
       async
       src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     />
     <script
       dangerouslySetInnerHTML={{
         __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-XXXXXXXXXX');
         `,
       }}
     />
   </head>
   ```

---

## Environment Variables

If you need environment variables (for API keys, etc.):

### Local Development
1. Create `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Vercel/Netlify/Cloudflare
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## Custom Domain Setup

### Vercel
1. Project Settings → Domains
2. Add domain
3. Update DNS:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### Cloudflare Pages
- Automatically configured if using Cloudflare DNS
- Otherwise, follow Cloudflare's DNS setup

---

## Performance Optimization

After deployment:

1. **Check Lighthouse Score**
   - Open DevTools
   - Run Lighthouse audit
   - Should score 90+ in all categories

2. **Enable Compression**
   - Vercel/Netlify: Automatic
   - Others: Enable gzip in server config

3. **Image Optimization**
   - Use Next.js Image component
   - Vercel: Automatic optimization
   - Others: Consider Cloudinary or ImageKit

---

## Monitoring

**Uptime Monitoring** (Free):
- [UptimeRobot](https://uptimerobot.com/)
- [Pingdom](https://www.pingdom.com/)

**Error Tracking**:
- [Sentry](https://sentry.io/) - Free tier available

---

## Troubleshooting

### Build fails
- Check Node.js version (requires 18+)
- Clear cache: `rm -rf .next node_modules && npm install`

### i18n routes not working
- Ensure middleware.ts is in src/ folder
- Check locale configuration in routing.ts

### Images not loading
- Use Next.js Image component
- Check image paths start with `/`

### Contact form not working
- Verify EmailJS credentials
- Check browser console for errors
- Ensure CORS is not blocked

---

## Post-Deployment Checklist

- [ ] Test all language versions (EN, JA, ZH)
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test analytics tracking
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (usually automatic)
- [ ] Add to Google Search Console
- [ ] Submit sitemap

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. **Automatic deploy**
   - Changes automatically deploy
   - Preview URLs for pull requests
   - Rollback capability

---

**Recommended Setup**: Vercel + Vercel Analytics + Custom Domain

This gives you the best developer experience and performance out of the box!
