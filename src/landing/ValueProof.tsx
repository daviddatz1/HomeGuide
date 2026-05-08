import { X, Check } from "lucide-react";

const before = ["Confusion about what’s wrong", "Stress every time something breaks", "Expensive visits for quick fixes"];

const after = ["Clarity on the real issue", "Confidence to try safe fixes first", "Faster resolution at lower cost"];

export function ValueProof() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">The shift HomeGuide enables</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Same home, same problems — a calmer path from stuck to solved.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Before</p>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                    <X className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-8 shadow-md shadow-emerald-900/5 ring-1 ring-emerald-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">After</p>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
