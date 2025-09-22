"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function RollCrusher() {
  return (
    <>
<div className="w-full h-[300px] md:h-[700px]">
  <img
    src="/crushers/VSI.jpg"
    alt="Vibrating Screen Banner"
    className="w-full h-[700px] object-cover"
  />
</div>

<section className="bg-white px-6 py-12 md:py-20 w-full flex justify-center">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
    {/* Left: Heading + Description */}
    <div className="space-y-6 pt-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ec6b24] leading-tight">
        VIBRATING SCREEN
      </h2>
      <p className="text-base text-gray-700 mt-10">
        Hefty Vibrating Screens are a methodical multi-tier screening system
        suited for larger, medium, and fine-sized separation applications. The
        vibrating screen is designed with longer wear life, easy maintenance,
        and lower noise levels to handle environmental challenges while
        improving performance.
      </p>
    </div>

    {/* Right: Product Highlights */}
    <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">
        Product Highlights:
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
        <li>Excellent performance with high volume and precision screening</li>
        <li>Slope inclination adjustable for any material or application</li>
        <li>Interconnected levels provide higher torque & reliable suspension</li>
        <li>Regulated stroke adjustment and greased lubrication</li>
        <li>Reduced downtime and operating costs with durable components</li>
      </ul>
    </div>

  </div>
</section>



     <ContactSection />
    
      
    </>
  );
}
