import { HelpCircle, Clock, DollarSign, AlertTriangle } from "lucide-react";

const pains = [
  {
    icon: HelpCircle,
    title: "Not sure what's actually broken?",
    body: "That dripping sound or flickering light could mean anything — and guessing wastes time.",
  },
  {
    icon: DollarSign,
    title: "Tired of paying $200+ for small fixes?",
    body: "Simple visits add up fast when all you needed was clarity and a few right turns of a wrench.",
  },
  {
    icon: Clock,
    title: "Waiting days for a handyman?",
    body: "Small problems balloon while you're stuck on someone else's schedule.",
  },
  {
    icon: AlertTriangle,
    title: "Afraid of making it worse?",
    body: "Without guidance, DIY feels risky — so issues linger or get more expensive.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-y border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Home repairs shouldn&apos;t feel this hard
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Most homeowners share the same frustrations. HomeGuide is built to remove the guesswork — calmly and
            clearly.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pains.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-neutral-100 bg-[#fafaf9] p-6 shadow-sm transition hover:border-neutral-200 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
