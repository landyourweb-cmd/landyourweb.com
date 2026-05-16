import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Land Your Web builds custom websites for professional practices. 10-day delivery, ongoing management, one team end to end.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">About</p>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.1] max-w-3xl">
          One team, end to end. No contractors, no handoffs.
        </h1>
      </section>

      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-4">The problem with agency websites</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Most agencies sell you a website, then hand it off. You get a template with your logo, 
              some stock photos, and a contact form that may or may not work. Six months later, 
              the site is stale, the form is broken, and you&apos;re too busy to fix it.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-4">How we&apos;re different</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              We build custom sites on a modern stack — Next.js, Tailwind CSS, and Supabase — 
              then manage them for you. Every site includes ongoing hosting, monitoring, updates, 
              and improvements. You focus on your practice. We handle everything else.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">—</span> 10 calendar days from conversation to launch</li>
              <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">—</span> No templates. Every site is purpose-built</li>
              <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">—</span> Hosting, SSL, and monitoring included</li>
              <li className="flex items-start gap-2"><span className="text-slate-300 mt-0.5">—</span> Monthly reports with real performance data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-slate-900 mb-12">Built on a modern stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Next.js", desc: "React framework. Fast, SEO-friendly, deployed on Vercel." },
              { name: "Tailwind CSS", desc: "Utility-first styling. Consistent design, zero bloat." },
              { name: "Supabase", desc: "PostgreSQL database with built-in auth and realtime." },
              { name: "Payload CMS", desc: "Headless CMS. You control content without touching code." },
            ].map((t) => (
              <div key={t.name}>
                <h4 className="font-semibold text-slate-900 text-sm mb-2">{t.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 text-center">
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-slate-900 mb-4">Ready to see what we can build?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors mt-6">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
