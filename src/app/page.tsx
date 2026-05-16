import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Land Your Web — Websites for Professional Practices",
  description: "We build and manage websites for dental, legal, medical, and financial practices. 10-day delivery. Ongoing management included.",
};

const stats = [
  { value: "10", unit: "days", label: "Average delivery" },
  { value: "3", unit: "tiers", label: "From foundation to dominance" },
  { value: "24/7", unit: "", label: "Monitoring and management" },
];

const services = [
  { name: "Web Design & Development", desc: "Custom websites built on Next.js and Tailwind CSS. Fast, accessible, responsive. Not templates — every site is purpose-built for your practice.", href: "/services" },
  { name: "Lead Generation", desc: "We find practices that need better websites. Automated pipeline identifies, enriches, and scores prospects so you reach the right people at the right time.", href: "/services" },
  { name: "SEO & Content", desc: "Technical SEO, content strategy, and ongoing optimization. Rank for the terms your clients actually search for.", href: "/services" },
  { name: "Analytics & Insights", desc: "Real dashboards showing what's working. Not vanity metrics — revenue impact, lead quality, conversion rates.", href: "/services" },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Land Your Web</p>
        <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-slate-900 leading-[1.08] max-w-3xl">
          Websites for practices that deserve better than a template.
        </h1>
        <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mt-8 max-w-2xl">
          We build custom, high-performance websites for dental, legal, medical, and financial 
          practices. Ten-day delivery. Ongoing management included. No contractors, no handoffs — 
          one team, end to end.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-6 py-3 rounded-lg font-medium text-sm transition-colors">
            See what&apos;s included
          </Link>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-slate-100">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl lg:text-3xl font-light tracking-tight text-slate-900">
                {s.value}<span className="text-lg text-slate-400 ml-0.5">{s.unit}</span>
              </div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services — asymmetric grid, no icon circles */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">What we do</p>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14">
            {services.map((s, i) => (
              <div key={s.name} className={i === 0 ? "lg:col-span-2 lg:max-w-2xl" : ""}>
                <h3 className="text-xl font-medium text-slate-900 mb-3">{s.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — timeline, not cards */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-slate-900 mb-14">From conversation to live site in 10 days</h2>

          <div className="space-y-1">
            {[
              { step: "01", title: "Discovery call", desc: "We learn about your practice, your clients, and what you need the site to accomplish. 30 minutes." },
              { step: "02", title: "Design direction", desc: "You get three visual directions based on real competitor analysis. Pick one, or we iterate." },
              { step: "03", title: "Build and review", desc: "We build the full site. You review. Changes are fast because we own the entire stack." },
              { step: "04", title: "Launch and manage", desc: "Site goes live. We handle hosting, updates, analytics, and ongoing improvements. You focus on your practice." },
            ].map((item) => (
              <div key={item.step} className="grid grid-cols-[auto_1fr] gap-6 py-5 border-b border-slate-100 last:border-0">
                <span className="font-mono text-xs text-slate-400 pt-0.5">{item.step}</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — clean, direct */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-slate-900 mb-4">
            Ready for a website that actually works?
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            No templates. No outsourcing. Just a custom site built for your practice, delivered in 10 days.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors">
            Start your project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
