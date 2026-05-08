import { FormEvent, useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export function WaitlistForm({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900 ${
          variant === "compact" ? "text-sm" : ""
        }`}
      >
        <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden />
        <div>
          <p className="font-semibold">You&apos;re on the list.</p>
          <p className="text-sm text-emerald-800/90">We&apos;ll reach out when early access opens.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={variant === "compact" ? "w-full max-w-md" : "w-full max-w-lg"}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" aria-hidden />
          <input
            id="waitlist-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 bg-white py-3.5 pl-12 pr-4 text-sm text-neutral-900 shadow-inner outline-none ring-neutral-900/5 placeholder:text-neutral-400 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <button
          type="submit"
          className="rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:shrink-0"
        >
          Join waitlist
        </button>
      </div>
      <p className="mt-3 text-xs text-neutral-500">We respect your inbox — no spam, just launch updates.</p>
    </form>
  );
}
