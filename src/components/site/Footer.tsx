import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <span className="text-[16px] font-semibold tracking-tight">
                HomeGuide
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-neutral-600">
              Diagnose and fix everyday home issues with confidence — powered
              by AI guidance and live expert help, right from your phone.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#how-it-works">
                  How it works
                </a>
              </li>
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#waitlist">
                  Join waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="mailto:hello@homeguide.app">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-neutral-700 transition-colors hover:text-neutral-950" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 text-[13px] text-neutral-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HomeGuide, Inc. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Building in public · Validation stage
          </p>
        </div>
      </div>
    </footer>
  );
}
