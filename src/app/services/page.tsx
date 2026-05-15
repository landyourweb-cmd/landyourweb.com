import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Land Your Web",
  description: "Web development, lead generation, SEO, and content for dental, legal, medical, veterinary, and real estate practices.",
};

const packages = [
  {
    name: "Foundation",
    price: "$2,500",
    monthly: "$500/mo",
    desc: "Professional web presence that earns trust. Everything a practice needs to look credible and get found online.",
    items: [
      "5-page responsive website",
      "Brand positioning document",
      "Logo & visual identity",
      "Google Business Profile setup",
      "Basic SEO foundation",
      "SSL & performance optimized",
      "30-day support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$5,000",
    monthly: "$2,500/mo",
    desc: "Everything in Foundation, plus a working lead generation system. Your phone rings with qualified prospects.",
    items: [
      "Everything in Foundation",
      "10–15 page full website",
      "4 SEO-optimized blog posts",
      "Lead generation pipeline (20–50 leads/mo)",
      "Cold outreach sequences",
      "Monthly strategy call & pipeline report",
      "Accessibility (WCAG 2.1 AA)",
    ],
    highlight: true,
  },
  {
    name: "Dominance",
    price: "$10,000",
    monthly: "$5,000/mo",
    desc: "Everything in Growth, plus paid advertising and conversion optimization. You dominate your local market.",
    items: [
      "Everything in Growth",
      "20+ page comprehensive site",
      "Paid advertising ($2K ad spend included)",
      "8 blog posts + 12 social posts/month",
      "Conversion rate optimization",
      "Reputation management system",
      "Dedicated strategist",
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Services & Pricing</h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          Three tiers. Clear deliverables. Published prices. No surprises.
        </p>
      </div>

      {/* Package Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-2xl border-2 p-8 flex flex-col ${
              pkg.highlight
                ? "border-indigo-500 bg-white shadow-xl shadow-indigo-100 scale-[1.02]"
                : "border-slate-200 bg-white"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
            <div className="mb-1">
              <span className="text-3xl font-extrabold">{pkg.price}</span>
              <span className="text-slate-400 text-sm"> setup</span>
            </div>
            <div className="text-indigo-600 font-semibold mb-4">{pkg.monthly}</div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{pkg.desc}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`block text-center py-3 rounded-xl font-semibold transition ${
                pkg.highlight
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "border border-slate-300 hover:border-slate-500 text-slate-700"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* Process */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight mb-4">The 10-Day Process</h2>
        <p className="text-slate-500 max-w-lg mx-auto">From signed contract to live site with working lead generation.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { step: "01", title: "Discovery", desc: "30-min call. We learn your practice." },
          { step: "02", title: "Design", desc: "You pick a direction. AI builds the site." },
          { step: "03", title: "Refine", desc: "Review. Revise. Until you're thrilled." },
          { step: "04", title: "Launch", desc: "Site goes live. Leads start flowing." },
        ].map((s) => (
          <div key={s.step} className="text-center">
            <div className="text-3xl font-extrabold text-indigo-200 mb-2">{s.step}</div>
            <h3 className="font-bold mb-1">{s.title}</h3>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
