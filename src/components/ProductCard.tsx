import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  subtitle: string;
  volume: string;
  imageSrc?: string;
  href?: string;
  featured?: boolean;
}

export default function ProductCard({
  name,
  subtitle,
  volume,
  imageSrc,
  href = "/products",
  featured = false,
}: ProductCardProps) {
  return (
    <div
      className={`group relative flex flex-col ${
        featured ? "bg-olive-800 text-cream-50" : "bg-cream-100 text-bark-700"
      } overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Image area */}
      <div className={`relative h-80 overflow-hidden ${featured ? "bg-olive-900" : "bg-cream-200"}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="img-placeholder absolute inset-0 flex flex-col items-center justify-center gap-3">
            <svg viewBox="0 0 60 150" className="w-16 opacity-25" fill="currentColor">
              <rect x="22" y="0" width="16" height="8" rx="2" />
              <rect x="14" y="8" width="32" height="130" rx="4" />
            </svg>
            <span className="text-xs tracking-widest uppercase opacity-40">Product Image</span>
          </div>
        )}
        {featured && (
          <div className="absolute top-4 left-4 bg-gold-400 text-bark-700 text-xs font-medium tracking-widest uppercase px-3 py-1">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className={`text-xs tracking-widest uppercase mb-2 ${featured ? "text-cream-300" : "text-olive-600"}`}>
          {subtitle}
        </div>
        <h3 className="font-serif text-xl mb-1">{name}</h3>
        <p className={`text-sm mb-6 ${featured ? "text-cream-300" : "text-bark-400"}`}>{volume}</p>
        <Link
          href={href}
          className={`mt-auto inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase border-b pb-0.5 transition-colors ${
            featured
              ? "text-gold-300 border-gold-500 hover:text-cream-50 hover:border-cream-50"
              : "text-olive-700 border-olive-400 hover:text-olive-900 hover:border-olive-700"
          }`}
        >
          View Details <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
