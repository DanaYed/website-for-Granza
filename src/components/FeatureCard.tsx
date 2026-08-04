interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={`group flex flex-col items-start gap-4 p-8 bg-cream-50 hover:bg-white transition-colors duration-300 hover:shadow-md ${className}`}>
      <div className="w-12 h-12 rounded-full bg-olive-100 text-olive-600 flex items-center justify-center group-hover:bg-olive-600 group-hover:text-cream-50 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-xl text-bark-700 mb-2">{title}</h3>
        <p className="text-sm text-bark-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
