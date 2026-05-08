import { Reveal } from "../ui/Reveal";

const features = [
  {
    title: "Snap a Problem",
    body: "Upload a photo or short video and get an instant AI diagnosis of the issue — no jargon, no guesswork.",
    icon: <CameraGlyph />,
    accent: "from-emerald-500/15 to-emerald-500/0",
    span: "lg:col-span-2",
  },
  {
    title: "Step-by-Step Fix Guidance",
    body: "Clear instructions, the exact tools you need, and safety warnings tailored to your specific issue.",
    icon: <ListGlyph />,
    accent: "from-emerald-500/10 to-emerald-500/0",
    span: "",
  },
  {
    title: "Live Expert Help",
    body: "Tap to start a video call with a vetted handyman who can guide you through the fix in real time.",
    icon: <VideoGlyph />,
    accent: "from-emerald-500/10 to-emerald-500/0",
    span: "",
  },
  {
    title: "Fix vs. Hire Comparison",
    body: "See estimated DIY cost vs. typical pro pricing for your area — so you always know what's worth your time.",
    icon: <ScaleGlyph />,
    accent: "from-emerald-500/10 to-emerald-500/0",
    span: "",
  },
  {
    title: "Safety & Difficulty Indicator",
    body: "Every issue is rated easy, medium, or pro-only — with clear guardrails when something is genuinely unsafe to DIY.",
    icon: <ShieldGlyph />,
    accent: "from-emerald-500/15 to-emerald-500/0",
    span: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 border-t border-neutral-200/70 bg-neutral-50/60"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              What you get
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-[40px]">
              Everything you need to fix it&nbsp;yourself.
            </h2>
            <p className="mt-4 text-pretty text-[17px] leading-relaxed text-neutral-600">
              A focused toolkit for the small home issues that pop up every
              week — without the friction of a full service call.
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              as="li"
              delay={i * 70}
              className={f.span}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.18)] sm:p-7">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-80 ${f.accent}`}
                />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    {f.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-950">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----- icon glyphs ----- */
const iconBase =
  "h-5 w-5";

function CameraGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconBase} aria-hidden="true">
      <path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function ListGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconBase} aria-hidden="true">
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="m4 6 1 1 2-2" />
      <path d="m4 12 1 1 2-2" />
      <path d="m4 18 1 1 2-2" />
    </svg>
  );
}
function VideoGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconBase} aria-hidden="true">
      <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
      <path d="m22 8-6 4 6 4V8Z" />
    </svg>
  );
}
function ScaleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconBase} aria-hidden="true">
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7 2 14a4 4 0 0 0 6 0L5 7Z" />
      <path d="M19 7l-3 7a4 4 0 0 0 6 0l-3-7Z" />
    </svg>
  );
}
function ShieldGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconBase} aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
