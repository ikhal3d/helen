'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
            Your name
          </span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="input-luxe mt-2"
            placeholder="Charlotte"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
            Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="input-luxe mt-2"
            placeholder="charlotte@email.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
          Subject
        </span>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="input-luxe mt-2"
          placeholder="A question about your face oil"
        />
      </label>
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-widest-2 text-ink-300">
          Message
        </span>
        <textarea
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="input-luxe mt-2 resize-none"
          placeholder="Hello Helen, I would like to know…"
        />
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'submitting'}
        className="btn-primary disabled:opacity-60"
      >
        {status === 'success' ? (
          <>
            <Check className="h-4 w-4" strokeWidth={1.5} />
            Sent
          </>
        ) : status === 'submitting' ? (
          'Sending…'
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={1.5} />
            Send Message
          </>
        )}
      </motion.button>

      {status === 'success' && (
        <p className="text-sm text-gold-600">
          Thank you. Helen will write back personally within two business days.
        </p>
      )}
    </form>
  );
};
