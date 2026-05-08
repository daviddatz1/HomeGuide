import { Reveal } from "../ui/Reveal";

const before = [
  "Confused about what's actually wrong",
  "Stressed about making it worse",
  "Paying $200+ for a 10-minute fix",
  "Waiting 3–5 days for an appointment",
];

const after = [
  "Clear, AI-verified diagnosis in seconds",
  "Confidence with safety-checked steps",
  "Fixes for under $20 in parts on average",
  "Help in the next minute, not next week",
];

export function ValueProof() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              The transformation
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[40px]">
              From overwhelmed to handy in&nbsp;minutes.
            </h2>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-neutral-600">
              HomeGuide turns the most stressful part of homeownership into the
              most satisfying — with calm, expert-backed guidance every step of
              the way.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <Card
              tone="before"
              eyebrow="Before HomeGuide"
              title="Reactive, anxious, expensive"
              items={before}
            />
          </Reveal>
          <Reveal delay={120}>
            <Card
              tone="after"
              eyebrow="With HomeGuide"
              title="Calm, confident, in control"
              items={after}
            />
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-10 grid gap-3 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-3 sm:grid-cols-3 sm:p-4">
            <Stat number="~85%" label="of household issues are DIY-fixable with the right guidance" />
            <Stat number="$180+" label="average savings vs. a typical service call" />
            <Stat number="< 2 min" label="from photo to clear next step" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({
  tone,
  eyebrow,
  title,
  items,
}: {
  tone: "before" | "after";
  eyebrow: string;
  title: string;
  items: string[];
}) {
  const isAfter = tone === "after";
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border p-7 sm:p-9",
        isAfter
          ? "border-emerald-200/70 bg-gradient-to-b from-emerald-50/80 via-white to-white shadow-[0_30px_60px_-30px_rgba(16,185,129,0.35)]"
          : "border-neutral-200 bg-white",
      ].join(" ")}
    >
      {isAfter ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-300/20 blur-3xl"
        />
      ) : null}
      <div className="relative">
        <span
          className={[
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
            isAfter
              ? "bg-emerald-100 text-emerald-800"
              : "bg-neutral-100 text-neutral-600",
          ].join(" ")}
        >
          {isAfter ? <SparkleIcon className="h-3 w-3" /> : <DotIcon />}
          {eyebrow}
        </span>
        <h3
          className={[
            "mt-3 text-2xl font-semibold tracking-tight",
            isAfter ? "text-emerald-950" : "text-neutral-900",
          ].join(" ")}
        >
          {title}
        </h3>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className={[
                  "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full",
                  isAfter
                    ? "bg-emerald-500 text-white"
                    : "bg-neutral-200 text-neutral-500",
                ].join(" ")}
              >
                {isAfter ? (
                  <CheckIcon className="h-3 w-3" />
                ) : (
                  <CrossIcon className="h-3 w-3" />
                )}
              </span>
              <span
                className={[
                  "text-[15px] leading-relaxed",
                  isAfter ? "text-emerald-950" : "text-neutral-600",
                ].join(" ")}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl bg-white p-5 ring-1 ring-inset ring-neutral-200">
      <div className="text-[28px] font-semibold tracking-tight text-emerald-700 sm:text-[32px]">
        {number}
      </div>
      <p className="mt-1 text-[13.5px] leading-snug text-neutral-600">
        {label}
      </p>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function CrossIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l12 12M6 18 18 6" />
    </svg>
  );
}
function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 13.5 8.5 20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />
    </svg>
  );
}
function DotIcon() {
  return <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />;
}
