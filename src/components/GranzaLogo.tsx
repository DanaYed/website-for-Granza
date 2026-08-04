"use client";

export default function GranzaLogo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Granza mark"
      >
        {/* Outer shield shape */}
        <path
          d="M60 6 L108 28 L108 70 Q108 98 60 114 Q12 98 12 70 L12 28 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        {/* Inner shield */}
        <path
          d="M60 14 L100 33 L100 70 Q100 92 60 106 Q20 92 20 70 L20 33 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Tree trunk */}
        <line x1="60" y1="108" x2="60" y2="72" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        {/* Roots */}
        <line x1="60" y1="100" x2="44" y2="108" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="100" x2="76" y2="108" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="96" x2="36" y2="104" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="96" x2="84" y2="104" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Main branches */}
        <line x1="60" y1="72" x2="32" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="72" x2="88" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="65" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="65" x2="96" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="58" x2="30" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="58" x2="90" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Crown arcs */}
        <path d="M30 52 Q60 20 90 52" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M35 44 Q60 16 85 44" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 36 Q60 14 80 36" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <GranzaLogo variant="mark" className="w-10 h-10" />
      <span className="font-serif text-2xl tracking-[0.2em] font-semibold leading-none">
        GRANZA
      </span>
    </div>
  );
}
