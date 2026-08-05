import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — Granza Organic Olive Oil",
  description:
    "Granza Organic Extra Virgin Olive Oil — 500ml. Cold-extracted from hand-harvested Greek olives. Certified GR-BIO-01.",
};

const nutritionFacts = [
  { name: "Total Fat", value: "13.7g", dv: "8%" },
  { name: "Saturated Fat", value: "1.8g", dv: "11%" },
  { name: "Trans Fat", value: "0g", dv: "" },
  { name: "Polyunsaturated Fat", value: "1.5g", dv: "" },
  { name: "Monounsaturated Fat", value: "10.3g", dv: "" },
  { name: "Cholesterol", value: "0g", dv: "0%" },
  { name: "Sodium", value: "0g", dv: "0%" },
  { name: "Total Carbohydrate", value: "0g", dv: "0%" },
  { name: "Protein", value: "0g", dv: "0%" },
];

const highlights = [
  "Certified Organic — GR-BIO-01",
  "Extra Virgin grade — first cold press",
  "Hand-harvested olives",
  "500ml dark glass bottle",
  "Product of Greece — EI40692",
  "No additives, no blending",
  "Acidity: [to be confirmed]",
  "Olive variety: [to be confirmed]",
  "Harvest season: [to be confirmed]",
  "Best before: printed on bottle",
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-cream-100">
        <div className="container-xl">
          <AnimatedSection>
            <span className="section-label">Our Products</span>
            <h1 className="section-title text-5xl md:text-6xl mt-2">
              One oil.
              <br />
              <em className="not-italic text-olive-600">Extraordinary.</em>
            </h1>
            <div className="divider-left" />
            <p className="text-bark-500 text-lg leading-relaxed max-w-xl">
              We make one thing and we make it exceptionally well — organic extra
              virgin olive oil from the mountain groves of Greece.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Product */}
      <section className="py-24 bg-white">
        <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
          {/* Product images */}
          <AnimatedSection direction="left" className="grid grid-cols-2 gap-3">
            {/* Main bottle shot */}
            <div className="relative h-[440px] col-span-1 overflow-hidden bg-cream-100">
              <Image
                src="/images/bottle-product.jpg"
                alt="Granza bottle — front"
                fill
                className="object-contain p-4"
              />
            </div>
            {/* Label shots */}
            <div className="col-span-1 space-y-3">
              <div className="relative h-[214px] overflow-hidden bg-cream-50">
                <Image
                  src="/images/label-front.png"
                  alt="Granza label — front"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[214px] overflow-hidden bg-cream-50">
                <Image
                  src="/images/label-back.png"
                  alt="Granza label — back (nutrition facts)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection direction="right">
            <span className="section-label">Signature Collection</span>
            <h2 className="section-title text-4xl mt-2">
              Organic Extra Virgin
              <br />
              Olive Oil
            </h2>
            <p className="text-bark-500 text-4xl font-serif mt-2">500ml</p>
            <div className="divider-left" />
            <p className="text-bark-500 leading-relaxed mb-8">
              This exceptional olive oil is crafted from organic olives,
              hand-harvested by producers dedicated to small-scale organic farming
              on terraced mountain slopes. It stands out for its brilliant golden
              hue and vibrant, well-rounded taste. Store in a cool, dry place away
              from heat and direct sunlight.
            </p>

            <ul className="space-y-2.5 mb-10">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-bark-500"
                >
                  <CheckCircle
                    size={15}
                    className="text-olive-500 shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a href="mailto:hello@granzashop.com" className="btn-primary">
                Inquire to Order
              </a>
              <a
                href="mailto:wholesale@granzashop.com"
                className="btn-outline"
              >
                Wholesale
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full-bleed bottle group */}
      <section className="relative h-[50vh] min-h-64 overflow-hidden">
        <Image
          src="/images/bottle-group.jpg"
          alt="Multiple Granza bottles"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-900/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <AnimatedSection className="text-center text-cream-50 px-6">
            <p className="font-serif text-3xl md:text-5xl">
              Pure. Golden. Extraordinary.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Nutrition Facts */}
      <section className="py-24 bg-cream-50">
        <div className="container-xl grid lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection direction="left">
            <span className="section-label">Nutrition</span>
            <h2 className="section-title text-4xl mt-2">
              Nutritional Highlights
            </h2>
            <div className="divider-left" />
            <div className="space-y-4 text-bark-500 leading-relaxed">
              <p>
                Extra virgin olive oil is one of the most nutritionally rich
                cooking fats in the world. Granza&apos;s cold extraction process
                ensures none of the natural polyphenols, antioxidants, or vitamin E
                are lost during production.
              </p>
              <p>
                The high proportion of monounsaturated fatty acids — primarily
                oleic acid — makes it a cornerstone of the Mediterranean diet,
                associated with cardiovascular health and anti-inflammatory
                properties.
              </p>
            </div>
            {/* Olive dish lifestyle */}
            <div className="relative h-56 mt-8 overflow-hidden">
              <Image
                src="/images/olive-branch-moody.jpg"
                alt="Olives on the branch in warm natural light"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="border-2 border-bark-700 p-5 bg-white font-sans max-w-sm">
              <h3 className="font-extrabold text-2xl text-bark-700 border-b-4 border-bark-700 pb-1 mb-2">
                Nutrition Facts
              </h3>
              <p className="text-xs text-bark-600 mb-1">
                Serving size 1 tbsp (15 mL)
              </p>
              <p className="text-xs text-bark-600 mb-2">Amount per serving</p>
              <div className="flex items-baseline justify-between border-b-4 border-bark-700 pb-2 mb-2">
                <span className="font-extrabold text-2xl text-bark-700">
                  Calories
                </span>
                <span className="font-extrabold text-4xl text-bark-700">
                  123
                </span>
              </div>
              <p className="text-right text-xs text-bark-600 mb-1">
                % Daily Value*
              </p>
              <div className="divide-y divide-cream-300">
                {nutritionFacts.map((row) => (
                  <div
                    key={row.name}
                    className="flex justify-between py-0.5 text-xs"
                  >
                    <span
                      className={`text-bark-700 ${["Total Fat", "Cholesterol", "Sodium", "Total Carbohydrate", "Protein"].includes(row.name) ? "font-bold" : ""}`}
                    >
                      {row.name}
                    </span>
                    <span className="text-bark-600">
                      {row.value}
                      {row.dv ? (
                        <span className="ml-4 font-bold">{row.dv}</span>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-bark-400 mt-3 leading-snug">
                *% Daily Value (DV) tells you how much a nutrient in a serving of
                food contributes to a daily diet.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-24 bg-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Packaging</span>
            <h2 className="section-title mt-2">
              Designed to protect.
              <br />
              Made to impress.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {[
              {
                title: "Dark Glass",
                body: "Protects the oil from UV light degradation, preserving flavor and polyphenols through every drop.",
              },
              {
                title: "Sealed Freshness",
                body: "Each bottle is sealed and tested before leaving our facility to guarantee what you open is what was pressed.",
              },
              {
                title: "Minimal Design",
                body: "Clean, elegant labeling — because extraordinary oil deserves packaging that lets it speak for itself.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 80} className="p-8 bg-cream-50">
                <h3 className="font-serif text-xl text-bark-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-bark-500 leading-relaxed">
                  {item.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        label="Get Granza"
        title="Ready to elevate your table?"
        subtitle="Available for individual and wholesale orders. Reach out to discover current availability."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Our Quality Story", href: "/quality" }}
      />
    </>
  );
}
