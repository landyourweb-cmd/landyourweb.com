'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Dual-write: Formspree (email) + Supabase (database)
    try {
      // 1. Formspree — delivers email notification
      await fetch('https://formspree.io/f/mjglnnon', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      // 2. Supabase — stores contact in database
      const supabaseUrl = 'https://fkgdehorjzbqwwakbzxw.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZ2RlaG9yanpicXd3YWtienh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzkwNzUsImV4cCI6MjA5NDUxNTA3NX0.98V4Ik5yF9TmettBYxLa87m_LxMBZFI_7v69hoZRCag';

      await fetch(`${supabaseUrl}/rest/v1/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          company: data.get('practice') || null,
          message: data.get('message'),
          service_interest: data.get('package') || null,
          source: 'website',
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-10">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3 text-green-800">
            Message Sent!
          </h1>
          <p className="text-lg text-green-700 mb-6">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours — usually much faster.
          </p>
          <a
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Start Your Project</h1>
        <p className="text-lg text-slate-500">
          Tell us about your practice. We&apos;ll get back to you within 24 hours — usually faster.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Dr. Jane Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="jane@yourpractice.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="practice" className="block text-sm font-semibold text-slate-700 mb-2">
            Practice or Company Name
          </label>
          <input
            type="text"
            id="practice"
            name="practice"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            placeholder="Bright Smile Dental Group"
          />
        </div>

        <div>
          <label htmlFor="package" className="block text-sm font-semibold text-slate-700 mb-2">
            Interested In
          </label>
          <select
            id="package"
            name="package"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
          >
            <option value="">Select a package</option>
            <option value="foundation">Foundation — $2,500 + $500/mo</option>
            <option value="growth">Growth — $5,000 + $2,500/mo</option>
            <option value="dominance">Dominance — $10,000 + $5,000/mo</option>
            <option value="not-sure">Not sure — help me decide</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Tell Us About Your Practice
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            placeholder="What kind of practice do you run? What are you hoping a new website will help you achieve?"
          />
        </div>

        {/* Honeypot — invisible to humans, catches bots */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-indigo-200"
        >
          {loading ? 'Sending...' : 'Send Message →'}
        </button>

        <p className="text-xs text-slate-400 text-center">
          By submitting, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-slate-600">Privacy Policy</a>.
          We&apos;ll never share your information.
        </p>
      </form>

      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm">
          Prefer to talk?{' '}
          <a href="mailto:hello@landyourweb.com" className="text-indigo-600 font-semibold hover:underline">
            hello@landyourweb.com
          </a>
        </p>
      </div>
    </div>
  );
}
