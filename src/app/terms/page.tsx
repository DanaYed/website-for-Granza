import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Granza Organic Olive Oil",
  description: "Terms and conditions governing the use of granzashop.com.",
};

export default function TermsPage() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="container-xl max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Legal</span>
          <h1 className="section-title text-4xl md:text-5xl mt-2">Terms of Use</h1>
          <div className="divider-left" />
          <p className="text-sm text-bark-400 mb-12">Last updated: January 2025</p>
        </AnimatedSection>

        <AnimatedSection className="prose-granza">

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>granzashop.com</strong> (the &ldquo;Site&rdquo;), you agree to be
            bound by these Terms of Use. If you do not agree, please do not use the Site.
            These terms apply to all visitors, customers, and others who access or use the Site.
          </p>

          <h2>2. About Granza</h2>
          <p>
            Granza sells premium organic extra virgin olive oil produced in Greece and distributed
            across Europe. All products are certified organic under GR-BIO-01 and comply with
            applicable EU food safety regulations.
          </p>

          <h2>3. Products and Pricing</h2>
          <p>
            All product descriptions, images, and specifications on this Site are provided in good
            faith and are as accurate as possible. We reserve the right to modify product details,
            availability, and pricing without prior notice. Prices are displayed inclusive of
            applicable VAT unless stated otherwise.
          </p>
          <p>
            In the event of a pricing error, we reserve the right to cancel an order and issue a
            full refund. We will notify you promptly in such cases.
          </p>

          <h2>4. Orders and Contract</h2>
          <p>
            Placing an order constitutes an offer to purchase. A binding contract is formed only
            upon our written order confirmation sent to the email address you provided. We reserve
            the right to refuse or cancel any order at our discretion.
          </p>

          <h2>5. Shipping and Delivery</h2>
          <p>
            We ship to the European Union and selected countries. Estimated delivery times are
            provided at checkout and are not guaranteed. We are not liable for delays caused by
            carriers, customs, or events outside our control. Risk of loss passes to you upon
            delivery to the specified address.
          </p>

          <h2>6. Returns and Refunds</h2>
          <p>
            In accordance with EU consumer rights law, you have the right to withdraw from a
            purchase within <strong>14 days</strong> of receiving your order, without giving a reason,
            provided the product is unopened and in its original condition.
          </p>
          <p>
            To initiate a return, contact us at{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a>. Return shipping
            costs are borne by the customer unless the product is faulty or incorrectly sent.
            Refunds are processed within 14 days of receiving the returned goods.
          </p>
          <p>
            Products that have been opened cannot be returned unless they are defective. If you
            receive a damaged or faulty product, contact us within 48 hours of delivery with
            photographic evidence.
          </p>

          <h2>7. Wholesale and Trade Orders</h2>
          <p>
            Wholesale enquiries are handled separately. Trade customers (restaurants, retailers,
            distributors) should contact us at{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a> before placing
            orders. Separate terms may apply to wholesale agreements.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this Site — including text, images, logos, and design — is the property
            of Granza or its licensors and is protected by copyright and trademark law. You may not
            reproduce, distribute, or use any content without our prior written permission.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Granza shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the Site or our products.
            Our total liability in connection with any order shall not exceed the value of that order.
          </p>
          <p>
            Nothing in these terms limits our liability for death or personal injury caused by our
            negligence, or for fraud or fraudulent misrepresentation.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Use are governed by and construed in accordance with the laws of the
            Czech Republic and applicable EU regulations. Any disputes shall be subject to the
            jurisdiction of the competent courts of the Czech Republic.
          </p>
          <p>
            EU consumers may also use the European Commission&apos;s Online Dispute Resolution
            platform:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Use at any time. The &ldquo;Last updated&rdquo;
            date at the top reflects the most recent revision. Continued use of the Site after
            changes are posted constitutes your acceptance of the updated terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            For any questions about these terms, contact us at:{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
