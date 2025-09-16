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
                src="/crushers/VS1.png" 
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
             VIBRATING SCREEN
            </h2>
            <p className='text-base text-gray-700'>
            Hefty Vibrating Screens area methodical multi-tier screening system suited for bigger, medium and ﬁne-sized separation applications. The vibrating screen is designed with longer wear life, easy maintenance and lower noise levels to address all of the challenges in the environment and to improve function.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>Excellent performance with high volume and high detailed screening </li>
<li>The slope inclination can be altered to ﬁt any type of material or application</li>
<li>Interconnected levels provide higher torque & reliable suspension</li>
<li>Regulated Stroke adjustment and greased lubrication</li>
<li>Wearing & frequent maintenance reduces downtime and operating costs.</li>
            </ol>
            
          </div>
        </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
