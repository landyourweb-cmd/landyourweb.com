import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">About Land Your Web</h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          We&apos;re not a traditional agency. We&apos;re an AI-powered website and lead generation engine built for service businesses that live and die by their reputation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">The Problem We Solve</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most web agencies take 8–12 weeks to build a site. They charge $10K–$25K. They lock you into proprietary platforms. And when it&apos;s done? The site looks nice — but nobody calls.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For dentists, lawyers, and medical practices, a beautiful website that doesn&apos;t generate patients is a beautiful waste of money. Your website should <em>work</em> — not just look good.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">How We&apos;re Different</h2>
          <ul className="space-y-4">
            {[
              { title: "10-Day Delivery", desc: "AI builds. AI tests. AI optimizes. You approve. The only bottleneck is how fast you review." },
              { title: "Transparent Pricing", desc: "No &quot;request a quote.&quot; No sales gate. Three tiers, clear deliverables, published prices." },
              { title: "You Own Everything", desc: "Open-source stack. No proprietary lock-in. Your code, your data, your domain. Leave anytime." },
              { title: "Leads Included", desc: "Our Growth tier includes a live lead generation pipeline. You don&apos;t just get a website — you get customers." },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="text-indigo-500 mt-1 flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">{item.title}</strong>
                  <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-3">Built on Technology You Own</h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto">
          We use open-source, industry-standard tools. No black boxes. No &quot;our platform.&quot; Your site runs on technology that any developer can work with.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-400">
          <span>Next.js</span> <span className="text-slate-300">·</span>
          <span>Tailwind CSS</span> <span className="text-slate-300">·</span>
          <span>Payload CMS</span> <span className="text-slate-300">·</span>
          <span>Supabase</span> <span className="text-slate-300">·</span>
          <span>Vercel</span>
        </div>
      </div>
    </div>
  );
}
