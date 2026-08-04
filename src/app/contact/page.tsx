import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Granza Organic Olive Oil",
  description:
    "Get in touch with the Granza team for orders, wholesale inquiries, or product questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-cream-100">
        <div className="container-xl">
          <AnimatedSection className="max-w-xl">
            <span className="section-label">Get In Touch</span>
            <h1 className="section-title text-5xl md:text-6xl mt-2">
              We&apos;d love<br />to hear from you.
            </h1>
            <div className="divider-left" />
            <p className="text-bark-500 text-lg leading-relaxed">
              Whether you&apos;re curious about our oil, interested in wholesale
              supply, or simply want to share a recipe — our team is here.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          {/* Info column */}
          <div className="lg:col-span-1 space-y-10">
            <AnimatedSection direction="left">
              <h2 className="font-serif text-2xl text-bark-700 mb-6">Contact Details</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={18} />,
                    label: "Email",
                    value: "hello@granzashop.com",
                    href: "mailto:hello@granzashop.com",
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "Phone",
                    value: "[Phone number to be added]",
                    href: null,
                  },
                  {
                    icon: <MapPin size={18} />,
                    label: "Origin",
                    value: "Product of Greece — EI40692",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-olive-100 text-olive-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs tracking-widest uppercase text-bark-400 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-bark-700 hover:text-olive-700 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-bark-500">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={100}>
              <div className="p-6 bg-cream-100 border-l-2 border-olive-500">
                <h3 className="font-serif text-lg text-bark-700 mb-2">Wholesale Inquiries</h3>
                <p className="text-sm text-bark-500 leading-relaxed mb-3">
                  We supply restaurants, specialty retailers, and distributors.
                  For trade enquiries, please include your business name and
                  projected volume.
                </p>
                <a
                  href="mailto:wholesale@granzashop.com"
                  className="text-xs font-medium tracking-widest uppercase text-olive-700 border-b border-olive-400 pb-0.5 hover:text-olive-900 hover:border-olive-700 transition-colors"
                >
                  wholesale@granzashop.com
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={200}>
              <div className="p-6 bg-olive-800 text-cream-100">
                <div className="font-serif text-lg mb-2">granzashop.com</div>
                <p className="text-sm text-olive-300">
                  Certified Organic · GR-BIO-01<br />
                  Product of Greece · EI40692
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="right">
              <h2 className="font-serif text-2xl text-bark-700 mb-8">Send a Message</h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-cream-200 relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-bark-300 gap-2">
          <MapPin size={32} />
          <span className="text-xs tracking-widest uppercase opacity-60">Map placeholder — embed Google Maps here</span>
        </div>
      </section>
    </>
  );
}
