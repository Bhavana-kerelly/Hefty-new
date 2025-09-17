"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function RollCrusher() {
  return (
    <>

<section
  className="relative min-h-[500px] flex items-center justify-center text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/crushers/VS1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center md:text-left space-y-6">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#ec6b24] leading-tight">
      VIBRATING SCREEN
    </h2>

    <p className="text-base text-gray-200">
      Hefty Vibrating Screens are a methodical multi-tier screening system suited
      for larger, medium, and fine-sized separation applications. The vibrating
      screen is designed with longer wear life, easy maintenance, and lower noise
      levels to handle environmental challenges while improving performance.
    </p>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">
        Product Highlights:
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-200 text-left">
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
