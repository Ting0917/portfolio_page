# Trilingual Portfolio Website

A modern, professional portfolio website supporting Japanese, Chinese, and English. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

✨ **Trilingual Support**: Seamlessly switch between English, Japanese (日本語), and Chinese (中文)
📧 **Contact Form**: Integrated with EmailJS for easy message handling
📊 **Analytics Ready**: Placeholder for Vercel Analytics and Google Analytics
🎨 **Beautiful Design**: Editorial-inspired aesthetic with custom animations
📱 **Fully Responsive**: Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Contact Form**: EmailJS
- **Animations**: Framer Motion
- **Deployment**: Vercel

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager


1. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

1. **Open your browser**
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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


2
---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
