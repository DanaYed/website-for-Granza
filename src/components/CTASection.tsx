import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  label?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  dark?: boolean;
}

export default function CTASection({
  label,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  dark = false,
}: CTASectionProps) {
  return (
    <section
      className={`py-24 ${dark ? "bg-olive-800 text-cream-50" : "bg-cream-100"}`}
    >
      <div className="container-xl text-center">
        {label && (
          <span
            className={`section-label ${dark ? "text-olive-300" : ""}`}
          >
            {label}
          </span>
        )}
        <h2
          className={`section-title text-4xl md:text-5xl max-w-2xl mx-auto ${
            dark ? "text-cream-50" : ""
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-6 text-lg max-w-lg mx-auto ${
              dark ? "text-cream-300" : "text-bark-500"
            }`}
          >
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className={dark ? "btn-primary bg-cream-50 text-bark-700 hover:bg-white" : "btn-primary"}
              >
                {primaryCTA.label} <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={dark ? "btn-outline border-cream-400 text-cream-200 hover:bg-cream-200 hover:text-bark-700" : "btn-outline"}
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
