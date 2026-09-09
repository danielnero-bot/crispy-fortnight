import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const policySections = [
  {
    title: "1. Information We Collect",
    body:
      "We collect personal information necessary to support a safe, effective, and caring school environment. This may include student and parent contact details, academic records, medical information, emergency contact information, communication preferences, and records related to admissions, attendance, and school activities.",
  },
  {
    title: "2. How We Use Information",
    body:
      "The information we collect is used to support admissions, classroom instruction, pastoral care, communication with families, compliance with regulatory requirements, security and safeguarding, and the operation of school events and services. We may also use it to maintain academic records and improve the quality of our educational experience.",
  },
  {
    title: "3. Sharing and Disclosure",
    body:
      "We do not sell personal information. We may share information with trusted service providers, regulatory authorities, or third parties where necessary to support school operations, health and safety, legal compliance, or safeguarding responsibilities. Any sharing is done in a responsible and limited manner consistent with applicable data protection laws.",
  },
  {
    title: "4. Data Security",
    body:
      "We implement reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, use, alteration, or disclosure. While no system can be guaranteed to be completely secure, we strive to maintain appropriate protections for the data entrusted to us.",
  },
  {
    title: "5. Your Rights",
    body:
      "Parents, guardians, and students may request access to personal information held by the school, ask for corrections to inaccurate information, or raise concerns about how data is being processed. We will respond in line with applicable privacy laws and school procedures.",
  },
  {
    title: "6. Cookies and Website Usage",
    body:
      "Our website may use cookies or similar technologies to improve user experience, maintain session continuity, and understand how visitors interact with our site. You can adjust your browser settings to manage cookies, although some site features may be affected.",
  },
  {
    title: "7. Changes to This Policy",
    body:
      "We may update this Privacy Policy from time to time to reflect changes in law, practice, or school operations. The latest version will be posted on this page with the date of revision.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-outline/20 bg-surface-container-high p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Privacy policy
            </p>
            <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              How we protect your information
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
              This Privacy Policy explains how Archdeacon Crowther Memorial Girls&apos; School (ACMGS)
              handles personal information in connection with its educational services, admissions,
              communication, and school website.
            </p>
            <p className="mt-4 text-sm text-on-surface-variant">
              Last updated: September 2026
            </p>
          </div>

          <div className="space-y-6">
            {policySections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-outline/20 bg-white/60 p-6 shadow-sm"
              >
                <h2 className="font-display text-xl font-semibold text-primary sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-on-surface-variant">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h2 className="font-display text-xl font-semibold text-primary">
              Contact us
            </h2>
            <p className="mt-3 text-base leading-7 text-on-surface-variant">
              If you have questions about this policy or how your information is handled, please contact
              the school administration through the official channels provided on our website or campus.
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-on-primary transition-colors hover:bg-primary/90"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
