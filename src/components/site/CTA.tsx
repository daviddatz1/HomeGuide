import { WaitlistForm } from "../ui/WaitlistForm";
import { Reveal } from "../ui/Reveal";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="relative scroll-mt-20 overflow-hidden bg-neutral-950 text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(16,185,129,0.35),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300">
            <SparkleIcon className="h-3 w-3" />
            Early access · limited spots
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Stop overpaying for{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              simple home repairs.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-300">
            Be among the first to try HomeGuide when it launches. Free during
            early access — keep your spot now.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-md text-left">
            <WaitlistForm
              id="cta-waitlist"
              variant="hero"
              buttonLabel="Join the Early Access List"
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-neutral-300 sm:grid-cols-3">
            <Bullet>No credit card required</Bullet>
            <Bullet>Cancel any time</Bullet>
            <Bullet>Privacy-first photo handling</Bullet>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center justify-center gap-2">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
          aria-hidden="true"
        >
          <path d="m5 12 5 5L20 7" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 13.5 8.5 20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />
    </svg>
  );
}
