import { WaitlistForm } from "../ui/WaitlistForm";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-radial-fade pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent_75%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-6">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm transition hover:bg-emerald-50"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Now in private beta · Join the waitlist
            </a>

            <h1 className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-[52px] lg:text-[60px]">
              Fix home problems in&nbsp;minutes,{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                  not days.
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-neutral-600 sm:text-lg">
              Snap a photo of any home issue and get an instant AI diagnosis,
              clear step-by-step instructions, and optional live expert video
              help — all from your pocket.
            </p>

            <div className="mt-8 max-w-md">
              <WaitlistForm
                id="hero-waitlist"
                buttonLabel="Join the Waitlist"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-500">
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-1.5 font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white transition group-hover:bg-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 translate-x-px"
                  >
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                </span>
                See how it works
              </a>
              <div className="flex items-center gap-1.5">
                <ShieldIcon className="h-4 w-4 text-emerald-600" />
                Safety-checked guidance
              </div>
              <div className="flex items-center gap-1.5">
                <BoltIcon className="h-4 w-4 text-emerald-600" />
                Instant answers
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-6">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
