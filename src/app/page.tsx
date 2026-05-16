"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ===== CANVAS PARTICLE FIELD ===== */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx!.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", () => { resize(); createParticles(); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

/* ===== COUNTER ANIMATION ===== */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
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

  return <span ref={ref} className="counter">{count}{suffix}</span>;
}

/* ===== SCROLL REVEAL ===== */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : delay === 3 ? "reveal-delay-3" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ===== HORIZONTAL SCROLL SECTION ===== */
function HScroll({ items }: { items: { title: string; desc: string; stat: string }[] }) {
  return (
    <div className="hscroll-container gap-6 px-6 pb-8">
      {items.map((item) => (
        <div key={item.title} className="hscroll-item glass rounded-2xl p-8 flex flex-col justify-between min-h-[300px] hover:border-indigo-500/30 transition-colors duration-500">
          <div>
            <p className="text-4xl font-light text-white mb-4">{item.stat}</p>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===== MAIN PAGE ===== */
export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="hero-glow relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-8 reveal">Land Your Web</p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[-0.03em] leading-[0.95] text-white reveal reveal-delay-1">
              We build websites<br />
              <span className="text-gradient">that win awards.</span>
            </h1>

            <p className="text-xl text-white/40 leading-relaxed mt-10 max-w-xl reveal reveal-delay-2">
              A web development studio for professional practices. Custom builds, 
              10-day delivery, managed forever. If your site looks like everyone else&apos;s, 
              you&apos;re losing clients.
            </p>

            <div className="flex flex-wrap gap-4 mt-12 reveal reveal-delay-3">
              <Link href="/contact" className="group hoverable inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                Start a project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link href="/services" className="hoverable inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white px-8 py-4 rounded-xl font-medium text-sm transition-all duration-300">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { value: 10, suffix: "", label: "Day average delivery" },
              { value: 98, suffix: "%", label: "Client satisfaction rate" },
              { value: 0, suffix: "", label: "Templates in our workflow" },
              { value: 24, suffix: "/7", label: "Monitoring and management" },
            ].map((s) => (
              <Reveal key={s.label}>
                <div className="text-4xl lg:text-5xl font-extralight text-white tracking-[-0.02em] mb-2">
                  {s.value === 98 ? "98%" : s.value === 0 ? "Zero" : <AnimatedCounter value={s.value} suffix={s.suffix} />}
                </div>
                <div className="text-sm text-white/30">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — horizontal scroll */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-4 reveal">What we do</p>
          <h2 className="text-4xl lg:text-5xl font-extralight tracking-[-0.02em] text-white reveal reveal-delay-1">
            Everything your practice needs.
          </h2>
        </div>
        <HScroll items={[
          { stat: "01", title: "Web Design", desc: "Custom Next.js sites. Not templates — every pixel is purpose-built for your practice and your clients." },
          { stat: "02", title: "Lead Generation", desc: "Automated pipeline finds practices that need better websites. You reach decision-makers, not gatekeepers." },
          { stat: "03", title: "SEO & Content", desc: "Technical SEO, content strategy, ongoing optimization. Rank for terms your clients actually search." },
          { stat: "04", title: "Analytics", desc: "Real dashboards, real data. Revenue impact, lead quality, conversion rates. Not vanity metrics." },
          { stat: "05", title: "Management", desc: "Hosting, SSL, updates, monitoring, improvements. We never hand off and disappear." },
        ]} />
      </section>

      {/* Process */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-4 reveal">How it works</p>
          <h2 className="text-4xl lg:text-5xl font-extralight tracking-[-0.02em] text-white mb-16 reveal reveal-delay-1">
            From conversation to launch.
          </h2>

          <div className="space-y-1">
            {[
              { step: "01", time: "Day 1", title: "Discovery", desc: "We learn your practice, your clients, your goals. 30 minutes." },
              { step: "02", time: "Day 2–3", title: "Design", desc: "Three directions based on real competitor analysis. You pick. We iterate." },
              { step: "03", time: "Day 4–8", title: "Build", desc: "Full site built on Next.js. You review. Changes are instant." },
              { step: "04", time: "Day 10", title: "Launch", desc: "Site goes live. Hosting, SSL, monitoring, management — all included. Forever." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i as 0|1|2|3}>
                <div className="group grid grid-cols-[auto_1fr_auto] gap-8 py-8 px-6 -mx-6 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300 border border-transparent hover:border-white/5">
                  <span className="font-mono text-sm text-indigo-400/40 pt-0.5">{item.step}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-xs text-white/20 font-mono pt-1">{item.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages — glass cards */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-4 reveal">Packages</p>
          <h2 className="text-4xl lg:text-5xl font-extralight tracking-[-0.02em] text-white mb-16 reveal reveal-delay-1">
            Three tiers. Zero handoffs.
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { name: "Foundation", price: "$2,500", monthly: "$500", accent: false, items: ["Custom 5-page website", "Logo and visual identity", "Contact form + CRM", "Google Business Profile", "Basic SEO + SSL", "30-day support"] },
              { name: "Growth", price: "$5,000", monthly: "$2,500", accent: true, items: ["Everything in Foundation", "Lead generation pipeline", "Automated outreach", "CRM with deal tracking", "Monthly SEO content", "Priority support"] },
              { name: "Dominance", price: "$10,000", monthly: "$5,000", accent: false, items: ["Everything in Growth", "Multi-location strategy", "Paid advertising", "A/B testing program", "Weekly SEO content", "24/7 dedicated support"] },
            ].map((pkg) => (
              <Reveal key={pkg.name}>
                <div className={`glass rounded-2xl p-8 hoverable h-full flex flex-col ${pkg.accent ? "border-indigo-500/30 ring-1 ring-indigo-500/20" : ""}`}>
                  <h3 className="text-lg font-semibold text-white mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mt-6 mb-1">
                    <span className="text-4xl font-extralight text-white">{pkg.price}</span>
                    <span className="text-sm text-white/30">setup</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-xl font-extralight text-white">{pkg.monthly}</span>
                    <span className="text-sm text-white/30">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="text-sm text-white/50 flex items-start gap-3">
                        <span className="text-indigo-400/60 mt-0.5 shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${pkg.accent ? "bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]" : "border border-white/10 text-white hover:border-white/30"}`}>
                    Get started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl lg:text-7xl font-extralight tracking-[-0.03em] text-white mb-6">
              Ready for something <span className="text-gradient">different?</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xl text-white/30 mb-12 max-w-xl mx-auto">
              Most agency sites look the same. Yours won&apos;t. Let&apos;s build something that turns heads.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link href="/contact" className="hoverable group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black px-10 py-5 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] animate-pulse-glow">
              Start your project
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
