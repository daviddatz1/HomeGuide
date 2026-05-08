import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/80 bg-[#fafaf9]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
            HG
          </span>
          HomeGuide
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900">
            How it works
          </a>
          <a href="#features" className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900">
            Features
          </a>
          <a href="#faq" className="text-sm font-medium text-neutral-600 transition hover:text-neutral-900">
            FAQ
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Join the waitlist
          </a>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-[#fafaf9] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#how-it-works" className="text-sm font-medium text-neutral-700" onClick={() => setOpen(false)}>
              How it works
            </a>
            <a href="#features" className="text-sm font-medium text-neutral-700" onClick={() => setOpen(false)}>
              Features
            </a>
            <a href="#faq" className="text-sm font-medium text-neutral-700" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
