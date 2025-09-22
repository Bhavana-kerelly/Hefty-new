"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';

const industries = [
    { name: "CDH50", link: "#products/concretebatchingsolution/CDH50" },
    { name: "CDH70", link: "#products/concretebatchingsolution/CDH70" },
    

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
                src="/concrete/CP1.png" // make sure to place the image in /public folder
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
             Concrete Pump 
            </h2>
            <p className='text-base text-gray-700'>
           A Concrete Pump is a vital piece of construction equipment designed to transport liquid concrete from the batching plant to the desired location on-site. It uses hydraulic pressure to pump concrete through pipelines or hoses, allowing for fast, precise, and efficient placement of concrete even in hard-to-reach areas such as high-rise buildings, large slabs, and remote job sites
            </p>
            <p className='text-base text-gray-700'>
           Hefty offers both Boom Concrete Pumps and Line Concrete Pumps, ideal for a wide range of construction and mining applications, delivering high performance and reliability in challenging environments.
            </p>
            <p className="text-base text-gray-700">Product Highlights:</p>
            <ol className='text-base text-gray-700'>
              <li>High Pumping Pressure</li>
              <li>Robust Hydraulic System</li>
              <li>Mobile & Stationary Solutions</li>
              <li>Efficient & Fast Operation</li>
              <li> Durable & Heavy-Duty Build</li>
            </ol>
            
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200 text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Concrete Pumps
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
