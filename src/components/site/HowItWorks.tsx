import { Reveal } from "../ui/Reveal";

const steps = [
  {
    n: "01",
    title: "Snap a photo or video",
    body: "Show us the leak, the noise, the broken piece. Anywhere in your home.",
    visual: <SnapVisual />,
  },
  {
    n: "02",
    title: "Get an instant diagnosis",
    body: "Our AI identifies the issue, recommended fix, tools needed, and safety notes.",
    visual: <DiagnoseVisual />,
  },
  {
    n: "03",
    title: "Fix it — or call an expert",
    body: "Follow guided steps yourself, or tap to video-call a vetted pro for live help.",
    visual: <FixVisual />,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              How it works
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[40px]">
              Three simple steps from confused to&nbsp;confident.
            </h2>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-neutral-600">
              No paperwork, no scheduling, no surprise charges. Just real
              answers for real problems.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block"
          >
            <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
          </div>

          <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.n} as="li" delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 items-center rounded-full bg-neutral-100 px-3 font-mono text-[11px] font-semibold tracking-wider text-neutral-600">
                      STEP {step.n}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 transition group-hover:bg-emerald-100">
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className="mt-6 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-50 via-white to-emerald-50/40 ring-1 ring-inset ring-neutral-100">
                    {step.visual}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----- step visuals ----- */

function SnapVisual() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="snap-frame" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
      </defs>
      <rect
        x="40"
        y="20"
        width="120"
        height="100"
        rx="14"
        fill="url(#snap-frame)"
        stroke="#e2e8f0"
      />
      <rect x="48" y="28" width="104" height="68" rx="8" fill="#0f172a" />
      <circle cx="100" cy="62" r="14" fill="none" stroke="#10b981" strokeWidth="2" />
      <circle cx="100" cy="62" r="22" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="62" r="30" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.25" />
      <circle cx="100" cy="62" r="3" fill="#10b981" />
      <rect x="80" y="104" width="40" height="8" rx="4" fill="#0f172a" />
      <rect x="58" y="104" width="14" height="8" rx="4" fill="#e2e8f0" />
      <rect x="128" y="104" width="14" height="8" rx="4" fill="#e2e8f0" />
    </svg>
  );
}

function DiagnoseVisual() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <rect x="20" y="22" width="160" height="96" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="32" y="34" width="60" height="8" rx="4" fill="#cbd5e1" />
      <rect x="32" y="48" width="120" height="6" rx="3" fill="#e2e8f0" />
      <rect x="32" y="60" width="100" height="6" rx="3" fill="#e2e8f0" />
      <g>
        <rect x="32" y="78" width="64" height="28" rx="8" fill="#ecfdf5" stroke="#a7f3d0" />
        <circle cx="46" cy="92" r="5" fill="#10b981" />
        <path d="M44 92l1.6 1.6L48 90.5" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="56" y="86" width="34" height="4" rx="2" fill="#065f46" />
        <rect x="56" y="94" width="22" height="4" rx="2" fill="#10b981" opacity="0.6" />
      </g>
      <g>
        <rect x="104" y="78" width="48" height="28" rx="8" fill="#fffbeb" stroke="#fde68a" />
        <circle cx="116" cy="92" r="3" fill="#f59e0b" />
        <rect x="124" y="86" width="22" height="4" rx="2" fill="#92400e" />
        <rect x="124" y="94" width="14" height="4" rx="2" fill="#f59e0b" opacity="0.6" />
      </g>
    </svg>
  );
}

function FixVisual() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <rect x="22" y="22" width="100" height="96" rx="14" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="34" y="36" width="20" height="6" rx="3" fill="#10b981" />
      <rect x="34" y="50" width="76" height="5" rx="2" fill="#e2e8f0" />
      <rect x="34" y="60" width="60" height="5" rx="2" fill="#e2e8f0" />
      <rect x="34" y="78" width="76" height="28" rx="8" fill="#0f172a" />
      <rect x="44" y="90" width="40" height="4" rx="2" fill="#fff" />
      <rect x="44" y="98" width="20" height="3" rx="1.5" fill="#94a3b8" />

      <g>
        <rect x="120" y="40" width="62" height="80" rx="10" fill="#0f172a" />
        <rect x="124" y="44" width="54" height="60" rx="6" fill="#1e293b" />
        <circle cx="151" cy="74" r="14" fill="#0ea5e9" opacity="0.25" />
        <circle cx="151" cy="74" r="9" fill="#10b981" />
        <path d="M148 73l2.2 2.2 4-4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="138" y="108" width="26" height="6" rx="3" fill="#10b981" />
      </g>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
