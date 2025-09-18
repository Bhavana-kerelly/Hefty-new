"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function RollCrusher() {
  return (
    <>

<section
  className="relative min-h-[500px] flex items-center justify-start text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/crushers/S1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl text-left space-y-6">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#ec6b24] leading-tight">
      SAND WASHING UNIT
    </h2>

    <p className="text-base text-gray-200">
      Sand Washer improves material quality and the versatility of sand,
      making it suitable for multiple applications. Advanced technology
      integrated with the innovative bucket wheel design results in seamless
      and streamlined sand washing.
    </p>

    <div>
      <h3 className="text-xl font-semibold text-white mb-3">
        Product Highlights:
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-base text-gray-200">
        <li>Heavy-duty construction to accommodate large volumes of feeds</li>
        <li>
          Speed reduction through Planetary gears increases torque making
          maintenance easy
        </li>
        <li>
          VFD-controlled bucket wheel calibrations adjust the level of finesse
          in the output as per requirement
        </li>
        <li>Erosion-resistant Spiral Wheels lined with Hardox Wear plates</li>
        <li>
          Anti-corrosive and anti-rust protection coating for the water trough
        </li>
      </ul>
    </div>
  </div>
</section>


     <ContactSection />
    
      
    </>
  );
}
