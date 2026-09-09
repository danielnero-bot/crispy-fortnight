import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the ACMGS website, you agree to comply with these Terms and Conditions and any applicable laws and regulations. If you do not agree with any part of these terms, you should not use the website or school-related digital services.",
  },
  {
    title: "2. School Information and Use of Website",
    body: "This website is intended to provide information about the school, its programmes, admissions, updates, and community activities. The information supplied is for general informational purposes only and may be updated or revised without prior notice. Use of the website does not create a contractual relationship with the school unless specifically stated in a formal admissions or enrolment document.",
  },
  {
    title: "3. Admissions and Student Services",
    body: "The school may provide information about admissions, academic programmes, and support services through the website. Any application, enquiry, or registration process remains subject to the school’s admission criteria, available spaces, and official communication channels. The school reserves the right to accept, defer, or decline any application according to its rules and policies.",
  },
  {
    title: "4. Accuracy and Availability",
    body: "We strive to keep the website accurate, current, and accessible. However, we do not guarantee that all content will be error-free, complete, or available at all times. We may suspend, change, or discontinue any part of the website without notice, including access to forms, documents, or information pages.",
  },
  {
    title: "5. Intellectual Property",
    body: "All school content, branding, materials, images, text, graphics, and website design are protected by applicable intellectual property laws unless otherwise stated. You may not reproduce, distribute, or repurpose the content without prior written permission from the school.",
  },
  {
    title: "6. User Conduct",
    body: "Users must not post or transmit content that is unlawful, abusive, defamatory, threatening, misleading, or harmful to others. Any attempt to interfere with the website’s operation, security, or integrity is prohibited.",
  },
  {
    title: "7. Limitation of Liability",
    body: "ACMGS will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this website or reliance on information provided through it, including interruption of service, loss of data, or errors in content.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any dispute arising in relation to the use of this website shall be subject to the jurisdiction of the courts of Rivers State, Nigeria, where applicable.",
  },
  {
    title: "9. Updates to These Terms",
    body: "The school may revise these Terms and Conditions at any time. Continued use of this website after any update means you accept the revised terms. The latest version will be posted with the date of revision.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased">
      <Navbar />

      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-outline/20 bg-surface-container-high p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Terms and conditions
            </p>
            <h1 className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              Website terms for visitors and families
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
              These Terms and Conditions govern the use of the ACMGS website and
              related online information channels. By using this website, you
              agree to the terms outlined below.
            </p>
            <p className="mt-4 text-sm text-on-surface-variant">
              Last updated: September 2026
            </p>
          </div>

          <div className="space-y-6">
            {termsSections.map((section) => (
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
              Questions or concerns?
            </h2>
            <p className="mt-3 text-base leading-7 text-on-surface-variant">
              For any clarifications regarding these terms, please contact the
              school administration using the official contact information
              available on the website.
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-on-primary transition-colors hover:bg-primary/90"
              >
                Return home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
