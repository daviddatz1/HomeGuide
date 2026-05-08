import { Upload, Brain, Video } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Upload a photo or video",
    description: "Show the issue in context — a quick snap is enough for HomeGuide to understand what you’re seeing.",
    icon: Upload,
  },
  {
    step: "2",
    title: "Get AI diagnosis + instructions",
    description: "Receive a clear read on what’s likely wrong, what tools you need, and safety-aware steps to fix it.",
    icon: Brain,
  },
  {
    step: "3",
    title: "Fix it yourself or call a live expert",
    description: "Follow along on your own, or hop on optional video with a handyman for real-time guidance.",
    icon: Video,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-neutral-600">Three simple steps from “what is this?” to “I’ve got this.”</p>
        </div>
        <ol className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <li key={step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-lg shadow-blue-500/25">
                <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Step {step}</span>
              <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
