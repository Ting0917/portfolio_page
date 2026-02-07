'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  translations: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
}

export default function ContactForm({ translations: t }: ContactFormProps) {
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
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
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
      <div>
        <label htmlFor="name" className="block text-navy font-medium mb-2">
          {t.name}
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

      <div>
        <label htmlFor="email" className="block text-navy font-medium mb-2">
          {t.email}
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

      <div>
        <label htmlFor="message" className="block text-navy font-medium mb-2">
          {t.message}
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

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-navy text-cream px-8 py-4 rounded-lg hover:bg-accent transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
      >
        {status === 'sending' ? t.sending : t.send}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center animate-fade-in">
          {t.success}
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-center animate-fade-in">
          {t.error}
        </div>
      )}
    </form>
  );
}