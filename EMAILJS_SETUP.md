# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in under 5 minutes.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail recommended for testing)
3. For Gmail:
   - Click "Connect Account"
   - Sign in with your Google account
   - Grant permissions
4. Note down your **Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Use this template:

**Template Name**: `portfolio_contact`

**Subject**: `New Contact Form Submission from {{from_name}}`

**Content**:
```
Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent via your portfolio website
```

4. Save the template
5. Note down your **Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" → "General" in the sidebar
2. Find your **Public Key** (looks like: `aBcD1234eFgH5678`)
3. Copy this key

## Step 5: Update Your Code

Open `src/components/ContactForm.tsx` and replace the placeholder values:

```typescript
await emailjs.send(
  'service_xxxxxxx',    // Replace with your Service ID
  'template_xxxxxxx',   // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  },
  'aBcD1234eFgH5678'    // Replace with your Public Key
);
```

## Step 6: Test

1. Run your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox!

## Troubleshooting

### Not receiving emails?

1. **Check spam folder** - First submission might go to spam
2. **Verify email service** - Make sure service is connected
3. **Check template variables** - Names must match exactly: `from_name`, `from_email`, `message`
4. **Check browser console** - Look for error messages

### Rate limits

Free tier limits:
- 200 emails per month
- Perfect for a portfolio site

Need more? Upgrade to a paid plan on EmailJS.

## Alternative: Web3Forms (No Account Needed)

If you want even simpler setup:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email to get an access key
3. Update ContactForm.tsx:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY_HERE',
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }),
});
```

## Security Note

The public key in EmailJS is safe to expose in client-side code. It's designed to be public and doesn't give access to your email account.

---

That's it! Your contact form is now functional. 🎉
