import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-50/80 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="animate-fade-up opacity-0 [animation-delay:0.05s] [animation-fill-mode:forwards]">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
            Early access · Validation stage
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Fix home problems instantly{" "}
            <span className="bg-gradient-to-r from-accent to-emerald-600 bg-clip-text text-transparent">
              without waiting for a contractor.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Upload a photo of any home issue and get step-by-step help or live expert guidance instantly.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-neutral-900/15 transition hover:bg-neutral-800"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-400 hover:bg-neutral-50"
            >
              See how it works
            </a>
          </div>
          <p className="mt-8 text-sm text-neutral-500">
            No marketplace noise — just clarity when something breaks at home.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-md animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards] lg:mx-0 lg:max-w-none"
          aria-hidden
        >
          <div className="animate-float relative rounded-[2rem] border border-neutral-200/80 bg-white p-2 shadow-2xl shadow-neutral-900/10 ring-1 ring-neutral-900/5">
            <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-neutral-100 to-neutral-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">Preview</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                  AI match
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-300/80 to-neutral-400/60 text-neutral-600">
                  <span className="text-sm font-medium">Photo / video upload</span>
                </div>
              </div>
              <div className="mt-4 space-y-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-neutral-900">Likely issue: loose P-trap under sink</p>
                <p className="text-xs leading-relaxed text-neutral-600">
                  Common fix · ~15 min · wrench &amp; towel needed
                </p>
                <div className="flex gap-2 pt-1">
                  <span className="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900">
                    Medium difficulty
                  </span>
                  <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">
                    DIY safe with steps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
