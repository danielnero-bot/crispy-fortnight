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
    <section className="py-[80px] bg-surface-container">
      <div className="max-w-3xl mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-container-lowest rounded border border-surface-dim overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-surface transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-headline-sm text-headline-sm text-[18px] text-primary">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <FaMinus
                      className="shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaPlus
                      className="shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 py-4 border-t border-surface-dim bg-surface"
                  >
                    <p className="font-body-md text-body-md text-on-surface-variant">
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
