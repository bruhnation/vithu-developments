import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const variants = {
    primary: "bg-navy text-white hover:bg-navy-deep",
    outline:
      "border-2 border-white/90 text-white hover:bg-white/10",
    ghost: "border border-navy/20 text-navy hover:border-navy hover:bg-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-accent" : "text-slate"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-sans text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-stone-dark bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          Vithu Developments LTD
        </p>
        <h1 className="font-serif text-4xl text-navy-deep md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-slate">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
