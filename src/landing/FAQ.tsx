const faqs = [
  {
    q: "Is this replacing contractors?",
    a: "No. HomeGuide helps you understand small household issues and fix what’s safely DIY — or know when to call a pro. Complex work still belongs with licensed professionals.",
  },
  {
    q: "What types of repairs does this help with?",
    a: "Everyday household issues: leaks, outlets, fixtures, appliances behaving oddly, and similar small problems. It’s not a full marketplace — it’s focused guidance for common headaches.",
  },
  {
    q: "Is this safe?",
    a: "Yes — when you follow the guidance. We highlight safety warnings and difficulty so you can avoid risky work and escalate when something should be handled by an expert.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-neutral-200 bg-[#fafaf9] px-5 py-4 transition open:bg-white open:shadow-md"
            >
              <summary className="cursor-pointer list-none font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {q}
                  <span className="text-neutral-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
