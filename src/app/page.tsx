"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ===== COUNTER ANIMATION ===== */
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 2000;
          const start = performance.now();
          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="counter">{prefix}{count}{suffix}</span>;
}

/* ===== SCROLL REVEAL — L6 tighter (24px) ===== */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : delay === 3 ? "reveal-delay-3" : "";

  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export default function HomePage() {
  return (
    <div className="relative">

      {/* ═══════════════════════════════════════════
          ACT I — THE HOOK
          ═══════════════════════════════════════════ */}
      <section className="section-deepest relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle geometric anchor — single vertical line in the distance */}
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            {/* Mono label */}
            <p className="mono-label mb-10 hero-animate">
              Land Your Web
            </p>

            {/* Headline — editorial, left-aligned, massive */}
            <h1 className="h1-massive hero-animate hero-animate-delay-1 max-w-[20ch]">
              Your practice is exceptional.<br />
              <span className="text-accent">Your website should be too.</span>
            </h1>

            {/* Subhead — names the pain */}
            <p className="text-lg lg:text-xl text-white/30 leading-relaxed mt-10 max-w-prose hero-animate hero-animate-delay-2">
              Every day your site looks like everyone else&apos;s, you&apos;re losing patients 
              to practices with better web presence. Not because they&apos;re better dentists — 
              because they <em className="text-white/50 not-italic">look</em> better online.
            </p>

            {/* Single CTA — confidence */}
            <div className="mt-12 hero-animate hero-animate-delay-3">
              <Link href="/contact" className="hoverable inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                Fix your website
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT II — THE PROOF
          ═══════════════════════════════════════════ */}
      <section className="section-bridge section-default py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="mono-label mb-4">The difference</p>
            <h2 className="h2-section max-w-[16ch] mb-16">
              Most agencies talk. <span className="text-accent">We deliver.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { them: "6–8 weeks", us: "10 days", label: "Delivery time" },
              { them: "Rigid templates", us: "Custom, pixel by pixel", label: "Design approach" },
              { them: "Hand off and vanish", us: "Managed forever", label: "After launch" },
              { them: "Vanity metrics", us: "Revenue impact tracked", label: "Reporting" },
            ].map((row, i) => (
              <Reveal key={row.label} delay={i as 0|1|2|3}>
                <div className="compare-card h-full flex flex-col">
                  <p className="text-xs text-white/20 font-mono uppercase tracking-wider mb-4">{row.label}</p>
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/15 w-10 shrink-0">Them</span>
                      <span className="text-sm text-white/25 line-through">{row.them}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-accent/50 w-10 shrink-0">Us</span>
                      <span className="text-sm text-white font-medium">{row.us}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT III — THE METHOD
          ═══════════════════════════════════════════ */}
      <section className="section-bridge section-surface py-28 lg:py-36 relative">
        {/* Golden thread — vertical timeline line */}
        <div className="hidden lg:block absolute left-[calc(8%+3rem)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="mono-label mb-4">How it works</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Ten days. Four steps.<br />
              <span className="text-accent">Zero headaches.</span>
            </h2>
            <p className="text-white/30 text-lg max-w-prose mb-20">
              Most agencies turn a website into a six-month ordeal. 
              We&apos;ve compressed everything that matters into ten days. 
              Here&apos;s the blueprint.
            </p>
          </Reveal>

          <div className="space-y-1 lg:pl-12">
            {[
              {
                step: "01",
                time: "Day 1",
                title: "We learn your practice",
                before: "Explaining what you do to an agency that doesn't get it.",
                after: "30-minute call. We study your competitors, your patients, your goals. You talk. We listen.",
              },
              {
                step: "02",
                time: "Days 2–3",
                title: "You see three directions",
                before: "Waiting weeks for one mockup you didn't even ask for.",
                after: "Three design directions based on real competitor analysis. You pick the one that feels right. We iterate until it's perfect.",
              },
              {
                step: "03",
                time: "Days 4–8",
                title: "We build. You watch.",
                before: "Radio silence for weeks. Then a site that doesn't match what you approved.",
                after: "Full site built on Next.js. You get a live preview on Day 4. Changes are instant. No surprises at launch.",
              },
              {
                step: "04",
                time: "Day 10",
                title: "Launch. Then we manage it forever.",
                before: "Site goes live. Agency disappears. Good luck with updates.",
                after: "Site launches. Hosting, SSL, monitoring, updates, improvements — all included. We never hand off and vanish.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i as 0|1|2|3}>
                <div className="group grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 py-10 px-6 -mx-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 border border-transparent hover:border-white/[0.04]">
                  {/* Step marker */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-3">
                    <span className="font-mono text-sm text-accent/40">{item.step}</span>
                    <span className="text-xs text-white/15 font-mono">{item.time}</span>
                    {/* Thread node dot */}
                    <div className="hidden lg:block w-2 h-2 rounded-full bg-accent/20 mt-1" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">{item.title}</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg bg-[#0a0a0a] border border-white/[0.03] p-4">
                        <p className="text-[0.65rem] uppercase tracking-widest text-white/15 mb-2">Before</p>
                        <p className="text-sm text-white/25 leading-relaxed">{item.before}</p>
                      </div>
                      <div className="rounded-lg border border-accent/10 p-4" style={{background: "rgba(99, 102, 241, 0.03)"}}>
                        <p className="text-[0.65rem] uppercase tracking-widest text-accent/50 mb-2">After</p>
                        <p className="text-sm text-white/60 leading-relaxed">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT IV — THE ARSENAL
          ═══════════════════════════════════════════ */}
      <section className="section-bridge section-default py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="mono-label mb-4">What you get</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Everything included.<br />
              <span className="text-accent">Nothing hidden.</span>
            </h2>
            <p className="text-white/30 text-lg max-w-prose mb-16">
              No à la carte pricing. No &quot;that&apos;ll be extra.&quot; 
              Every service we offer is built into your package from day one.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Web Design", desc: "Custom Next.js sites. Not templates — every pixel is purpose-built for your practice and your patients." },
              { num: "02", title: "Lead Generation", desc: "Automated pipeline finds practices that need better websites. You reach decision-makers, not gatekeepers." },
              { num: "03", title: "SEO & Content", desc: "Technical SEO, content strategy, ongoing optimization. Rank for terms your patients actually search." },
              { num: "04", title: "Analytics", desc: "Real dashboards, real data. Revenue impact, lead quality, conversion rates — not vanity metrics." },
              { num: "05", title: "Management", desc: "Hosting, SSL, updates, monitoring, improvements. We never hand off and disappear." },
              { num: "06", title: "Support", desc: "Direct line to our team. Questions answered in hours, not days. Your site is our responsibility." },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i as 0|1|2|3}>
                <div className="card hoverable p-6 lg:p-8 h-full flex flex-col">
                  <span className="font-mono text-2xl text-accent/25 mb-4">{s.num}</span>
                  <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT V — THE INVESTMENT
          ═══════════════════════════════════════════ */}
      <section className="section-bridge section-surface py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Reveal>
            <p className="mono-label mb-4">Packages</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Three tiers.<br />
              <span className="text-accent">Zero handoffs.</span>
            </h2>
            <p className="text-white/30 text-lg max-w-prose mb-16">
              Every package includes design, build, hosting, and management. 
              The only difference is how much we do for you.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {[
              {
                name: "Foundation",
                price: "$2,500",
                monthly: "$500",
                accent: false,
                badge: null,
                desc: "A website that actually represents your practice.",
                items: ["Custom 5-page website", "Logo and visual identity", "Contact form + CRM integration", "Google Business Profile setup", "Basic SEO + SSL", "30-day launch support"],
              },
              {
                name: "Growth",
                price: "$5,000",
                monthly: "$2,500",
                accent: true,
                badge: "Most practices choose this",
                desc: "A website that brings in patients every week.",
                items: ["Everything in Foundation", "Lead generation pipeline", "Automated outreach sequences", "CRM with deal tracking", "Monthly SEO content", "Priority support"],
              },
              {
                name: "Dominance",
                price: "$10,000",
                monthly: "$5,000",
                accent: false,
                badge: null,
                desc: "A website that dominates your market.",
                items: ["Everything in Growth", "Multi-location strategy", "Paid advertising management", "A/B testing program", "Weekly SEO content", "24/7 dedicated support"],
              },
            ].map((pkg) => (
              <Reveal key={pkg.name}>
                <div className={`card hoverable p-8 h-full flex flex-col relative ${pkg.accent ? "card-accent" : ""}`}>
                  {pkg.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[0.65rem] font-semibold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  )}

                  <h3 className={`text-lg font-semibold mb-2 ${pkg.accent ? "text-accent" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-white/30 mb-8">{pkg.desc}</p>

                  <div className="flex items-baseline gap-1 mt-6 mb-1">
                    <span className="text-4xl font-light text-white tracking-[-0.02em]">{pkg.price}</span>
                    <span className="text-sm text-white/25">setup</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-xl font-light text-white">{pkg.monthly}</span>
                    <span className="text-sm text-white/25">/month</span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="text-sm text-white/40 flex items-start gap-3">
                        <span className="text-accent/40 mt-0.5 shrink-0 select-none">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      pkg.accent
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/10 text-white hover:border-white/30"
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT VI — THE LEAP
          ═══════════════════════════════════════════ */}
      <section className="section-deepest py-36 lg:py-48 relative overflow-hidden">
        {/* Subtle geometric presence — not a glow, just structure */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="h2-section mb-6">
                Your website hasn&apos;t brought you a new patient this month, <span className="text-accent">has it?</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg text-white/25 leading-relaxed mb-12 max-w-prose">
                You didn&apos;t build your practice to worry about websites. 
                You built it to help patients. Let us handle the part 
                that brings them through your door.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="hoverable inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black px-10 py-5 rounded-xl font-semibold text-base transition-all duration-300">
                  Start your project
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/50 hover:text-white px-8 py-5 rounded-xl font-medium text-sm transition-all duration-300">
                  See what&apos;s included
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
