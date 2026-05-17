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

/* ===== SCROLL REVEAL ===== */
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

  return <div ref={ref} className={`reveal ${delayClass} ${className}`}>{children}</div>;
}

/* ===== MAIN PAGE ===== */
export default function HomePage() {
  return (
    <div className="relative">

      {/* ═══════════════════════════════════════════
          ACT I — THE HOOK
          ═══════════════════════════════════════════ */}
      <section className="section-cream relative min-h-screen flex items-center overflow-hidden">
        {/* Golden thread */}
        <div className="hidden lg:block absolute left-[8%] top-0 bottom-0 w-px thread-line" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="mono-label mb-10 hero-animate">Land Your Web</p>

            <h1 className="h1-massive hero-animate hero-animate-delay-1 max-w-[16ch]">
              Your practice is exceptional.<br />
              <span style={{color: "var(--lyw-blue)"}}>Your website should be too.</span>
            </h1>

            <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed mt-10 max-w-prose hero-animate hero-animate-delay-2">
              Every day your site blends in, you're losing clients to practices 
              with better web presence. Not because they're better at what they do — 
              because they <em className="text-[var(--text-primary)] not-italic">look</em> better online.
            </p>

            <div className="mt-12 hero-animate hero-animate-delay-3">
              <Link
                href="/contact"
                className="hoverable inline-flex items-center gap-3 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_4px_16px_rgba(45,76,228,0.3)]"
                style={{background: "var(--lyw-blue)", padding: "12px 28px"}}
              >
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
      <section className="section-bridge section-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Reveal>
            <p className="mono-label mb-4">The difference</p>
            <h2 className="h2-section max-w-[16ch] mb-16">
              Most agencies talk.<br />
              <span style={{color: "var(--lyw-blue)"}}>We deliver.</span>
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
                  <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-4">{row.label}</p>
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--text-muted)] w-10 shrink-0">Them</span>
                      <span className="text-sm text-[var(--text-muted)] line-through">{row.them}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold w-10 shrink-0" style={{color: "var(--lyw-blue)"}}>Us</span>
                      <span className="text-sm text-[var(--text-primary)] font-medium">{row.us}</span>
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
      <section className="section-bridge section-cream py-28 lg:py-36 relative">
        <div className="hidden lg:block absolute left-[8%] top-0 bottom-0 w-px thread-line" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Reveal>
            <p className="mono-label mb-4">How it works</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Ten days. Four steps.<br />
              <span style={{color: "var(--lyw-blue)"}}>Zero headaches.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-prose mb-20">
              Most agencies turn a website into a six-month ordeal. 
              We've compressed everything that matters into ten days. 
              Here's the blueprint.
            </p>
          </Reveal>

          <div className="space-y-1 lg:pl-16">
            {[
              {
                step: "01", time: "Day 1",
                title: "We learn your practice",
                before: "Explaining what you do to an agency that doesn't get it.",
                after: "30-minute call. We study your competitors, your clients, your goals. You talk. We listen.",
              },
              {
                step: "02", time: "Days 2–3",
                title: "You see three directions",
                before: "Waiting weeks for one mockup you didn't even ask for.",
                after: "Three design directions based on real competitor analysis. You pick the one that feels right. We iterate until it's perfect.",
              },
              {
                step: "03", time: "Days 4–8",
                title: "We build. You watch.",
                before: "Radio silence for weeks. Then a site that doesn't match what you approved.",
                after: "Full site built on Next.js. You get a live preview on Day 4. Changes are instant. No surprises at launch.",
              },
              {
                step: "04", time: "Day 10",
                title: "Launch. Then we manage it forever.",
                before: "Site goes live. Agency disappears. Good luck with updates.",
                after: "Site launches. Hosting, SSL, monitoring, updates, improvements — all included. We never hand off and vanish.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i as 0|1|2|3}>
                <div className="group grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 py-10 px-6 -mx-6 rounded-2xl hover:bg-white/40 transition-colors duration-300">
                  <div className="flex lg:flex-col items-center lg:items-start gap-3">
                    <span className="font-mono text-sm opacity-40" style={{color: "var(--lyw-blue)"}}>{item.step}</span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">{item.time}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-normal text-[var(--text-primary)] mb-4">{item.title}</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-lg border p-4" style={{borderColor: "rgba(0,0,0,0.06)", background: "var(--canvas-cream)"}}>
                        <p className="text-[0.65rem] uppercase tracking-widest text-[var(--text-muted)] mb-2">Before</p>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.before}</p>
                      </div>
                      <div className="rounded-lg border p-4" style={{borderColor: "rgba(45,76,228,0.15)", background: "var(--lyw-blue-light)"}}>
                        <p className="text-[0.65rem] uppercase tracking-widest font-semibold mb-2" style={{color: "var(--lyw-blue)"}}>After</p>
                        <p className="text-sm text-[var(--text-primary)] leading-relaxed">{item.after}</p>
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
      <section className="section-bridge section-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Reveal>
            <p className="mono-label mb-4">What you get</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Everything included.<br />
              <span style={{color: "var(--lyw-blue)"}}>Nothing hidden.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-prose mb-16">
              No à la carte pricing. No "that'll be extra." 
              Every service we offer is built into your package from day one.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", title: "Web Design", desc: "Custom Next.js sites. Not templates — every pixel is purpose-built for your practice and your clients." },
              { num: "02", title: "Lead Generation", desc: "Automated pipeline finds practices that need better websites. You reach decision-makers, not gatekeepers." },
              { num: "03", title: "SEO & Content", desc: "Technical SEO, content strategy, ongoing optimization. Rank for terms your clients actually search." },
              { num: "04", title: "Analytics", desc: "Real dashboards, real data. Revenue impact, lead quality, conversion rates — not vanity metrics." },
              { num: "05", title: "Management", desc: "Hosting, SSL, updates, monitoring, improvements. We never hand off and disappear." },
              { num: "06", title: "Support", desc: "Direct line to our team. Questions answered in hours, not days. Your site is our responsibility." },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i as 0|1|2|3}>
                <div className="card hoverable p-6 lg:p-8 h-full flex flex-col">
                  <span className="font-mono text-2xl mb-4" style={{color: "rgba(45,76,228,0.2)"}}>{s.num}</span>
                  <h3 className="text-base font-normal text-[var(--text-primary)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACT V — THE INVESTMENT
          ═══════════════════════════════════════════ */}
      <section className="section-bridge section-cream py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Reveal>
            <p className="mono-label mb-4">Packages</p>
            <h2 className="h2-section max-w-[18ch] mb-6">
              Three tiers.<br />
              <span style={{color: "var(--lyw-blue)"}}>Zero handoffs.</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-prose mb-16">
              Every package includes design, build, hosting, and management. 
              The only difference is how much we do for you.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {[
              {
                name: "Foundation", price: "$2,500", monthly: "$500", accent: false, badge: null,
                desc: "A website that actually represents your practice.",
                items: ["Custom 5-page website", "Logo and visual identity", "Contact form + CRM integration", "Google Business Profile setup", "Basic SEO + SSL", "30-day launch support"],
              },
              {
                name: "Growth", price: "$5,000", monthly: "$2,500", accent: true, badge: "Most practices choose this",
                desc: "A website that brings in clients every week.",
                items: ["Everything in Foundation", "Lead generation pipeline", "Automated outreach sequences", "CRM with deal tracking", "Monthly SEO content", "Priority support"],
              },
              {
                name: "Dominance", price: "$10,000", monthly: "$5,000", accent: false, badge: null,
                desc: "A website that dominates your market.",
                items: ["Everything in Growth", "Multi-location strategy", "Paid advertising management", "A/B testing program", "Weekly SEO content", "24/7 dedicated support"],
              },
            ].map((pkg) => (
              <Reveal key={pkg.name}>
                <div className={`card hoverable p-8 h-full flex flex-col relative ${pkg.accent ? "card-accent" : ""}`}>
                  {pkg.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 pill-badge whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-2" style={{color: pkg.accent ? "var(--lyw-blue)" : "var(--text-primary)"}}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-8">{pkg.desc}</p>

                  <div className="flex items-baseline gap-1 mt-6 mb-1">
                    <span className="text-4xl font-light text-[var(--text-primary)] tracking-[-0.02em]">{pkg.price}</span>
                    <span className="text-sm text-[var(--text-muted)]">setup</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-xl font-light text-[var(--text-primary)]">{pkg.monthly}</span>
                    <span className="text-sm text-[var(--text-muted)]">/month</span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 select-none" style={{color: "rgba(45,76,228,0.4)"}}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block text-center py-3 rounded-lg text-sm font-semibold transition-all duration-300"
                    style={pkg.accent
                      ? {background: "var(--lyw-blue)", color: "white"}
                      : {boxShadow: "var(--border-shadow)", color: "var(--text-primary)"}
                    }
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
      <section className="section-navy py-36 lg:py-48 relative overflow-hidden">
        <div className="hidden lg:block absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="h2-section mb-6" style={{color: "white"}}>
                Your website hasn't brought you a new client this month, <span style={{color: "#8296f5"}}>has it?</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="text-lg leading-relaxed mb-12 max-w-prose" style={{color: "rgba(255,255,255,0.5)"}}>
                You didn't build your practice to worry about websites. 
                You built it to serve your clients. Let us handle the part 
                that brings them through your door.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="hoverable inline-flex items-center gap-3 text-[var(--lyw-blue)] font-semibold text-base rounded-lg transition-all duration-300 hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                  style={{background: "white", padding: "14px 32px"}}
                >
                  Start your project
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-medium text-sm rounded-lg transition-all duration-300"
                  style={{color: "rgba(255,255,255,0.5)", padding: "14px 32px", border: "1px solid rgba(255,255,255,0.1)"}}
                >
                  See what's included
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
