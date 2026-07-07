"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { brand, logoUrl, navLinks } from "@/data/site";
import { Button } from "./ui";

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-deep pt-[env(safe-area-inset-top,0px)] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
              <img
                src={logoUrl}
                alt=""
                className="h-9 w-9 object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold leading-tight text-white">
                {brand.shortName}
              </p>
              <p className="truncate text-[10px] font-medium uppercase tracking-wide text-white/65">
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
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={brand.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4 text-accent" />
              {brand.phone}
            </a>
            <Button
              to="/contact"
              className="!px-5 !py-2.5 !text-[11px] !font-bold !uppercase !tracking-wider !text-navy-deep bg-accent hover:!bg-accent-hover"
            >
              Request a Quote
            </Button>
          </div>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded border border-white/25 bg-white/10 text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-navy-deep px-6 py-8 lg:hidden">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="flex min-h-11 items-center font-serif text-3xl text-white hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={brand.phoneHref}
              className="mt-6 flex min-h-11 items-center gap-2 text-lg font-semibold text-white"
            >
              <Phone className="h-5 w-5 text-accent" />
              {brand.phone}
            </a>
            <Button
              to="/contact"
              className="mt-4 w-full !py-3 !text-xs !font-bold !uppercase !tracking-widest !text-navy-deep bg-accent hover:!bg-accent-hover"
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
