"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Comprehensive Product Range",
    answer:
      "From jaw, cone, and impact crushers to track-mounted mobile units and integrated screening systems, Hefty offers solutions for every stage of your crushing and screening process. Our equipment is designed to handle diverse materials and applications, ensuring you find the perfect fit for your project.",
  },
  {
    question: "Proven Engineering Excellence",
    answer:
      "With years of industry expertise, our designs are backed by in-depth research, cutting-edge technology, and rigorous testing. We don’t just build machines — we craft solutions that consistently deliver high productivity, low downtime, and maximum efficiency.",
  },
  {
    question: "Nationwide Presence & Trust",
    answer:
      "Our machines operate successfully across varied terrains and industries nationwide. Customers in mining, construction, and infrastructure sectors trust Hefty for reliability, performance, and timely project delivery.",
  },
  {
    question: "Commitment to Quality & Safety",
    answer:
      "Every product is manufactured to meet the highest safety and durability standards. From robust materials to precision engineering, we ensure your operations run smoothly while prioritizing the safety of your team.",
  },
  {
    question: "Dedicated Service & Support",
    answer:
      "We believe in long-term partnerships. Our dedicated service network offers 24/7 assistance, spare parts availability, and on-site technical support to keep your operations running without interruption.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white flex flex-col items-center gap-10 sm:gap-12">
      
      <div className="w-full">
        <img
          src="/WhyChoose1.png"
          alt="Why Choose Hefty"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded"
        />
      </div>

      
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6 sm:mb-8">
          Why Choose Hefty
        </h2>

        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b ${
                index === activeIndex ? "border-[#ec6b24]" : "border-gray-300"
              } py-3 sm:py-4 cursor-pointer`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p
                  className={`font-semibold text-base sm:text-lg ${
                    index === activeIndex ? "text-[#ec6b24]" : "text-blue-900"
                  }`}
                >
                  {faq.question}
                </p>
                <span className="text-lg sm:text-xl ml-3 sm:ml-4">
                  {index === activeIndex ? "−" : "+"}
                </span>
              </div>
              {index === activeIndex && (
                <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
