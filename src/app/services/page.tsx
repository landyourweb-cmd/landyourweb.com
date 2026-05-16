import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Three tiers for professional practices. Foundation, Growth, and Dominance. Every tier includes hosting, SSL, monitoring, and ongoing management.",
};

const packages = [
  {
    name: "Foundation",
    price: "$2,500",
    monthly: "$500",
    desc: "Everything a practice needs to establish a professional online presence and start generating leads.",
    items: [
      "Competitor analysis and brand positioning",
      "Custom 5-page responsive website",
      "Logo and visual identity system",
      "Contact form with CRM integration",
      "Google Business Profile optimization",
      "Basic SEO — meta, sitemap, structured data",
      "SSL certificate and Vercel hosting",
      "Plausible analytics dashboard",
      "30-day post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$5,000",
    monthly: "$2,500",
    desc: "For practices ready to grow. Includes lead generation, email automation, and advanced analytics.",
    items: [
      "Everything in Foundation, plus:",
      "Lead generation pipeline — find and score prospects",
      "Automated outreach sequences",
      "CRM setup with deal tracking",
      "Monthly SEO content (2 articles)",
      "Email marketing automation",
      "Conversion rate optimization",
      "Quarterly performance reviews",
      "Priority support (4-hour response)",
    ],
  },
  {
    name: "Dominance",
    price: "$10,000",
    monthly: "$5,000",
    desc: "Full-service growth engine. For multi-location practices and firms that want to dominate their market.",
    items: [
      "Everything in Growth, plus:",
      "Multi-location strategy and management",
      "Paid advertising — Google and social",
      "Advanced analytics with PostHog",
      "A/B testing and experimentation program",
      "Weekly SEO content (4 articles)",
      "Custom dashboards and reporting",
      "Dedicated project manager",
      "24/7 support with 1-hour response",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">Services</p>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
          Three tiers. One team. Zero handoffs.
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mt-6 max-w-2xl">
          Every tier includes hosting, SSL, monitoring, and ongoing management. 
          You choose the level of investment that matches your growth goals.
        </p>
      </section>

      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={pkg.name} className={`border border-slate-200 rounded-lg p-8 ${i === 1 ? "border-slate-900 ring-1 ring-slate-900/10" : ""}`}>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mt-4 mb-1">
                  <span className="text-3xl font-light tracking-tight text-slate-900">{pkg.price}</span>
                  <span className="text-sm text-slate-400">setup</span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-lg font-light text-slate-900">{pkg.monthly}</span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 pb-6 border-b border-slate-100">{pkg.desc}</p>
                <ul className="space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-slate-300 mt-0.5 shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center mt-8 py-2.5 rounded-lg text-sm font-medium transition-colors ${i === 1 ? "bg-slate-900 text-white hover:bg-slate-800" : "border border-slate-200 text-slate-700 hover:border-slate-300"}`}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 text-center">
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-slate-900 mb-4">Not sure which tier fits?</h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">We&apos;ll help you figure it out on a free discovery call. No pressure, no pitch — just honest advice.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors">
            Schedule a call <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
