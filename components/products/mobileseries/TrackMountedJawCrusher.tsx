"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "Large feed opening for big rock sizes",
  "High throughput for faster production cycles",
  "Hydraulic adjustment for quick changeovers",
  "Low maintenance requirements for reduced downtime",
  "Track-mounted design for full site mobility"
];

export default function TrackMountedJawCrusher() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-[700px] text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/mobileseries/J1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center md:text-left space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold pt-20 text-center">
      Powerful Crushing. Total Mobility.
    </h2>

    <p className="text-base text-gray-200">
      The Hefty Track Mounted Jaw Crusher is engineered to deliver high-capacity
      primary crushing with the freedom of on-site mobility. Designed for mining,
      quarrying, construction, and recycling applications, it combines robust
      performance with the flexibility to operate anywhere your project demands.
    </p>
  </div>
</section>


      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

    {/* Left: Heading */}
    <div className="md:col-span-4 flex items-start md:items-center">
      <h2 className="text-3xl md:text-3xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight pt-10 pl-5">
        TRACK MOUNTED <br/>JAW CRUSHER
      </h2>
    </div>

    {/* Right: Description box */}
    <div className="md:col-span-6 text-gray-700 text-base md:text-base space-y-4  ">
      <p>
        A Track Mounted Jaw Crusher is a mobile crushing solution where the crusher is mounted on heavy-duty tracks instead of wheels. This design allows the machine to move independently around the site, eliminating the need for additional transport equipment and reducing material handling costs.
      </p>
      <p>
        Hefty The Hefty Track Mounted Jaw Crusher is the perfect solution for projects that require quick relocation, easy setup, and high productivity without sacrificing crushing power.
      </p>
    </div>

  </div>
</section>

       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Features of the Hefty Track Mounted Jaw Crusher
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
                  <h3 className="text-xl text-white font-semibold mb-2"> High Mobility on Tracks</h3>  
                   <p className="text-sm text-white">
                    Equipped with heavy-duty crawler tracks, the crusher can navigate tough terrains such as rocky quarry floors, muddy construction sites, and uneven mining grounds with ease.
                  </p>
                </div>
               
                  
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Integrated Crushing System</h3>
                   <p className="text-sm text-white">
                    Features an efficient vibrating feeder, powerful jaw crusher, and discharge conveyor in one compact mobile unit—streamlining the entire crushing process.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Adjustable Output Size </h3>
                   <p className="text-sm text-white">
                    Hydraulic setting adjustments allow you to control the output size, making it ideal for different applications from coarse aggregates to smaller crushed material.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Fuel-Efficient Powertrain</h3>
                   <p className="text-sm text-white">
                   Designed for optimal performance with reduced fuel consumption, lowering your operational costs.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Build</h3>
                   <p className="text-sm text-white">
                    Built from reinforced steel with wear-resistant jaw plates for long-lasting durability, even in high-abrasion applications.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Quick Setup</h3>
                   <p className="text-sm text-white">
                    Operational within hours of arrival, minimizing downtime and maximizing productivity.
                  </p>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] flex justify-center py-12 md:py-20 w-full">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

    {/* Left: Heading */}
    <div className="md:col-span-4 flex items-start md:items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] pt-25 pl-7">
        ADVANTAGES
      </h2>
    </div>

    {/* Right: Points Box */}
    <div className="md:col-span-6 bg-white border border-gray-300 rounded-lg p-6 shadow space-y-4">
      <ul className="space-y-4">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
            <CheckCircle className="text-blue-900 mt-1" size={20} />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>


            {/* <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Track Mounted Jaw
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
      */}
      <ContactSection />
      
    </>
  );
}