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
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250, 250, 248, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        boxShadow: scrolled ? "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[var(--text-primary)] tracking-tight text-lg hover:opacity-80 transition-opacity">
          Land Your Web
        </Link>
        <nav className="hidden sm:flex items-center gap-10">
          <Link href="/services" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-line">
            Services
          </Link>
          <Link href="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors link-line">
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold transition-colors"
            style={{color: "var(--lyw-blue)"}}
          >
            Start a project →
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${jetbrainsMono.variable}`} style={{background: "var(--canvas-cream)"}}>
      <body className="font-sans antialiased">
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <footer className="section-navy">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{color: "rgba(255,255,255,0.3)"}}>
              © {new Date().getFullYear()} Land Your Web LLC
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs hover:opacity-70 transition-colors" style={{color: "rgba(255,255,255,0.3)"}}>Privacy</Link>
              <Link href="/contact" className="text-xs hover:opacity-70 transition-colors" style={{color: "rgba(255,255,255,0.3)"}}>Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
