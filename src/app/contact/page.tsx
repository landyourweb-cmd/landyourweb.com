"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/mjglnnon", { method: "POST", body: data, headers: { Accept: "application/json" } });
      const url = "https://fkgdehorjzbqwwakbzxw.supabase.co";
      const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZ2RlaG9yanpicXd3YWtienh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5MzkwNzUsImV4cCI6MjA5NDUxNTA3NX0.98V4Ik5yF9TmettBYxLa87m_LxMBZFI_7v69hoZRCag";
      await fetch(`${url}/rest/v1/contacts`, { method: "POST", headers: { "Content-Type": "application/json", apikey: key, Authorization: `Bearer ${key}`, Prefer: "return=minimal" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), company: data.get("practice") || null, message: data.get("message"), service_interest: data.get("package") || null, source: "website" }) });
      setSubmitted(true);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-8">Message received</p>
          <h1 className="text-4xl font-extralight text-white mb-4">We&apos;ll be in touch</h1>
          <p className="text-white/40 mb-8">Within 24 hours. Usually faster.</p>
          <a href="/" className="hoverable inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">Back to home →</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-8">Start a project</p>
            <h1 className="text-4xl lg:text-5xl font-extralight tracking-[-0.02em] text-white mb-6">Tell us about your practice</h1>
            <p className="text-white/40 leading-relaxed mb-10">
              We build websites for professional practices. If you serve clients and your current site isn&apos;t pulling its weight, you&apos;re in the right place.
            </p>
            <div className="space-y-4 text-sm text-white/30 border-t border-white/5 pt-8">
              <p className="font-medium text-white/60">What happens next:</p>
              <ol className="space-y-3 list-decimal list-inside marker:text-white/20">
                <li>We review your practice and current web presence</li>
                <li>You get a proposal with deliverables and timeline</li>
                <li>We build and launch in 10 calendar days</li>
                <li>Ongoing management included in every package</li>
              </ol>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Full name</label>
              <input type="text" id="name" name="name" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all" placeholder="Dr. Jane Smith" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email address</label>
              <input type="email" id="email" name="email" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all" placeholder="jane@yourpractice.com" />
            </div>
            <div>
              <label htmlFor="practice" className="block text-sm font-medium text-white/60 mb-2">Practice or company</label>
              <input type="text" id="practice" name="practice" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all" placeholder="Bright Smile Dental Group" />
            </div>
            <div>
              <label htmlFor="package" className="block text-sm font-medium text-white/60 mb-2">Interested in</label>
              <select id="package" name="package" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all">
                <option value="">Select a package</option>
                <option value="foundation">Foundation — $2,500 + $500/mo</option>
                <option value="growth">Growth — $5,000 + $2,500/mo</option>
                <option value="dominance">Dominance — $10,000 + $5,000/mo</option>
                <option value="not-sure">Not sure — help me decide</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Tell us about your practice</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all resize-none" placeholder="What kind of practice do you run? What are you hoping a new website will accomplish?" />
            </div>
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" disabled={loading} className="hoverable w-full bg-white hover:bg-white/90 disabled:bg-white/20 text-black py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              {loading ? "Sending…" : "Send message"}
            </button>
            <p className="text-xs text-white/20">By submitting, you agree to our <a href="/privacy" className="underline hover:text-white/40">Privacy Policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
