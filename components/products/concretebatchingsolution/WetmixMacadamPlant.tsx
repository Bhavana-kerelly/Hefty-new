"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

export default function RollCrusher() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/concrete/W1.png" // make sure to place the image in /public folder
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Wet Mix Macadam Plant?
            </h2>
            <p className='text-base text-gray-700'>
            A Wet Mix Macadam (WMM) Plant is a specialized system used in road construction to produce a high-quality, mechanically stabilized layer of aggregate mixed with water and binding agents (such as cement) in precise proportions. Unlike dry mix methods, the wet mix process ensures uniform coating and compaction of aggregates, improving road strength, durability, and load-bearing capacity.
            </p>
            <p className='text-base text-gray-700'>
            Hefty’s Wet Mix Macadam Plants are engineered for high performance, providing reliable, efficient, and consistent production of stabilized macadam suitable for highways, urban roads, and heavy-duty industrial pavements.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li> Consistent Material Blending </li>
              <li>High Production Capacity</li>
              <li>Fully Automated Control System</li>
              <li>Mobile & Stationary Options</li>
              <li>Energy-Efficient Design</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
