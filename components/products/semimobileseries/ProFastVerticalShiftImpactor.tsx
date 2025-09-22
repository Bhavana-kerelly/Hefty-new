"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Manufactured Sand Production (M-Sand)",
"Road Construction Aggregates",
"Asphalt Mix Production",
"Concrete Aggregate Shaping",
"Mining and Mineral Processing",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
<section
  className="relative min-h-[700px] text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/semimobileseries/PV1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center md:text-left space-y-6 pt-45 w-180 ml-0 pl-7">
    <h2 className="text-3xl md:text-4xl font-bold">
      PROFAST VERTICAL SHAFT IMPACTOR
    </h2>

    <p className="text-base text-gray-200">
      The Profast Vertical Shaft Impactor is engineered to deliver unmatched
      productivity and superior quality in aggregate shaping and sand production.
      Designed for rapid installation and mobility, it is the ideal solution for
      on-site projects requiring quick turnaround without compromising
      performance.
    </p>
  </div>
</section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12">
    
    {/* Left Heading */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] pt-15 pl-10">
        VERTICAL SHAFT IMPACTOR
      </h2>
    </div>

    {/* Right Box with Content */}
    <div className="md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-base text-black mb-4">
        A VSI is a high-speed crusher that uses a rock-on-rock or rock-on-steel crushing principle to produce precisely shaped aggregates and manufactured sand. It is widely used in the production of cubical aggregates for concrete, asphalt, and road construction.
      </p>
      <p className="text-base text-black">
        The Profast series VSI combines the benefits of mobile flexibility with the robustness of stationary plant performance. It ensures maximum output, reduced downtime, and exceptional particle shape, making it the go-to solution for high-specification project.
      </p>
    </div>

  </div>
</section>


       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Highlights
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
                  <h3 className="text-xl text-white font-semibold mb-2">Transportation between the sites is fast and easy with the help of fine adjustment hydraulic jacks.</h3> 
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Excellent process flexibility.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Minimum operating cost (OPEX).</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Application-specific options of 3 / 4 / 5 port rotors and Rock-on-Rock / Rock-on-Anvil design available.</h3>
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Stabilization during operation.</h3>
                  
                </div>
                
              </div>
            </div>
          </section>

     <section className="bg-[#f5f5f5] w-full py-12 md:py-20 flex justify-center">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 px-6">
    
    {/* Left Heading */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] pt-20 pl-15">
        TECHNICAL ADVANTAGES
      </h2>
    </div>

    {/* Right Box with List */}
    <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
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