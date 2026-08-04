import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Droplets, Sun, Award, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Leaf size={20} />,
    title: "Certified Organic",
    description:
      "Every grove in our network holds GR-BIO-01 certification. No synthetic pesticides, no shortcuts — just the purity of nature.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Cold Extracted",
    description:
      "Pressed within hours of harvest at temperatures below 27°C, preserving the full spectrum of polyphenols and that signature golden hue.",
  },
  {
    icon: <Sun size={20} />,
    title: "Single Origin",
    description:
      "Our olives grow on terraced mountain slopes in Greece, where elevation, soil composition, and centuries of tradition converge.",
  },
  {
    icon: <Award size={20} />,
    title: "Extra Virgin Grade",
    description:
      "Strict quality control ensures every batch meets and exceeds the standards for Extra Virgin classification — every season, no exceptions.",
  },
];

const testimonials = [
  {
    quote:
      "The moment I opened the bottle I could smell the difference. Granza has completely changed how I cook — and how I think about olive oil.",
    name: "Sofia M.",
    role: "Home Chef, Athens",
    rating: 5,
  },
  {
    quote:
      "We serve Granza at the table as a finishing oil. Our guests always ask where it's from. Nothing else comes close for the price.",
    name: "Luca B.",
    role: "Restaurant Owner, Milan",
    rating: 5,
  },
  {
    quote:
      "I've tried dozens of olive oils from Greece and Spain. Granza stands apart — the flavor is vibrant, grassy, with just the right peppery finish.",
    name: "Claire T.",
    role: "Food Blogger, London",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Brand Statement */}
      <section className="py-24 bg-white">
        <div className="container-xl text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="section-label">The Granza Philosophy</span>
            <h2 className="section-title mt-2">
              Olive oil the way it was always meant to be.
            </h2>
            <div className="divider" />
            <p className="text-bark-500 text-lg leading-relaxed">
              In a world of mass production, Granza is a deliberate act of care.
              Every bottle begins with hand-selected organic olives, cold-extracted
              the same day they&apos;re picked, and bottled with nothing added —
              no blending, no refining, no compromise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-cream-50">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">What Sets Us Apart</span>
            <h2 className="section-title mt-2">
              Uncompromising quality,
              <br />
              from grove to bottle.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <FeatureCard {...f} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Image Strip — 3 real photos */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-3 h-72 lg:h-96">
          {[
            {
              src: "/images/lifestyle-1.jpg",
              alt: "Granza bottles arranged on stone",
            },
            {
              src: "/images/lifestyle-3.jpg",
              alt: "Granza olive oil bottles in Greek setting",
            },
            {
              src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
              alt: "Ripe olives on the branch",
            },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative h-[520px] overflow-hidden bg-cream-100">
                <Image
                  src="/images/bottle-product.jpg"
                  alt="Granza Extra Virgin Olive Oil"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="section-label">Signature Product</span>
              <h2 className="section-title mt-2">
                Extra Virgin
                <br />
                Olive Oil
              </h2>
              <div className="divider-left" />
              <p className="text-bark-500 leading-relaxed mb-6">
                Our flagship oil — rich, golden, alive with complexity. Pressed
                from organically-grown olives at peak ripeness, it carries notes
                of fresh cut grass, green almond, and a clean peppery finish that
                lingers just long enough.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "500ml dark glass bottle",
                  "Acidity: [to be added]",
                  "Olive variety: [to be added]",
                  "Harvest: [season to be added]",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-bark-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-olive-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/products" className="btn-primary">
                View Full Details <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-cream-50">
        <div className="container-xl">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label">Our Range</span>
              <h2 className="section-title mt-2">
                Crafted for
                <br />
                every table.
              </h2>
            </div>
            <Link href="/products" className="btn-ghost hidden md:inline-flex">
              All Products <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            <AnimatedSection delay={0}>
              <ProductCard
                name="Organic Extra Virgin"
                subtitle="Signature Collection"
                volume="500ml · Product of Greece"
                imageSrc="/images/bottle-product.jpg"
                featured
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <ProductCard
                name="Organic Extra Virgin"
                subtitle="Classic Collection"
                volume="500ml · Product of Greece"
                imageSrc="/images/bottle-group.jpg"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <ProductCard
                name="Gift Set [Coming Soon]"
                subtitle="Premium Gift"
                volume="2 × 500ml · Product of Greece"
                imageSrc="https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&q=80"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">What People Say</span>
            <h2 className="section-title mt-2">
              Taste that speaks
              <br />
              for itself.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Olive Branch Accent Section */}
      <section className="relative py-0 overflow-hidden h-64 lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1600&q=80"
          alt="Close-up of olive branches with ripe olives"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-900/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimatedSection className="text-center text-cream-50 px-6">
            <p className="font-serif text-2xl md:text-4xl italic">
              &ldquo;From ancient trees to your table —<br />
              nothing added, nothing taken away.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-24 bg-cream-100">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="section-label">Our Heritage</span>
            <h2 className="section-title mt-2">
              Rooted in the mountains of Greece.
            </h2>
            <div className="divider-left" />
            <p className="text-bark-500 leading-relaxed mb-8">
              Granza was born from a simple conviction: that the finest olive oil
              in the world grows on small, carefully tended groves — and deserves
              to reach tables beyond Greece. Every producer in our network shares
              our commitment to organic farming and small-scale, hand-harvested
              excellence.
            </p>
            <Link href="/about" className="btn-ghost">
              Read Our Story <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
          <AnimatedSection
            direction="right"
            className="relative h-96 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=900&q=80"
              alt="Terraced olive groves on Greek hillside"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        dark
        label="Start Your Journey"
        title="Experience the difference that real olive oil makes."
        subtitle="Pure, organic, cold-extracted from the mountain slopes of Greece."
        primaryCTA={{ label: "Shop Granza", href: "/products" }}
        secondaryCTA={{ label: "Learn More", href: "/quality" }}
      />
    </>
  );
}
