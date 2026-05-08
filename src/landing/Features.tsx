import { Camera, ListOrdered, Video, Scale, Gauge } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Snap a problem",
    description: "Upload a photo or video and get an instant AI read on what’s likely going on.",
  },
  {
    icon: ListOrdered,
    title: "Step-by-step fix guidance",
    description: "Plain-language instructions with tools needed and clear safety warnings.",
  },
  {
    icon: Video,
    title: "Live expert help",
    description: "Optional video call with a handyman when you want a human walking through it with you.",
  },
  {
    icon: Scale,
    title: "Fix vs hire comparison",
    description: "See estimated DIY cost side by side with typical pro pricing — so you can decide confidently.",
  },
  {
    icon: Gauge,
    title: "Safety & difficulty indicator",
    description: "Know if a fix is safe to DIY, medium effort, or better left to a professional.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">What you get</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Everything in the MVP is focused on clarity — not a noisy marketplace or endless menus.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="group rounded-2xl border border-neutral-100 bg-[#fafaf9] p-6 shadow-sm transition hover:border-neutral-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-900/5 transition group-hover:ring-accent/20">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
