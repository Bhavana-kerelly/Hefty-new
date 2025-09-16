"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [
    { name: "M-30", link: "#products/concretebatchingsolution/M-30" },
    { name: "M-45", link: "#products/concretebatchingsolution/M-45" },
    { name: "M-60", link: "#products/concretebatchingsolution/M-60" },
    { name: "M-120", link: "#products/concretebatchingsolution/M-120" },

  ];

export default function RollCrusher() {
  return (
    <>

<section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/concrete/CBS1.png" // make sure to place the image in /public folder
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
             Concrete Batching Plant 
            </h2>
            <p className='text-base text-gray-700'>
            A Concrete Batching Plant is a specialized system that automates the process of measuring, mixing, and producing concrete in precise proportions. It combines essential raw materials — cement, water, aggregates (sand, gravel, crushed stone), and chemical additives — into high-quality concrete suitable for construction and mining applications.
            </p>
            <p className='text-base text-gray-700'>
            By automating material handling, weighing, and mixing, a concrete batching plant ensures consistent concrete quality, faster production, and reduced human error. Hefty offers both stationary and mobile batching plant solutions, designed for flexibility across different job sites, enabling efficient production in urban or remote environments.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>High Precision Weighing System</li>
              <li>Fully Automated Operation </li>
              <li>Customizable Configurations</li>
              <li>High Throughput Capacity</li>
              <li>Energy-Efficient Design</li>
            </ol>
            
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200 text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Concrete Batching Plant
      </h2>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border border-blue-900 rounded-md py-6 px-4 flex items-center justify-center hover:bg-[#ec6b24] transition text-sm font-medium text-center"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
      </section>

     <ContactSection />
    
      
    </>
  );
}
