import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Granza Organic Olive Oil",
  description:
    "The story behind Granza — a commitment to organic farming, mountain-grown olives, and extraordinary extra virgin olive oil from Greece.",
};

const values = [
  {
    number: "01",
    title: "Organic Integrity",
    body: "We work exclusively with certified organic producers. Every grove in our network operates without synthetic inputs — because the purest oil starts with the purest land.",
  },
  {
    number: "02",
    title: "Small-Scale Excellence",
    body: "Industrial olive oil is a different product. Ours comes from small-scale growers who can give individual attention to each tree, each harvest, each bottle.",
  },
  {
    number: "03",
    title: "Cold Extraction Only",
    body: "Heat and chemical solvents destroy the delicate polyphenols and flavor compounds that make olive oil extraordinary. We press cold — always.",
  },
  {
    number: "04",
    title: "Transparent Sourcing",
    body: "We believe you should know where your food comes from. Granza traces every batch to its origin grove, harvest date, and producing family.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-cream-100 overflow-hidden">
        <div className="container-xl">
          <AnimatedSection className="max-w-2xl">
            <span className="section-label">Our Story</span>
            <h1 className="section-title text-5xl md:text-6xl mt-2">
              Grown with care.
              <br />
              <em className="not-italic text-olive-600">Bottled with purpose.</em>
            </h1>
            <div className="divider-left" />
            <p className="text-bark-500 text-lg leading-relaxed max-w-xl">
              Granza began with a question: why does olive oil from Greek mountain
              groves taste so extraordinary — and why is it so hard to find outside
              of Greece? We set out to change that.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Full-width hero image — terraced Greek olive grove */}
      <div className="relative h-[55vh] min-h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1600&q=80"
          alt="Terraced olive groves in Greece"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50/50 to-transparent" />
      </div>

      {/* Origin story */}
      <section className="py-24 bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <span className="section-label">The Origin</span>
            <h2 className="section-title text-4xl mt-2">
              Mountain slopes. Ancient trees. Extraordinary oil.
            </h2>
            <div className="divider-left" />
            <div className="space-y-4 text-bark-500 leading-relaxed">
              <p>
                The terraced hillsides of Greece have produced olive oil for
                thousands of years. The altitude, the mineral-rich soil, and the
                particular quality of Mediterranean light create conditions for
                olives — and the oil pressed from them — that simply cannot be
                replicated elsewhere.
              </p>
              <p>
                Granza works directly with a small network of organic producers
                who cultivate their groves using traditional methods: no heavy
                machinery, no synthetic fertilizers, no rush. Trees that have
                grown for generations are harvested by hand at peak ripeness.
              </p>
              <p>
                From that moment, we move quickly. The olives are cold-pressed
                within hours of picking, at temperatures that preserve every
                polyphenol and every subtle flavor note. The result is an oil of
                rare complexity and depth — a product of place as much as craft.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {/* Lifestyle photo 1 — bottles on stone */}
            <AnimatedSection
              direction="right"
              className="relative h-72 overflow-hidden"
            >
              <Image
                src="/images/lifestyle-1.jpg"
                alt="Granza bottles arranged on stone"
                fill
                className="object-cover"
              />
            </AnimatedSection>
            {/* Lifestyle photo 2 — bottles close-up */}
            <AnimatedSection
              direction="right"
              delay={100}
              className="relative h-56 overflow-hidden"
            >
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Granza bottle close-up"
                fill
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Harvest imagery */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-3 h-64 lg:h-80">
          {[
            {
              src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=700&q=80",
              alt: "Ripe green olives on the branch",
            },
            {
              src: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=700&q=80",
              alt: "Olive harvest in Greece",
            },
            {
              src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=700&q=80",
              alt: "Olive grove with sunlight through the trees",
            },
          ].map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${i === 2 ? "hidden lg:block" : ""}`}
            >
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

      {/* Values */}
      <section className="py-24 bg-cream-50">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title mt-2">
              Four commitments we never compromise.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-px bg-cream-200">
            {values.map((v, i) => (
              <AnimatedSection
                key={v.number}
                delay={i * 80}
                className="bg-white p-10"
              >
                <div className="font-serif text-5xl text-cream-300 leading-none mb-5">
                  {v.number}
                </div>
                <h3 className="font-serif text-xl text-bark-700 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-bark-500 leading-relaxed">{v.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Greece landscape full-bleed */}
      <section className="relative h-[45vh] min-h-64 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1600&q=80"
          alt="The Greek landscape — Aegean light over olive country"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-900/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <AnimatedSection className="text-center max-w-xl text-cream-50">
            <span className="section-label text-olive-300">
              Product of Greece
            </span>
            <p className="font-serif text-3xl md:text-4xl italic mt-3 leading-relaxed">
              &ldquo;A land that has been producing exceptional olive oil for
              more than 5,000 years.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 bg-olive-800 text-cream-50">
        <div className="container-xl max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="section-label text-olive-300">Our Mission</span>
            <blockquote className="font-serif text-3xl md:text-4xl italic leading-relaxed text-cream-100 mt-6">
              &ldquo;To bring the world&apos;s finest organic olive oil from the
              mountain groves of Greece to tables that deserve nothing less.&rdquo;
            </blockquote>
            <div className="divider mt-8" />
            <p className="text-olive-300 text-sm tracking-widest uppercase">
              The Granza Team
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        label="Ready to Taste the Difference?"
        title="Discover Granza Extra Virgin Olive Oil."
        primaryCTA={{ label: "Shop Now", href: "/products" }}
        secondaryCTA={{ label: "Our Quality Process", href: "/quality" }}
      />
    </>
  );
}
