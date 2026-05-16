import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Land Your Web — Websites for Professional Practices",
  description: "We build and manage websites for dental, legal, medical, and financial practices. 10-day delivery. Ongoing management included.",
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero — with geometric background */}
      <section className="geo-hero relative overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 geo-grid opacity-50" />

        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 lg:pt-44 lg:pb-36">
          {/* Label with accent line */}
          <div className="geo-accent-line pl-4 mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 animate-fade-in">Land Your Web</p>
          </div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-[-0.02em] text-slate-900 leading-[1.06] max-w-4xl animate-fade-in-up">
            Websites for practices that <span className="text-indigo-600">deserve better</span> than a template.
          </h1>

          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mt-8 max-w-2xl animate-fade-in-up stagger-1">
            Custom, high-performance websites for dental, legal, medical, and financial 
            practices. Ten-day delivery. Ongoing management included. One team, end to end.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up stagger-2">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/10">
              Start a project
              <span className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">→</span>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3.5 rounded-lg font-medium text-sm transition-all duration-300">
              See what&apos;s included
            </Link>
          </div>

          {/* Stats bar — with animation delays */}
          <div className="grid grid-cols-3 gap-8 lg:gap-16 mt-24 pt-12 border-t border-slate-100">
            {[
              { value: "10", unit: "days", label: "Average delivery time" },
              { value: "3", unit: "tiers", label: "From foundation to dominance" },
              { value: "24/7", unit: "", label: "Monitoring and management" },
            ].map((s, i) => (
              <div key={s.label} className={`animate-fade-in-up ${i === 0 ? '' : i === 1 ? 'stagger-1' : 'stagger-2'}`}>
                <div className="stat-number text-2xl lg:text-3xl xl:text-4xl font-light tracking-[-0.02em] text-slate-900">
                  {s.value}
                  <span className="text-base lg:text-lg text-slate-400 ml-1 font-normal">{s.unit}</span>
                </div>
                <div className="text-sm text-slate-500 mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — asymmetric grid with CSS icons */}
      <section className="border-t border-slate-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-transparent pointer-events-none h-64" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <div className="geo-accent-line pl-4 mb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">What we do</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                title: "Web Design & Development",
                desc: "Custom sites built on Next.js and Tailwind CSS. Fast, accessible, responsive. Every site is purpose-built — not a repainted template.",
                icon: "01",
              },
              {
                title: "Lead Generation",
                desc: "Automated pipeline that finds practices needing better websites. Identifies, enriches, and scores prospects. You reach the right people.",
                icon: "02",
              },
              {
                title: "SEO & Content",
                desc: "Technical SEO, content strategy, ongoing optimization. Rank for the terms your clients search. Real data, real results.",
                icon: "03",
              },
              {
                title: "Analytics & Insights",
                desc: "Dashboards showing what matters. Revenue impact, lead quality, conversion rates. Not vanity metrics — actionable intelligence.",
                icon: "04",
              },
            ].map((s, i) => (
              <div key={s.title} className={`group ${i === 0 ? "lg:col-span-2 lg:max-w-2xl" : ""}`}>
                <div className={`service-icon bg-slate-900 text-white mb-5 group-hover:bg-indigo-600 transition-colors duration-300 ${i === 0 ? "" : ""}`}>
                  {s.icon}
                </div>
                <h3 className={`font-semibold text-slate-900 mb-3 ${i === 0 ? "text-2xl lg:text-3xl font-light tracking-[-0.01em]" : "text-lg"}`}>
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — timeline with hover cards */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">
          <div className="geo-accent-line pl-4 mb-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">How it works</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] text-slate-900 mb-16">
            From conversation to live site in 10 days
          </h2>

          <div className="space-y-0.5">
            {[
              { step: "01", title: "Discovery call", desc: "We learn about your practice, your clients, and what you need. 30 minutes, no pitch deck.", time: "Day 1" },
              { step: "02", title: "Design direction", desc: "Three visual directions based on real competitor analysis. You pick one. We iterate if needed.", time: "Day 2–3" },
              { step: "03", title: "Build and review", desc: "Full site built. You review. Changes are fast because we own the entire stack.", time: "Day 4–8" },
              { step: "04", title: "Launch and manage", desc: "Site goes live. We handle hosting, updates, analytics, and improvements. You focus on patients.", time: "Day 10" },
            ].map((item, i) => (
              <div key={item.step} className="card-hover grid grid-cols-[auto_1fr_auto] gap-6 py-6 px-4 -mx-4 rounded-lg border border-transparent">
                <span className="font-mono text-xs text-slate-400 pt-0.5">{item.step}</span>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-xs text-slate-400 font-mono pt-0.5">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — with geometric accent */}
      <section className="border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-50/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 lg:py-32 text-center">
          <h2 className="text-3xl lg:text-4xl font-light tracking-[-0.02em] text-slate-900 mb-4">
            Ready for a website that actually works?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            No templates. No outsourcing. Just a custom site built for your practice, delivered in 10 days, managed forever.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-0.5">
            Start your project
            <span className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">→</span>
          </Link>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-slate-100">
            {["10-day delivery", "No templates", "Managed hosting", "Monthly reports"].map((t) => (
              <span key={t} className="text-xs text-slate-400 font-mono tracking-wider uppercase">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
