import { Reveal } from "../ui/Reveal";

const faqs = [
  {
    q: "Is HomeGuide replacing contractors?",
    a: "Not at all. HomeGuide is built for the small, everyday issues most homeowners can safely handle themselves with the right guidance — and it&apos;ll always tell you when something genuinely needs a licensed pro. Think of it as a smart first opinion.",
  },
  {
    q: "What types of repairs does this help with?",
    a: "Small household issues: leaky faucets, running toilets, squeaky doors, broken outlets, cracked tiles, clogged drains, simple appliance fixes, and similar. Anything more complex (gas, structural, full electrical jobs) we&apos;ll route you to a vetted local pro.",
  },
  {
    q: "Is it safe to follow AI-generated repair advice?",
    a: "Every diagnosis comes with a difficulty rating, safety warnings, and clear stop-points. If a fix involves anything risky — gas lines, mains electrical, structural — HomeGuide flags it as pro-only and won&apos;t walk you through it.",
  },
  {
    q: "How accurate is the diagnosis?",
    a: "Our AI is trained on thousands of real home repair scenarios and pairs photo + video analysis with a short follow-up Q&A. For tricky cases, you can escalate to a live human expert in one tap.",
  },
  {
    q: "What does it cost?",
    a: "HomeGuide is free during early access. After launch, the AI diagnosis and DIY guidance will stay affordable, and live expert calls will be priced per minute or per session — always shown up front.",
  },
  {
    q: "When will it be available?",
    a: "We&apos;re onboarding waitlist users in waves. Join the list and we&apos;ll send you an invite as soon as your slot opens.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t border-neutral-200/70 bg-white"
    >
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
              FAQ
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-3 text-pretty text-[16px] leading-relaxed text-neutral-600">
              Still curious? Reach out at{" "}
              <a
                className="font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
                href="mailto:hello@homeguide.app"
              >
                hello@homeguide.app
              </a>
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neutral-50">
                  <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">
                    {item.q}
                  </h3>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all group-open:rotate-45 group-open:border-emerald-200 group-open:bg-emerald-50 group-open:text-emerald-700">
                    <PlusIcon className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p
                    className="max-w-3xl text-[15px] leading-relaxed text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusIcon({ className }: { className?: string }) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
