import { Reveal } from "../ui/Reveal";

const pains = [
  {
    title: "Not sure what's actually broken?",
    body: "You hear a drip, a hum, a thud — and have no idea where to start.",
  },
  {
    title: "Tired of paying $200+ for small fixes?",
    body: "A single trip charge often costs more than the part you needed.",
  },
  {
    title: "Waiting days for a handyman?",
    body: "Booking, rescheduling, no-shows. Meanwhile the leak keeps dripping.",
  },
  {
    title: "Afraid of making it worse?",
    body: "One wrong twist and a $5 fix becomes a $500 repair. Stressful.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative border-y border-neutral-200/70 bg-neutral-50/60"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              The problem
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[40px]">
              Home repairs shouldn&apos;t feel like a&nbsp;gamble.
            </h2>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-neutral-600">
              Most household issues are small. But figuring out what&apos;s
              wrong, what to buy, and how to fix it takes hours of stressful
              Googling — or an expensive service call.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} as="li" delay={i * 80}>
              <div className="group h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.18)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 ring-1 ring-inset ring-red-100">
                  <ExclamationIcon className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold tracking-tight text-neutral-900">
                  {pain.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-600">
                  {pain.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExclamationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.86a2 2 0 0 1 3.4 0l8.4 14.18A2 2 0 0 1 20.4 21H3.6a2 2 0 0 1-1.7-2.96L10.3 3.86Z" />
    </svg>
  );
}
