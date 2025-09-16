"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Aggregates production",
"Mining and minerals",
"Construction and demolition waste recycling",
"Cement and asphalt production",
"Industrial material processing",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/impactors/HI1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
           <h2 className="text-3xl font-bold mb-5">
           Horizontal Shaft Impactor (HSI)
          </h2>
          <p className="text-base text-gray-200 mb-6">
         At Hefty, our Horizontal Shaft Impactors are engineered to deliver superior performance in crushing operations. Designed for high reduction ratios and exceptional product shaping, HSIs are ideal for a wide range of materials — from soft limestone to tough basalt.
          </p>
          <p className="text-base text-gray-200 mb-6">
        Built with robust construction and advanced technology, our HSIs ensure consistent product quality while reducing operational downtime. Whether you’re in mining, quarrying, or recycling applications, Hefty’s HSIs combine efficiency, reliability, and versatility to meet your crushing demands.
          </p>
          
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
        <div className="max-w-7xl text-center">
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
             Key Features
            </h2>
          <ol className="text-base text-black mb-6">
            <li>High Reduction Ratio – Achieves superior size reduction in a single pass.</li>
<li>Heavy-Duty Rotor Design – Delivers maximum energy transfer for efficient crushing.</li>
<li>Adjustable Curtain Liners – Ensures optimal product gradation and control.</li>
<li>Durable Construction – Built to withstand heavy-duty operations with minimal wear.</li>
<li>Low Maintenance Design – Easy access for inspection and replacement of wear parts.</li>
          </ol>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Hydraulic adjustable curtain design, easily removable and replaceable blow bars.</h3> 
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Large feed opening, maximum performance rotor.</h3>
               
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Hydraulic crusher housing, high reduction ratio.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Durable Construction, robust and reliable design.</h3>
                 
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Hydraulic arrangement maintains operating gap to ensure desired output size.</h3>
                  
                </div>
                
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full  flex justify-center">
              <div className="max-w-7xl text-center gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
                    Applications
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