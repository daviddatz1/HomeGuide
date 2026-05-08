"use client";

import { useState, type FormEvent } from "react";

type Variant = "hero" | "stacked" | "inline";

type WaitlistFormProps = {
  variant?: Variant;
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
  id?: string;
};

export function WaitlistForm({
  variant = "hero",
  buttonLabel = "Join the Waitlist",
  placeholder = "you@home.com",
  className = "",
  id,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");

    // Simulated async submission. Wire up to your backend or email
    // service (Resend, Loops, ConvertKit, etc.) when ready.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus("success");
    setMessage("You're on the list. We'll be in touch soon.");
    setEmail("");
  };

  const isStacked = variant === "stacked";
  const isInline = variant === "inline";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className={[
        "w-full",
        isStacked
          ? "flex flex-col gap-3"
          : "flex flex-col sm:flex-row gap-2.5 sm:gap-2",
        className,
      ].join(" ")}
    >
      <label htmlFor={`${id ?? "waitlist"}-email`} className="sr-only">
        Email address
      </label>
      <div
        className={[
          "relative flex-1",
          isInline ? "" : "",
        ].join(" ")}
      >
        <input
          id={`${id ?? "waitlist"}-email`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-invalid={status === "error"}
          className="w-full h-12 sm:h-12 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] text-neutral-900 placeholder:text-neutral-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 disabled:opacity-60"
          disabled={status === "loading"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={[
          "group inline-flex h-12 items-center justify-center gap-2 rounded-xl",
          "bg-neutral-950 px-5 text-[15px] font-semibold text-white",
          "shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_8px_24px_-12px_rgba(16,185,129,0.45)]",
          "transition hover:bg-neutral-800 active:scale-[0.99]",
          "disabled:opacity-70 disabled:cursor-not-allowed",
          isStacked ? "w-full" : "sm:w-auto",
        ].join(" ")}
      >
        {status === "loading" ? (
          <>
            <Spinner />
            Joining…
          </>
        ) : (
          <>
            {buttonLabel}
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </>
        )}
      </button>

      <div
        aria-live="polite"
        className={[
          "min-h-[1.25rem] basis-full text-[13px]",
          status === "success"
            ? "text-emerald-700"
            : status === "error"
              ? "text-red-600"
              : "text-neutral-500",
        ].join(" ")}
      >
        {message ||
          (status === "idle"
            ? "Free during early access. No spam, ever."
            : "")}
      </div>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 1-9 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
