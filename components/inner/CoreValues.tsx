import React from "react";

export default function CoreValuesSection() {
  return (
    <section className="bg-[#ec6b24] text-white px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Section */}
        <div>
          <h4 className="uppercase text-xs sm:text-sm font-semibold underline underline-offset-4 mb-3 sm:mb-4">
            Core Values
          </h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight mb-4">
            Hefty – <br />
            <span className="text-gray-700">Powering Productivity</span> <br />
            <span className="text-white">With Precision Crushing</span> <br />
            <span className="text-gray-700">& Screening</span>
          </h2>

          <p className="text-gray-900 text-sm sm:text-base">
            At Hefty, we understand that a crusher isn’t just a machine – it’s
            the heart of your operation. That’s why our crushers are built with
            a commitment to engineering excellence, operational reliability, and
            long-term value.
          </p>

          <button className="border border-blue-900 text-white px-5 sm:px-6 py-2 sm:py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5 text-sm sm:text-base">
            <span className="text-blue-900">&#8213;</span> Get In Touch
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-5 sm:space-y-6">
          {[
            {
              title: "Quality First",
              text: "We never compromise on quality. Every product is rigorously tested to ensure it meets the highest standards of performance and safety.",
            },
            {
              title: "Innovation",
              text: "We believe in pushing boundaries — introducing smarter, more efficient, and sustainable solutions that redefine industry possibilities.",
            },
            {
              title: "Integrity",
              text: "We conduct business with honesty, transparency, and respect, building trust with clients, partners, and employees alike.",
            },
            {
              title: "Customer-Centric Approach",
              text: "Our clients are at the heart of everything we do. We listen, adapt, and go the extra mile to ensure their satisfaction.",
            },
            {
              title: "Sustainability",
              text: "We are committed to designing eco-friendly solutions that minimize environmental impact and promote long-term resource efficiency.",
            },
          ].map((value, idx) => (
            <div key={idx} className="border border-gray-700 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
