'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace these with your EmailJS credentials
      // Get them from: https://www.emailjs.com/
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-navy font-medium mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-navy/10 rounded-lg focus:border-accent focus:outline-none transition-colors bg-white"
          placeholder="チェン たろう"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-navy font-medium mb-2">
          {t('email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-navy/10 rounded-lg focus:border-accent focus:outline-none transition-colors bg-white"
          placeholder="taro@example.com"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-navy font-medium mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-navy/10 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none bg-white"
          placeholder="message..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-navy text-cream px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center animate-fade-in">
          {t('success')}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-center animate-fade-in">
          {t('error')}
        </div>
      )}
    </form>
  );
}
