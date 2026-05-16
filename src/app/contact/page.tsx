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
    try {
      await fetch('https://formspree.io/f/mjglnnon', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      const supabaseUrl = 'https://fkgdehorjzbqwwakbzxw.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZ2RlaG9yanpicXd3YWtienh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzkwNzUsImV4cCI6MjA5NDUxNTA3NX0.98V4Ik5yF9TmettBYxLa87m_LxMBZFI_7v69hoZRCag';
      await fetch(`${supabaseUrl}/rest/v1/contacts`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}`, 'Prefer': 'return=minimal' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), company: data.get('practice') || null, message: data.get('message'), service_interest: data.get('package') || null, source: 'website' }) });
      setSubmitted(true);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-md">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Message received</p>
          <h1 className="text-4xl font-light tracking-tight text-slate-900 mb-4">We&apos;ll be in touch</h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">Expect a response within 24 hours. Usually faster.</p>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Back to home <span aria-hidden="true">→</span></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — context */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Start a project</p>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">Tell us about your practice</h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              We build websites for professional practices — dental, legal, medical, financial. 
              If you serve clients and your current site isn&apos;t pulling its weight, you&apos;re in the right place.
            </p>
            <div className="space-y-4 text-sm text-slate-500 border-t border-slate-100 pt-8">
              <p className="font-medium text-slate-700">What happens next:</p>
              <ol className="space-y-3 list-decimal list-inside marker:text-slate-400">
                <li>We review your practice and current web presence</li>
                <li>You get a proposal with deliverables and timeline</li>
                <li>We build and launch in 10 calendar days</li>
                <li>Ongoing management included in every package</li>
              </ol>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full name</label>
              <input type="text" id="name" name="name" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-shadow" placeholder="Dr. Jane Smith" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email address</label>
              <input type="email" id="email" name="email" required className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-shadow" placeholder="jane@yourpractice.com" />
            </div>
            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-slate-700 mb-2">Practice or company</label>
              <input type="text" id="practice" name="practice" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-shadow" placeholder="Bright Smile Dental Group" />
            </div>
            <div>
              <label htmlFor="package" className="block text-sm font-medium text-slate-700 mb-2">Interested in</label>
              <select id="package" name="package" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-shadow">
                <option value="">Select a package</option>
                <option value="foundation">Foundation — $2,500 + $500/mo</option>
                <option value="growth">Growth — $5,000 + $2,500/mo</option>
                <option value="dominance">Dominance — $10,000 + $5,000/mo</option>
                <option value="not-sure">Not sure — help me decide</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Tell us about your practice</label>
              <textarea id="message" name="message" rows={4} className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-shadow resize-none" placeholder="What kind of practice do you run? What are you hoping a new website will accomplish?" />
            </div>
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white py-3.5 rounded-lg font-medium text-sm transition-colors">
              {loading ? 'Sending…' : 'Send message'}
            </button>
            <p className="text-xs text-slate-400">By submitting, you agree to our <a href="/privacy" className="underline hover:text-slate-600">Privacy Policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
