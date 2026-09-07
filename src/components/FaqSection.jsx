import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "How does admission work?",
    answer:
      "Admission requires an entrance examination and candidate interview.",
  },
  {
    question: "Where can forms be obtained?",
    answer:
      "Forms are obtained directly from the school administration or official portal.",
  },
  {
    question: "What school levels are available?",
    answer:
      "ACMGS offers Junior Secondary School from JSS1 to JSS3 and Senior Secondary School from SSS1 to SSS3.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-surface-container">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-lg border border-outline-variant/40 overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center min-h-[48px] focus:outline-none hover:bg-surface active:bg-surface-container transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <FaMinus
                      className="shrink-0 text-secondary text-sm"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaPlus
                      className="shrink-0 text-secondary text-sm"
                      aria-hidden="true"
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-4 sm:px-6 py-4 border-t border-outline-variant/30 bg-surface"
                  >
                    <p className="font-body text-sm sm:text-base leading-relaxed text-on-surface-variant">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
