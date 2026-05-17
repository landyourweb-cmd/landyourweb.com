"use client";

import { useEffect, useState, useRef } from "react";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* ===== CUSTOM CURSOR ===== */
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 6}px`;
        cursorRef.current.style.top = `${e.clientY - 6}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 20}px`;
        ringRef.current.style.top = `${e.clientY - 20}px`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, select, textarea, .hoverable')) {
        setHover(true);
      }
    };

    const onMouseOut = () => setHover(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${hover ? "hover" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${hover ? "hover" : ""}`} />
    </>
  );
}

/* ===== SCROLL-AWARE NAV ===== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white tracking-tight text-lg hover:opacity-80 transition-opacity">
          Land Your Web
        </Link>
        <nav className="hidden sm:flex items-center gap-10">
          <Link href="/services" className="text-sm text-white/40 hover:text-white transition-colors link-line">
            Services
          </Link>
          <Link href="/about" className="text-sm text-white/40 hover:text-white transition-colors link-line">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-accent transition-colors">
            Start a project →
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${jetbrainsMono.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased noise">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/15">© {new Date().getFullYear()} Land Your Web LLC</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-white/15 hover:text-white/30 transition-colors">Privacy</Link>
              <Link href="/contact" className="text-xs text-white/15 hover:text-white/30 transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
