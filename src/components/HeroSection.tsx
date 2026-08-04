"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-100">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8845a' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-32">
        {/* Left: Copy */}
        <div>
          <AnimatedSection delay={0}>
            <span className="section-label">Product of Greece · Est. EI40692</span>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="section-title text-5xl md:text-6xl lg:text-7xl mt-2 text-balance">
              Nature&apos;s Finest,<br />
              <em className="text-olive-600 not-italic">Bottled.</em>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={220}>
            <div className="divider-left" />
            <p className="text-lg text-bark-500 leading-relaxed max-w-md">
              Crafted from organic olives grown on terraced mountain slopes,
              Granza Extra Virgin Olive Oil captures the golden essence of Greece
              — pure, vibrant, and extraordinary in every drop.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={340}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/products" className="btn-primary">
                Discover the Oil <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline">
                Our Story
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={440}>
            <div className="flex gap-10 mt-14 pt-10 border-t border-cream-300">
              {[
                { value: "500ml", label: "Bottle Size" },
                { value: "GR-BIO-01", label: "Certified Organic" },
                { value: "EI40692", label: "Greek Origin" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-xl font-semibold text-bark-700">{stat.value}</div>
                  <div className="text-xs tracking-widest uppercase text-bark-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right: Product image */}
        <AnimatedSection delay={200} direction="right" className="relative flex justify-center">
          <div className="relative">
            {/* Decorative circle */}
            <div className="absolute -inset-8 rounded-full border border-cream-300 opacity-60" />
            <div className="absolute -inset-16 rounded-full border border-cream-200 opacity-40" />

            {/* Product image area */}
            <div className="relative w-72 lg:w-96 aspect-[1/2.5] rounded-sm overflow-hidden shadow-2xl bg-cream-100">
              <Image
                src="/images/bottle-product.jpg"
                alt="Granza Organic Extra Virgin Olive Oil 500ml"
                fill
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-1/4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-olive-500" />
              <span className="text-xs font-medium text-bark-600">100% Organic</span>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-olive-700 shadow-lg rounded-full px-4 py-2">
              <span className="text-xs font-medium text-cream-100">Extra Virgin</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bark-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-bark-300 animate-pulse" />
      </div>
    </section>
  );
}
