import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality — Granza Organic Olive Oil",
  description:
    "How Granza guarantees extraordinary quality — from certified organic groves to cold extraction and rigorous testing.",
};

const steps = [
  {
    step: "01",
    title: "Grove Selection",
    body: "We work exclusively with certified organic growers whose mountain-elevation groves meet our strict soil health, biodiversity, and farming practice standards. Each grove is visited and assessed personally.",
  },
  {
    step: "02",
    title: "Hand Harvest",
    body: "Olives are harvested by hand at the precise moment of peak ripeness — not underripe for higher polyphenols, not overripe for softer flavor. Mechanical shaking is never used.",
  },
  {
    step: "03",
    title: "Same-Day Pressing",
    body: "Olives are transported immediately and cold-pressed within hours of picking. Every hour between harvest and press is a risk to flavor. We take no shortcuts.",
  },
  {
    step: "04",
    title: "Cold Extraction",
    body: "We press at temperatures strictly below 27°C, using mechanical means only. No solvents, no centrifuges beyond the first pass — just pressure and gravity.",
  },
  {
    step: "05",
    title: "Laboratory Testing",
    body: "Every batch is laboratory-tested for free acidity, peroxide value, UV absorption, and polyphenol content before release. We only bottle what exceeds Extra Virgin standards.",
  },
  {
    step: "06",
    title: "Bottled for Freshness",
    body: "Oil is bottled in dark glass to protect against UV light oxidation, sealed immediately, and stored at controlled temperature until it reaches you.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question:
      "What makes Granza Extra Virgin rather than just Olive Oil?",
    answer:
      "Extra Virgin is the highest grade of olive oil, defined by free acidity below 0.8% and a clean, natural flavor with no defects. It must be produced by mechanical means only — no chemicals, no heat. Granza consistently achieves acidity levels well below that threshold.",
  },
  {
    question: "What does 'cold extracted' actually mean?",
    answer:
      "Cold extraction means the olives are pressed at temperatures below 27°C (80°F). Higher temperatures increase yield but degrade the delicate polyphenols and flavor compounds that make premium olive oil extraordinary. We prioritize quality over quantity.",
  },
  {
    question:
      "Why is organic certification important for olive oil?",
    answer:
      "Conventional olive farming often uses synthetic pesticides and herbicides. Because the oil is a fat-soluble extract, any residue in the fruit concentrates in the oil. Certified organic farming eliminates that risk entirely and benefits the soil microbiome that underpins grove health for generations.",
  },
  {
    question: "How should I store Granza olive oil?",
    answer:
      "Store in a cool, dry place away from heat sources and direct sunlight. The dark glass bottle protects against UV degradation. An open bottle is best used within 4–6 weeks for peak flavor, though it remains safe to consume until the best-before date.",
  },
  {
    question: "What is the best use for extra virgin olive oil?",
    answer:
      "Extra virgin olive oil excels as a finishing oil — drizzled over salads, pasta, grilled fish, or sourdough. It is also excellent for medium-heat cooking. Its smoke point of approximately 190–215°C makes it suitable for most everyday cooking, not just cold applications.",
  },
  {
    question:
      "Is Granza available for wholesale or restaurant supply?",
    answer:
      "Yes. We work with restaurants, specialty food retailers, and distributors. Please contact us via the Contact page or email wholesale@granzashop.com and we will respond within 2 business days.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        {/* Full-bleed background — olive branches */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1600&q=80"
            alt="Close-up of olive branches"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-olive-900/70" />
        </div>
        <div className="relative z-10 container-xl pb-24">
          <AnimatedSection className="max-w-2xl text-cream-50">
            <span className="section-label text-olive-300">Our Standards</span>
            <h1 className="section-title text-5xl md:text-6xl mt-2 text-cream-50">
              Quality is not a label.
              <br />
              <em className="not-italic text-gold-300">
                It&apos;s a discipline.
              </em>
            </h1>
            <div className="divider-left" />
            <p className="text-olive-200 text-lg leading-relaxed max-w-xl">
              Six steps. Zero compromises. From the moment an olive is picked to
              the moment you open a Granza bottle, quality is the only decision
              that matters.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">The Process</span>
            <h2 className="section-title mt-2">
              From grove to bottle — every step counts.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-200">
            {steps.map((s, i) => (
              <AnimatedSection
                key={s.step}
                delay={i * 70}
                className="bg-white p-10 hover:bg-cream-50 transition-colors duration-300"
              >
                <div className="font-serif text-5xl text-cream-300 leading-none mb-6">
                  {s.step}
                </div>
                <h3 className="font-serif text-xl text-bark-700 mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-bark-500 leading-relaxed">{s.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Harvest photo strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 h-48 lg:h-64 overflow-hidden">
        {[
          {
            src: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
            alt: "Green olives on the branch",
          },
          {
            src: "/images/lifestyle-3.jpg",
            alt: "Granza bottles in natural setting",
          },
          {
            src: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&q=80",
            alt: "Olive harvest",
          },
          {
            src: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=600&q=80",
            alt: "Olive oil being poured",
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
      </section>

      {/* Certifications */}
      <section className="py-24 bg-cream-50">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="section-label">Certifications</span>
            <h2 className="section-title text-4xl mt-2">
              Third-party verified.
              <br />
              Independently certified.
            </h2>
            <div className="divider-left" />
            <div className="space-y-6 text-bark-500">
              <p className="leading-relaxed">
                Trust should be earned, not assumed. Granza holds and maintains
                the following certifications, renewed annually through independent
                third-party inspection bodies.
              </p>
              <div className="space-y-4">
                {[
                  {
                    cert: "GR-BIO-01",
                    description:
                      "Greek Organic Certification — issued under EU organic regulation, confirming the entire production chain from grove to bottle meets certified organic standards.",
                  },
                  {
                    cert: "EI40692",
                    description:
                      "Greek Ministry of Rural Development registration confirming product origin and traceability as a Product of Greece.",
                  },
                  {
                    cert: "Extra Virgin Grade",
                    description:
                      "Independently laboratory-tested free acidity and sensory evaluation confirming Extra Virgin classification for every batch released.",
                  },
                ].map((item) => (
                  <div key={item.cert} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-olive-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-olive-500" />
                    </div>
                    <div>
                      <div className="font-medium text-bark-700 text-sm">
                        {item.cert}
                      </div>
                      <div className="text-sm mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            className="space-y-4"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Granza bottle quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559181567-c3190100191b?w=800&q=80"
                alt="Premium olive oil drizzle"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Common Questions</span>
            <h2 className="section-title mt-2">Everything you need to know.</h2>
          </AnimatedSection>
          <AnimatedSection>
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        dark
        label="Experience It Yourself"
        title="The finest proof is in the tasting."
        primaryCTA={{ label: "Shop Granza", href: "/products" }}
        secondaryCTA={{ label: "Our Story", href: "/about" }}
      />
    </>
  );
}
