# Quick Start Reference

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open http://localhost:3000

### 3. Customize Content
Edit these files:
- `messages/en.json` - English content
- `messages/ja.json` - Japanese content  
- `messages/zh.json` - Chinese content

### 4. Set Up Contact Form
See `EMAILJS_SETUP.md` for detailed instructions.

Quick steps:
1. Create account at emailjs.com
2. Get Service ID, Template ID, and Public Key
3. Update `src/components/ContactForm.tsx`

### 5. Deploy
```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit"
git push

# Then deploy to Vercel
# Go to vercel.com and import your repo
```

---

## 📁 Key Files to Edit

### Content
- `messages/*.json` - All text content
- `src/app/[locale]/page.tsx` - Home page
- `src/app/[locale]/about/page.tsx` - About page  
- `src/app/[locale]/projects/page.tsx` - Projects page

### Styling
- `tailwind.config.js` - Colors, fonts, animations
- `src/app/globals.css` - Global styles

### Components
- `src/components/Navigation.tsx` - Navigation bar
- `src/components/Footer.tsx` - Footer
- `src/components/ContactForm.tsx` - Contact form

---

## 🎨 Customization Examples

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'cream': '#FAF7F2',     // Background
  'navy': '#1A2332',      // Primary text
  'accent': '#D4845F',    // Accent color
}
```

### Change Fonts
Edit `src/app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  'display': ['Your Font', 'serif'],
}
```

### Add Your Projects
Edit `src/app/[locale]/projects/page.tsx`:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    tech: ['React', 'Node.js'],
    // ...
  }
];
```

---

## 📊 Add Analytics

### Vercel Analytics (Easiest)
```bash
npm install @vercel/analytics
```

Add to `src/app/[locale]/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

<body>
  {children}
  <Analytics />
</body>
```

### Google Analytics
Add to `layout.tsx` head section:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `
}} />
```

---

## 🌐 Deployment Platforms

### Vercel (Recommended)
- Automatic deploys from GitHub
- Built-in analytics
- Free SSL
- Global CDN
- vercel.com

### Netlify
- Similar to Vercel
- Easy drag & drop
- netlify.com

### Cloudflare Pages
- Fast global network
- Great for static sites
- pages.cloudflare.com

---

## 🐛 Common Issues

### "Module not found" error
```bash
rm -rf node_modules .next
npm install
```

### Build fails
- Check Node.js version (need 18+)
- Make sure all dependencies installed

### Contact form not working
- Double-check EmailJS credentials
- Look at browser console for errors

### Language switching not working
- Verify middleware.ts in src folder
- Check routing.ts configuration

---

## 📚 Documentation

- Full guide: `README.md`
- Email setup: `EMAILJS_SETUP.md`
- Deployment: `DEPLOYMENT.md`

---

## ✅ Before Going Live

- [ ] Update all personal information
- [ ] Add your projects
- [ ] Test contact form
- [ ] Set up analytics (optional)
- [ ] Test on mobile devices
- [ ] Check all three languages
- [ ] Deploy!

---

## 🆘 Need Help?

1. Check the detailed guides (README.md, etc.)
2. Next.js docs: nextjs.org/docs
3. next-intl docs: next-intl-docs.vercel.app
4. EmailJS docs: emailjs.com/docs

---

**Remember**: This is YOUR portfolio. Customize it to reflect your personality and style! 🎨
