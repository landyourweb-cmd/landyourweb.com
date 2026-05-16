import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Land Your Web privacy policy. We don't sell your data. We don't share it. We use it only to provide our services.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-6 py-24 lg:py-32">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Legal</p>
        <h1 className="text-4xl font-light tracking-tight text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-12">Last updated May 16, 2026</p>

        <div className="prose prose-slate prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">1. What we collect</h2>
            <p className="text-sm text-slate-500 leading-relaxed">When you fill out our contact form, we collect your name, email address, company name, and any message you provide. We also collect anonymous usage data through Plausible Analytics — page views, referrers, and device types. No cookies, no tracking IDs, no fingerprinting.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">2. How we use it</h2>
            <p className="text-sm text-slate-500 leading-relaxed">We use your contact information to respond to your inquiry and provide our services. We use analytics data to understand how people find and use our site so we can make it better. That&apos;s it.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">3. What we don&apos;t do</h2>
            <p className="text-sm text-slate-500 leading-relaxed">We don&apos;t sell your data. We don&apos;t share it with third parties. We don&apos;t use it for advertising. We don&apos;t buy or rent email lists. We don&apos;t use tracking cookies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Where your data lives</h2>
            <p className="text-sm text-slate-500 leading-relaxed">Contact form submissions are stored in Supabase (EU-West, Ireland) and forwarded to our email. Analytics data is stored in Plausible (EU). Your data never leaves the European Union.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Your rights</h2>
            <p className="text-sm text-slate-500 leading-relaxed">You can ask us what data we have about you, request corrections, or ask us to delete it. Email hello@landyourweb.com. We&apos;ll respond within 30 days as required by GDPR.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Contact</h2>
            <p className="text-sm text-slate-500 leading-relaxed">Land Your Web LLC. Questions about this policy? Email hello@landyourweb.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
