"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const faqs = [
  {
    q: "How long do projects take?",
    a: "Typical websites take 2-6 weeks depending on complexity. Simple landing pages can be ready in 2 weeks, while complex e-commerce or custom platforms may take 4-6 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    q: "Do you do design?",
    a: "Yes – UI/UX design is included in all our packages. We handle everything from wireframes to final mockups. Alternatively, if you already have a designer, we're happy to collaborate and bring their vision to life.",
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and headless CMS solutions like Strapi and Sanity. We always choose the best stack for your specific needs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely! We offer maintenance packages that include bug fixes, security updates, content updates, and performance monitoring. Your success is our priority even after launch.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer both fixed-price packages and custom quotes based on project scope. Every project starts with a free consultation where we discuss your needs and provide a transparent, detailed proposal.",
  },
  {
    q: "Can you help with SEO and marketing?",
    a: "Yes! We build all websites with SEO best practices from the ground up. We can also assist with Google Analytics setup, performance optimization, and connecting you with marketing partners.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-linear-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-brand-60 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            Got Questions?
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`group p-6 bg-white border-2 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer ${
                openIndex === i
                  ? "border-brand-60 shadow-xl scale-[1.02]"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className={`font-bold text-lg transition-colors ${
                        openIndex === i
                          ? "text-brand-60"
                          : "text-gray-900 group-hover:text-brand-60"
                      }`}
                    >
                      {f.q}
                    </h4>

                    <div
                      className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openIndex === i
                          ? "bg-brand-60 text-white rotate-180"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={openIndex === i ? faMinus : faPlus}
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i
                        ? "max-h-96 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
