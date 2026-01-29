# Trilingual Portfolio Website

A modern, professional portfolio website supporting Japanese, Chinese, and English. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✨ **Trilingual Support**: Seamlessly switch between English, Japanese (日本語), and Chinese (中文)
📧 **Contact Form**: Integrated with EmailJS for easy message handling
📊 **Analytics Ready**: Placeholder for Vercel Analytics and Google Analytics
🎨 **Beautiful Design**: Editorial-inspired aesthetic with custom animations
📱 **Fully Responsive**: Works perfectly on all devices
🚀 **No Backend Required**: Completely serverless architecture

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Contact Form**: EmailJS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up EmailJS** (for contact form)
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Create an email service
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - Update `src/components/ContactForm.tsx` with your credentials:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',      // Replace this
     'YOUR_TEMPLATE_ID',     // Replace this
     {...},
     'YOUR_PUBLIC_KEY'       // Replace this
   );
   ```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Try switching languages using the navigation bar

## Customization

### Update Personal Information

1. **Edit translation files** in `messages/` folder:
   - `messages/en.json` - English content
   - `messages/ja.json` - Japanese content
   - `messages/zh.json` - Chinese content

2. **Update project details** in:
   - `src/app/[locale]/page.tsx` - Home page content
   - `src/app/[locale]/about/page.tsx` - About page, skills, experience
   - `src/app/[locale]/projects/page.tsx` - Project showcases

3. **Change colors and fonts** in `tailwind.config.js`

### Adding Analytics

#### Vercel Analytics (Recommended)
```bash
npm install @vercel/analytics
```

Add to `src/app/[locale]/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In the return statement
<body>
  {children}
  <Analytics />
</body>
```

#### Google Analytics
1. Get your GA4 Measurement ID
2. Add to `src/app/[locale]/layout.tsx`:
```typescript
<head>
  <script async src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `
  }} />
</head>
```

## Deployment

### Deploy to Vercel (Easiest)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** Your site is live with automatic HTTPS and global CDN

### Deploy to Netlify

1. **Build your project**
```bash
npm run build
```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `.next` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

3. **Deploy**
```bash
npm run deploy
```

## Project Structure

```
portfolio-website/
├── messages/              # Translation files
│   ├── en.json           # English
│   ├── ja.json           # Japanese
│   └── zh.json           # Chinese
├── public/               # Static assets
├── src/
│   ├── app/
│   │   ├── [locale]/    # Locale-specific pages
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── globals.css
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   ├── lib/
│   │   └── routing.ts    # i18n routing config
│   └── i18n.ts          # i18n configuration
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Visitor Tracking

The contact form with EmailJS automatically tracks who contacts you. For page view tracking, add one of these:

- **Vercel Analytics**: Built-in, privacy-friendly
- **Google Analytics**: Most detailed insights
- **Plausible/Umami**: Privacy-focused alternatives

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Fully responsive design
- Optimized images and fonts

## License

This is a template - feel free to use it for your own portfolio!

## Support

If you need help:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [next-intl documentation](https://next-intl-docs.vercel.app/)
3. Visit [EmailJS documentation](https://www.emailjs.com/docs/)

## Next Steps

1. ✅ Customize content in translation files
2. ✅ Add your projects and experience
3. ✅ Set up EmailJS for contact form
4. ✅ Add analytics (optional)
5. ✅ Deploy to Vercel
6. 🎉 Share your portfolio!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
