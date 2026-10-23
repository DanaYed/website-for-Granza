import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Granza Organic Olive Oil",
  description: "How Granza collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="container-xl max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="section-label">Legal</span>
          <h1 className="section-title text-4xl md:text-5xl mt-2">Privacy Policy</h1>
          <div className="divider-left" />
          <p className="text-sm text-bark-400 mb-12">Last updated: January 2025</p>
        </AnimatedSection>

        <AnimatedSection className="prose-granza">

          <h2>1. Data Controller</h2>
          <p>
            Granza (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is the data controller responsible for your personal
            data collected through <strong>granzashop.com</strong>. For any data-related
            enquiries, contact us at{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a>.
          </p>

          <h2>2. What Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li><strong>Identity data</strong> — name, company name.</li>
            <li><strong>Contact data</strong> — email address, phone number, postal address.</li>
            <li><strong>Order data</strong> — products purchased, order history, billing and delivery details.</li>
            <li><strong>Communication data</strong> — messages you send us via the contact form or email.</li>
            <li><strong>Technical data</strong> — IP address, browser type, pages visited, time on site (via cookies and analytics).</li>
          </ul>
          <p>We do not collect sensitive personal data (e.g. health, political views, biometrics).</p>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>Processing and fulfilling your orders.</li>
            <li>Responding to enquiries and providing customer support.</li>
            <li>Sending transactional emails (order confirmation, shipping updates).</li>
            <li>Improving our website and user experience.</li>
            <li>Complying with legal obligations.</li>
          </ul>
          <p>
            We rely on the following legal bases under GDPR: <strong>contract performance</strong> (order
            processing), <strong>legitimate interests</strong> (website analytics, fraud prevention), and
            <strong> legal obligation</strong> (tax and accounting records).
          </p>

          <h2>4. Cookies</h2>
          <p>
            Our website uses cookies — small text files stored on your device. We use:
          </p>
          <ul>
            <li><strong>Essential cookies</strong> — necessary for the website to function.</li>
            <li><strong>Analytics cookies</strong> — to understand how visitors use our site (e.g. Google Analytics). Data is anonymised where possible.</li>
          </ul>
          <p>
            You may disable non-essential cookies through your browser settings. Disabling cookies
            may affect the functionality of the website.
          </p>

          <h2>5. Sharing Your Data</h2>
          <p>
            We do not sell your personal data. We may share it with trusted third parties only where
            necessary:
          </p>
          <ul>
            <li>Payment processors (for secure transaction handling).</li>
            <li>Shipping and logistics partners (to deliver your order).</li>
            <li>IT service providers hosting or supporting our website.</li>
            <li>Authorities, where required by law.</li>
          </ul>
          <p>All third parties are contractually required to protect your data.</p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purpose it was collected, or
            as required by law. Order records are kept for a minimum of 5 years for accounting
            purposes. Contact form messages are deleted after 12 months if no ongoing relationship exists.
          </p>

          <h2>7. Your Rights (GDPR)</h2>
          <p>Under the General Data Protection Regulation, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> — request a copy of the data we hold about you.</li>
            <li><strong>Rectification</strong> — ask us to correct inaccurate data.</li>
            <li><strong>Erasure</strong> — request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
            <li><strong>Restriction</strong> — ask us to limit how we process your data.</li>
            <li><strong>Portability</strong> — receive your data in a machine-readable format.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interests.</li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a>. We will respond
            within 30 days. You also have the right to lodge a complaint with your national data
            protection authority (in the Czech Republic: <strong>Úřad pro ochranu osobních údajů</strong>,{" "}
            <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">uoou.cz</a>).
          </p>

          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal
            data against unauthorised access, loss, or disclosure. All data is transmitted over
            encrypted HTTPS connections.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top
            reflects the most recent revision. Continued use of the website after changes constitutes
            acceptance of the updated policy.
          </p>

          <h2>10. Contact</h2>
          <p>
            For any questions about this policy or your data, contact us at:{" "}
            <a href="mailto:support@granzashop.com">support@granzashop.com</a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
