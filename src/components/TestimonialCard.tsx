interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-5 p-8 bg-cream-50 border border-cream-200 hover:shadow-md transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 16 16"
            className={`w-3.5 h-3.5 ${i < rating ? "text-gold-400 fill-current" : "text-cream-300 fill-current"}`}
          >
            <path d="M8 1.25l1.8 3.65 4.03.58-2.92 2.85.69 4.02L8 10.35l-3.6 1.9.69-4.02L2.17 5.48l4.03-.58z" />
          </svg>
        ))}
      </div>

      <blockquote className="font-serif text-lg italic text-bark-600 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="pt-2 border-t border-cream-200">
        <div className="font-medium text-bark-700 text-sm">{name}</div>
        <div className="text-xs text-bark-400 tracking-wide mt-0.5">{role}</div>
      </div>
    </div>
  );
}
