import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { brand, logoUrl, navLinks } from "../data/site";
import { Button } from "./ui";

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const heroHeader = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          heroHeader
            ? "bg-white/95 shadow-sm backdrop-blur-sm"
            : "border-b border-stone-dark/80 bg-white/98 shadow-md backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:py-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoUrl}
              alt=""
              className="h-11 w-11 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-navy-deep leading-tight">
                {brand.name}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate">
                Home Builder & Remodeling
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  location.pathname === link.to
                    ? "text-accent"
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
              className="flex items-center gap-2 text-sm font-semibold text-navy-deep hover:text-navy"
            >
              <Phone className="h-4 w-4 text-accent" />
              {brand.phone}
            </a>
            <Button
              to="/contact"
              className="!py-2.5 !px-5 !text-[11px] !font-bold !uppercase !tracking-wider bg-navy hover:!bg-navy-deep"
            >
              Request a Quote
            </Button>
          </div>

          <button
            type="button"
            className="rounded p-2 text-navy-deep lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-stone-dark bg-white px-6 py-8 lg:hidden">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-serif text-3xl text-navy-deep hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={brand.phoneHref}
              className="mt-8 flex items-center gap-2 text-lg font-semibold text-navy-deep"
            >
              <Phone className="h-5 w-5" />
              {brand.phone}
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

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
                  <Link to={link.to} className="hover:text-white">
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
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
