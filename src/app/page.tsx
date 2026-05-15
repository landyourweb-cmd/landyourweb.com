import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 -z-10" />
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            10-Day Delivery • Transparent Pricing • You Own Everything
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
            Websites that<br />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              make the phone ring.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            We build high-performance websites for service businesses — and deliver a working lead generation system in 10 days. Not 10 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition shadow-lg shadow-indigo-200"
            >
              See Our Packages
            </Link>
            <Link
              href="/services"
              className="border border-slate-200 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10", label: "Days to Launch" },
            { value: "85+", label: "Lighthouse Score" },
            { value: "200+", label: "Leads / Month" },
            { value: "100%", label: "You Own the Code" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-indigo-600">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-extrabold text-center mb-4 tracking-tight">Who We Build For</h2>
        <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">
          Trust-dependent professionals who get chosen because someone trusted them enough to make the referral.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🦷",
              title: "Dental Practices",
              desc: "HIPAA-aware websites that turn researchers into patients. Online booking, reputation management, new patient acquisition.",
            },
            {
              emoji: "⚖️",
              title: "Law Firms",
              desc: "Websites that establish authority before the consultation. Case results, attorney profiles, intake automation.",
            },
            {
              emoji: "🏥",
              title: "Medical Specialists",
              desc: "Cash-pay procedure sites. Dermatology, plastics, cardiology — your website IS your salesperson.",
            },
            {
              emoji: "🐾",
              title: "Veterinary Practices",
              desc: "Pet parents research obsessively. We build sites that earn trust before they ever pick up the phone.",
            },
            {
              emoji: "🏠",
              title: "Real Estate Teams",
              desc: "Lead capture engines for teams who live and die by their pipeline. IDX-ready, agent branding, property showcases.",
            },
            {
              emoji: "📊",
              title: "CPAs & Wealth Managers",
              desc: "Your expertise is invisible online. We make it visible — and turn website visitors into consultation bookings.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-indigo-200 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{service.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 border-y border-slate-100 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-4 tracking-tight">From Zero to Live in 10 Days</h2>
          <p className="text-slate-500 text-center mb-14">Here&apos;s what happens after you say yes.</p>
          <div className="space-y-0">
            {[
              { day: "Day 1", title: "Discovery & Strategy", desc: "30-minute call. We learn your practice, your market, your goals. AI maps your competitive landscape overnight." },
              { day: "Day 2–3", title: "Design & Build", desc: "You pick a design direction. AI builds the full site — responsive, optimized, ready for your review." },
              { day: "Day 4–7", title: "Review & Refine", desc: "You review. You request changes. AI applies them. This loop runs until you're thrilled — typically 2 rounds." },
              { day: "Day 8–10", title: "Launch & Leads", desc: "Site goes live. SEO activates. Analytics start tracking. Lead pipeline begins delivering. Your phone rings." },
            ].map((step, i) => (
              <div key={step.day} className={`flex gap-6 pb-10 ${i < 3 ? "border-l-2 border-indigo-200" : ""} pl-8 relative`}>
                <div className={`absolute -left-[13px] w-6 h-6 rounded-full border-4 border-white ${i === 3 ? "bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-200" : "bg-indigo-500"}`} />
                <div>
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">{step.day}</div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">10 days to a website that generates leads.</h2>
          <p className="text-indigo-100 mb-8 text-lg">If your phone doesn&apos;t ring by day 10, month 2 is on us.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition shadow-xl"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
