import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Land Your Web — 10-Day Websites That Generate Leads",
  description:
    "We build high-performance websites for service businesses — and deliver a working lead generation system in 10 days. Dental, legal, medical, veterinary, and real estate.",
  keywords: [
    "web design",
    "lead generation",
    "dental website",
    "legal website",
    "medical website",
    "small business website",
  ],
  openGraph: {
    title: "Land Your Web — 10-Day Websites That Generate Leads",
    description:
      "AI-powered websites for trust-dependent professionals. 10 days to launch. Transparent pricing. You own everything.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-indigo-600 text-2xl">◉</span>
              Land Your Web
            </Link>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
              <Link href="/services" className="hover:text-slate-900 transition">
                Services
              </Link>
              <Link href="/about" className="hover:text-slate-900 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900 transition">
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              Start Your Project
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                <span className="text-indigo-400">◉</span> Land Your Web
              </div>
              <p className="text-sm leading-relaxed">
                AI-powered websites for trust-dependent professionals. Built in 10 days. You own everything.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition">Web Development</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Lead Generation</Link></li>
                <li><Link href="/services" className="hover:text-white transition">SEO & Content</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
            © {new Date().getFullYear()} Land Your Web LLC. Your site. Your code. Your leads.
          </div>
        </footer>
      </body>
    </html>
  );
}
