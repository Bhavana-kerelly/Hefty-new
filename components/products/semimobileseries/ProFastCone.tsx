"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const steps = [
  "Quarrying & Mining",
  "Aggregate Production",
  "Concrete & Asphalt Recycling",
  "Road Construction Projects",
  "Infrastructure Development"
];

export default function AIChatbotFinancing() {
  return (
    <>
      <div className="w-full h-[300px] md:h-[700px]">
  <img
    src="/semimobileseries/C1.png"
    alt="Sand Washing Unit"
    className="w-full h-[700px] object-cover"
  />
</div>
      


      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
  <div className="max-w-4xl w-full">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-8 text-center">
      SEMI MOBILE CONE CRUSHER
    </h2>

    {/* Content Box */}
    <div className="bg-gray-50 p-8 rounded-lg shadow-md space-y-4">
      <p className="text-base text-black">
        The Profast Cone Crusher Series is engineered for rapid deployment, high
        production efficiency, and cost-effective crushing. Designed for both
        stationary and portable applications, this cone crusher offers the perfect
        balance between mobility, performance, and durability.
      </p>

      <p className="text-base text-black">
        Its innovative design ensures quick setup and relocation, making it ideal
        for projects that require frequent movement without compromising on
        quality. The Profast Cone excels in delivering high-quality aggregates
        with consistent shape and gradation — essential for concrete, asphalt, and
        road base production.
      </p>
    </div>
  </div>
</section>


       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features
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
                  <h3 className="text-xl text-white font-semibold mb-2">1.Quick Setup & Mobility</h3> 
                  <ol className="text-sm text-white mb-2">
                    <li>Designed for fast transportation and installation.</li>
                    <li>Ideal for short-term contracts or multi-site operations.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">2.High Crushing Efficiency</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Optimized chamber geometry and speed for maximum throughput.</li>
                    <li>Maintains consistent product shape even with varying feed conditions.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">3.Heavy-Duty Build</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Rugged frame and components for extended service life.</li>
                    <li>Can withstand the demands of hard and abrasive materials.</li>
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">4.Energy-Efficient Operation</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Lower fuel consumption without compromising productivity.</li>
                    
                  </ol>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">5.User-Friendly Controls</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Intuitive interface for easy operation and monitoring.</li>
                    <li>Equipped with advanced safety interlocks for operator protection.</li>
                  </ol>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">6.Low Maintenance Needs</h3>
                  <ol className="text-sm text-white mb-2">
                    <li>Easy access to wear parts for quick servicing.</li>
                    <li>Reduced downtime and maintenance costs.</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] w-full py-12 md:py-20 flex justify-center">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 px-6">
    {/* Left Heading */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] pt-20 pl-10">
        TECHNICAL ADVANTAGES
      </h2>
    </div>

    {/* Right Box */}
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



            {/* <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Profast Cone
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
      </section> */}
     

      <ContactSection />
      
    </>
  );
}