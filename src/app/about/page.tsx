import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "One team, end to end. No contractors, no templates." };

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-8">About</p>
        <h1 className="text-5xl lg:text-7xl font-extralight tracking-[-0.03em] text-white leading-[1.05] max-w-4xl">
          One team, end to end.<br />No contractors, no templates.
        </h1>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">The problem</h2>
            <p className="text-white/40 leading-relaxed">Most agencies sell you a website, then disappear. You get a template with your logo, stock photos, and a contact form that might work. Six months later: stale, broken, forgotten.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Our answer</h2>
            <p className="text-white/40 leading-relaxed mb-6">Custom sites on Next.js and Supabase. Built in 10 days. Managed forever. Hosting, SSL, monitoring, updates, improvements — all included. You focus on your practice.</p>
            <Link href="/contact" className="hoverable inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300">Start a project →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
