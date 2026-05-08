import { WaitlistForm } from "./WaitlistForm";

export function Footer() {
  return (
    <footer id="waitlist" className="scroll-mt-24 border-t border-neutral-200 bg-[#fafaf9] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Waitlist</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Get early access to HomeGuide
            </h2>
            <p className="mt-3 text-neutral-600">
              Leave your email and we&apos;ll notify you when spots open. Help us validate demand for calmer, clearer
              home repair help.
            </p>
          </div>
          <WaitlistForm />
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-200 pt-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HomeGuide. All rights reserved.</p>
          <p className="text-neutral-400">Built for homeowners · Validation-stage product</p>
        </div>
      </div>
    </footer>
  );
}
