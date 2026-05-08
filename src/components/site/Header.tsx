import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="HomeGuide home"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Logo className="h-7 w-7" />
          <span className="text-[17px] font-semibold tracking-tight text-neutral-900">
            HomeGuide
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#waitlist"
            className="hidden text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-neutral-950 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Join waitlist
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
