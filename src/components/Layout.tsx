"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { brand, logoUrl, navLinks } from "@/data/site";
import { Button } from "./ui";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heroHeader = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
          heroHeader
            ? "border-b border-white/20 bg-navy-deep/92 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "border-b border-stone-dark/80 bg-white shadow-md backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img
              src={logoUrl}
              alt=""
              className="h-11 w-11 object-contain"
            />
            <div className={heroHeader ? "block sm:block" : "hidden sm:block"}>
              <p
                className={`text-sm font-bold leading-tight ${
                  heroHeader ? "text-white" : "text-navy-deep"
                }`}
              >
                {brand.shortName}
              </p>
              <p
                className={`text-[10px] font-medium uppercase tracking-wide ${
                  heroHeader ? "text-white/70" : "text-slate"
                }`}
              >
                Home Builder & Remodeling
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  pathname === link.to
                    ? "text-accent"
                    : heroHeader
                      ? "text-white/85 hover:text-white"
                      : "text-navy-deep/80 hover:text-navy-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={brand.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold ${
                heroHeader
                  ? "text-white hover:text-white/80"
                  : "text-navy-deep hover:text-navy"
              }`}
            >
              <Phone className="h-4 w-4 text-accent" />
              {brand.phone}
            </a>
            <Button
              to="/contact"
              className={`!px-5 !py-2.5 !text-[11px] !font-bold !uppercase !tracking-wider ${
                heroHeader
                  ? "bg-accent hover:!bg-accent-hover"
                  : "bg-navy hover:!bg-navy-deep"
              }`}
            >
              Request a Quote
            </Button>
          </div>

          <button
            type="button"
            className={`flex min-h-11 min-w-11 items-center justify-center rounded lg:hidden ${
              heroHeader ? "text-white" : "text-navy-deep"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-stone-dark bg-white px-6 py-8 lg:hidden">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="flex min-h-11 items-center font-serif text-3xl text-navy-deep hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={brand.phoneHref}
              className="mt-6 flex min-h-11 items-center gap-2 text-lg font-semibold text-navy-deep"
            >
              <Phone className="h-5 w-5" />
              {brand.phone}
            </a>
            <Button
              to="/contact"
              className="mt-4 w-full !py-3 !text-xs !font-bold !uppercase !tracking-widest bg-navy hover:!bg-navy-deep"
            >
              Request a Quote
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">Vithu Developments</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {brand.tagline}
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Quick links
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link href={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Services
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>Custom homes</li>
              <li>Home remodeling</li>
              <li>Kitchen remodeling</li>
              <li>Design-build</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href={brand.phoneHref} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>{brand.address}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/50">
          © 2026 {brand.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
