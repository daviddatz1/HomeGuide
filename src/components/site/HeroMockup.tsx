/**
 * HeroMockup — a polished, fully-vector mock of the HomeGuide app
 * showing a leaky-faucet diagnosis. Built with Tailwind + inline SVG so it
 * looks crisp at any resolution and stays performant.
 */
export function HeroMockup() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[520px]">
      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[48px] bg-gradient-to-br from-emerald-200/40 via-emerald-100/30 to-transparent blur-2xl"
      />

      {/* Floating accent badges */}
      <FloatingBadge
        className="absolute -left-2 top-10 hidden sm:flex animate-float-soft"
        icon={<CameraIcon className="h-4 w-4 text-emerald-600" />}
        title="Photo analyzed"
        subtitle="2.1s"
      />
      <FloatingBadge
        className="absolute -right-2 top-40 hidden sm:flex animate-float-soft [animation-delay:1.5s]"
        icon={<DollarIcon className="h-4 w-4 text-emerald-600" />}
        title="Saved ~$180"
        subtitle="vs. plumber visit"
        align="right"
      />

      {/* Phone frame */}
      <div className="relative mx-auto aspect-[9/19] w-[290px] sm:w-[320px] rounded-[44px] border border-neutral-900/10 bg-neutral-950 p-2 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.35),0_10px_30px_-10px_rgba(15,23,42,0.25)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-950" />
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white">
          {/* Status bar */}
          <div className="flex h-9 items-center justify-between px-5 pt-2 text-[10px] font-semibold text-neutral-800">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 pb-2 pt-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11.5 12 4l9 7.5" />
                  <path d="M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold tracking-tight">
                HomeGuide
              </span>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-neutral-700"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
          </div>

          {/* Photo preview card */}
          <div className="mx-4 mt-1 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50">
            <FaucetSceneSVG />
          </div>

          {/* Diagnosis card */}
          <div className="mx-4 mt-3 rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                <CheckIcon className="h-2.5 w-2.5" />
                Diagnosed
              </span>
              <span className="text-[10px] font-medium text-neutral-400">
                98% confident
              </span>
            </div>
            <h4 className="mt-1.5 text-[13px] font-semibold tracking-tight text-neutral-900">
              Worn faucet cartridge
            </h4>
            <p className="mt-0.5 text-[11px] leading-snug text-neutral-500">
              Drip from spout when handle is closed. Most likely an O-ring or
              cartridge replacement.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Stat label="DIY cost" value="~$12" tone="positive" />
              <Stat label="Pro cost" value="~$190" tone="muted" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Easy · 20 min
              </span>
              <span className="text-[10px] font-medium text-neutral-400">
                4 steps
              </span>
            </div>
          </div>

          {/* CTA bar */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-2xl bg-neutral-950 p-1.5 text-white shadow-lg">
            <button className="flex-1 rounded-xl bg-white/10 py-2 text-[11px] font-semibold backdrop-blur transition hover:bg-white/15">
              Start guided fix
            </button>
            <button
              className="flex h-8 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white"
              aria-label="Call expert"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- subparts ------------------------------- */

function FaucetSceneSVG() {
  return (
    <svg
      viewBox="0 0 280 150"
      className="h-[140px] w-full"
      role="img"
      aria-label="Photo of a leaking kitchen faucet"
    >
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="metal" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id="sink" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="drop" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect width="280" height="150" fill="url(#bg)" />
      {/* Tile lines */}
      <g stroke="#cbd5e1" strokeWidth="0.5" opacity="0.6">
        <line x1="0" y1="40" x2="280" y2="40" />
        <line x1="0" y1="80" x2="280" y2="80" />
        <line x1="70" y1="0" x2="70" y2="80" />
        <line x1="140" y1="0" x2="140" y2="80" />
        <line x1="210" y1="0" x2="210" y2="80" />
      </g>
      {/* Sink */}
      <rect
        x="20"
        y="100"
        width="240"
        height="40"
        rx="6"
        fill="url(#sink)"
        stroke="#94a3b8"
        strokeWidth="0.6"
      />
      <ellipse cx="140" cy="125" rx="40" ry="6" fill="#94a3b8" opacity="0.5" />
      {/* Faucet body */}
      <g>
        <rect x="132" y="50" width="16" height="40" rx="3" fill="url(#metal)" />
        <rect x="118" y="42" width="44" height="14" rx="3" fill="url(#metal)" />
        <rect x="138" y="35" width="4" height="10" fill="#64748b" />
        <circle cx="140" cy="33" r="6" fill="url(#metal)" stroke="#475569" strokeWidth="0.6" />
        <rect x="130" y="86" width="20" height="6" rx="1" fill="#475569" />
      </g>
      {/* Water drop */}
      <g>
        <path
          d="M140 100 q-4 5 -4 9 a4 4 0 0 0 8 0 q0 -4 -4 -9 z"
          fill="url(#drop)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 8; 0 0"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;1;0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      {/* Detection box */}
      <g>
        <rect
          x="115"
          y="30"
          width="50"
          height="78"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          rx="6"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-12"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="115" y="20" width="78" height="11" rx="3" fill="#10b981" />
        <text
          x="119"
          y="28"
          fontSize="7"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fill="#fff"
        >
          Faucet · leak
        </text>
      </g>
    </svg>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "positive" | "muted";
}) {
  return (
    <div
      className={[
        "rounded-xl border px-2.5 py-2",
        tone === "positive"
          ? "border-emerald-200 bg-emerald-50/60"
          : "border-neutral-200 bg-neutral-50",
      ].join(" ")}
    >
      <div className="text-[9px] font-medium uppercase tracking-wide text-neutral-500">
        {label}
      </div>
      <div
        className={[
          "mt-0.5 text-[14px] font-semibold tracking-tight",
          tone === "positive" ? "text-emerald-700" : "text-neutral-700",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}

function FloatingBadge({
  className = "",
  icon,
  title,
  subtitle,
  align = "left",
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={[
        "z-10 items-center gap-2 rounded-2xl border border-neutral-200/80 bg-white/90 px-3 py-2 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur",
        className,
      ].join(" ")}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-inset ring-emerald-100">
        {icon}
      </div>
      <div className={align === "right" ? "text-right" : ""}>
        <div className="text-[11px] font-semibold tracking-tight text-neutral-900">
          {title}
        </div>
        {subtitle ? (
          <div className="text-[10px] text-neutral-500">{subtitle}</div>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------- icons ------------------------------- */

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function DollarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.36 2.3.55 3.6.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 2 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.55 3.6a1 1 0 0 1-.25 1L6.6 10.8Z" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}
function SignalIcon() {
  return (
    <svg viewBox="0 0 16 12" className="h-2.5 w-3.5" fill="currentColor">
      <rect x="0" y="8" width="2.5" height="4" rx="0.6" />
      <rect x="4" y="6" width="2.5" height="6" rx="0.6" />
      <rect x="8" y="3.5" width="2.5" height="8.5" rx="0.6" />
      <rect x="12" y="0.5" width="2.5" height="11.5" rx="0.6" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg viewBox="0 0 16 12" className="h-2.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M1.5 5.5a10 10 0 0 1 13 0" />
      <path d="M3.8 7.5a6.6 6.6 0 0 1 8.4 0" />
      <path d="M5.8 9.5a3.4 3.4 0 0 1 4.4 0" />
      <circle cx="8" cy="11" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg viewBox="0 0 22 10" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="0.5" y="0.5" width="18" height="9" rx="2" />
      <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
      <rect x="19.5" y="3" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}
