import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services & Pricing", description: "Three tiers for professional practices. Foundation, Growth, and Dominance." };

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-400/60 mb-8">Services</p>
        <h1 className="text-5xl lg:text-7xl font-extralight tracking-[-0.03em] text-white leading-[1.05] max-w-4xl mb-8">
          Three tiers.<br />One team.<br /><span className="text-gradient">Zero handoffs.</span>
        </h1>
        <p className="text-xl text-white/40 max-w-2xl">Every tier includes hosting, SSL, monitoring, and ongoing management. You choose the investment level.</p>
      </div>
    </div>
  );
}
