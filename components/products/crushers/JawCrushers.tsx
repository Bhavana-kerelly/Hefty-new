"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const steps = [
  "Mining & Quarrying: Crushing granite, basalt, and other hard rocks",
"Construction: Producing road base and concrete aggregates",
"Cement Industry: Processing limestone and other raw materials",
"Recycling: Crushing reinforced concrete, asphalt, and demolition waste",
"Metallurgy: Preparing ores for further processing",
];

export default function JawCrusher() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-[500px] flex items-center justify-center text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/crushers/J1.png')" }}
>
  {/* Overlay for dim effect */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="absolute top-40 left-10 max-w-2xl">
    <h2 className="text-3xl font-bold mb-5">
      The Power to Crush. The Strength to Last.
    </h2>
    <p className="text-base text-gray-200 mb-6">
      At Hefty, we engineer Jaw Crushers that deliver unmatched performance in
      primary crushing applications. Designed for heavy-duty operations, our
      machines are built to break down even the hardest and most abrasive
      materials into manageable sizes, ensuring smooth downstream processing.
    </p>
  </div>
</section>


      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Left Text Content */}
    <div className="text-gray-700">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
        JAW CRUSHER
      </h2>
      <p className="text-base mb-4">
        A Jaw Crusher is a primary crushing machine that reduces large rocks, ores, and minerals into smaller, uniform pieces by applying compressive force. The material is fed into a crushing chamber where two jaws—one fixed and one movable—apply pressure to break it down.
      </p>
      
    </div>

    {/* Right Points Box */}
    <div className="bg-[#f3f3f3] border border-gray-300 rounded-lg p-6 shadow-md">
      <ol className="list-decimal list-inside text-base text-gray-700 space-y-3">
        <li>High throughput capacity for faster production</li>
        <li>Exceptional durability in challenging environments</li>
        <li>Low operating costs with minimal maintenance requirements</li>
      </ol>
    </div>

  </div>
</section>


       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Product Highlights
                </h4>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Hefty –<br />
                  <span className="text-gray-700">Powering Productivity</span> <br />
                  <span className="text-white">With Precision Crushing</span>{" "}<br/>
                  <span className="text-gray-700">& Screening</span>
                </h2>
                
                <p className='text-gray-900 text-sm'>At Hefty, we understand that a crusher isn’t just a machine – it’s the heart of your operation. That’s why our crushers are built with a commitment to engineering excellence, operational reliability, and long-term value.</p><br/>
                <button className="border border-blue-900 text-white px-6 py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5">
                  <span className="text-blue-900">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy duty track unit with dual speed (optional) configuration.</h3>  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Four-point emergency stop. Detachable dog lead control system for marching.</h3>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Safety guards in compliance with machinery directives. Sturdy walkway with handrails, kick board and access ladders. </h3>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Radio remote control for marching (optional). Feed level sensor for crusher (optional).</h3>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Electrical driven hydraulic system for quick setup & marching. Low noise acoustic engine canopy with overload protection. </h3>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full flex justify-center">
              <div className="max-w-7xl tems-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
                    Applications of Hefty Jaw Crushers
                  </h2>
                  
                  <ul className="space-y-4">
                    {steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                        <CheckCircle className="text-blue-900 mt-1" size={20} />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
      
        
              </div>
            </section>

      <ContactSection />
      
    </>
  );
}