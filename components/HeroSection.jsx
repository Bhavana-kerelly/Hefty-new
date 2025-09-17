"use client";

import React, { useEffect, useState, Fragment } from "react";
import {
  FaBolt,
  FaBullseye,
  FaTachometerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function HeroSection() {
  const features = [
    { icon: <FaBolt size={40} className="text-white" />, title: "Power" },
    { icon: <FaBullseye size={40} className="text-white" />, title: "Precision" },
    { icon: <FaTachometerAlt size={40} className="text-white" />, title: "Performance" },
  ];

  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide (fixed interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full text-white py-16 sm:py-20 px-4 sm:px-6 items-center min-h-[500px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#ec6b24] transition-colors z-10"
      >
        <FaChevronLeft size={30} className="sm:size-40" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#ec6b24] transition-colors z-10"
      >
        <FaChevronRight size={30} className="sm:size-40" />
      </button>

      {/* Heading */}
      <div className="max-w-full text-center">
        <h1 className="font-serif text-2xl sm:text-4xl text-[#ec6b24] font-bold leading-tight mb-6">
          Hyderabad’s Leading Certified Company
          <br className="hidden sm:block" />
          For Crushing Equipment
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-lg text-center md:text-left mx-auto md:ml-14 px-2">
        <p className="text-sm mb-4 sm:mb-5 text-white">
          Crushing and screening play a crucial role in driving productivity for
          both mining and construction industries. In these fast-paced sectors,
          speed, efficiency, and precision in processing materials can make all
          the difference in quality and output.
        </p>
        <p className="text-sm mb-4 sm:mb-6 text-white">
          That’s why customers across the nation trust Hefty to deliver
          innovative, technologically advanced, and cost-effective crushing and
          screening solutions tailored to their needs.
        </p>
        <p className="text-base sm:text-xl mb-6 sm:mb-7 text-gray-300">
          <span className="text-[#ec6b24]">Hefty</span> – Powering Productivity
          with Precision Crushing & Screening
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 sm:gap-10 py-8 sm:py-10 px-2 sm:px-4 rounded-lg mx-auto md:ml-10">
        {features.map((feature, index) => (
          <Fragment key={index}>
            <div className="flex items-center text-white gap-3 sm:gap-4">
              <div>{feature.icon}</div>
              <p className="text-sm sm:text-base">{feature.title}</p>
            </div>

            {/* Divider */}
            {index < features.length - 1 && (
              <>
                <div className="hidden md:block h-10 border-l border-gray-700 mx-4" />
                <div className="block md:hidden w-full border-t border-gray-700 my-4" />
              </>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
