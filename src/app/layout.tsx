import type { Metadata } from "next";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Land Your Web — Websites for Professional Practices",
    template: "%s — Land Your Web",
  },
  description: "Custom websites for dental, legal, medical, and financial practices. 10-day delivery. Ongoing management included.",
  metadataBase: new URL("https://landyourweb.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-slate-900 tracking-tight text-lg">
              Land Your Web
            </Link>
            <nav className="hidden sm:flex items-center gap-8">
              <Link href="/services" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors">Start a project →</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Land Your Web LLC. Built by OVERLORD.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy</Link>
              <Link href="/contact" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
