"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';



const steps = [
  "High crushing ratio for superior quality output",
  "Consistent feed handling for steady production rates",
  "Overload protection systems to safeguard the crusher",
  "Quick setup and operational readiness within hours",
  "Low maintenance requirements for minimal downtime"
];

export default function TrackMountedConeCrusher() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-[700px] text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/mobileseries/C1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center md:text-left space-y-6 pt-30 ">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Precision Crushing. Mobile Freedom.
    </h2>

    <p className="text-base text-gray-200 text-center">
      The Hefty Track Mounted Cone Crusher is built to deliver high-quality
      secondary and tertiary crushing with the flexibility of full mobility.
      Designed for demanding applications in mining, quarrying, construction,
      and recycling, it offers superior particle shaping, adjustable output
      sizes, and consistent performance—anywhere your project takes you.
    </p>
  </div>
</section>


      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
    
    {/* Left Side - Heading */}
    <div className="md:w-1/3">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight pt-10">
        TRACK MOUNTED <br/> CONE CRUSHER
      </h2>
    </div>

    {/* Right Side - Content Box */}
    <div className="md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md text-gray-700 space-y-4">
      <p className="text-base">
        A Track Mounted Cone Crusher combines the advanced crushing technology of a cone crusher with the mobility of heavy-duty crawler tracks. This allows the unit to move seamlessly around your worksite and crush material directly at the source, reducing transportation costs and boosting efficiency.
      </p>
      <p className="text-base">
        Hefty The Hefty Track Mounted Cone Crusher is ideal for projects that require precision, portability, and fast setup times without compromising on crushing power.
      </p>
    </div>

  </div>
</section>


       <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                 Key Features of the Hefty Track Mounted Cone Crusher
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
                  <h3 className="text-xl text-white font-semibold mb-2">  On-Site Mobility with Crawler Tracks</h3>  
                   <p className="text-sm text-white">
                    Easily navigates rugged terrains, tight spaces, and remote project locations, eliminating the need for additional hauling equipment.
                  </p>
                </div>
               
                  
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Precision Particle Shaping</h3>
                   <p className="text-sm text-white">
                    Cone crushing technology ensures uniform, well-shaped aggregates—perfect for road construction, concrete production, and asphalt applications.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Adjustable Crushing Settings</h3>
                   <p className="text-sm text-white">
                    Hydraulic setting adjustments allow quick and precise control of output size to match different project requirements.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2"> Integrated Crushing & Screening Options</h3>
                   <p className="text-sm text-white">
                   Available with optional onboard screening units to produce multiple size fractions in a single pass.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Energy-Efficient Performance</h3>
                   <p className="text-sm text-white">
                   Designed with optimized power usage to lower fuel consumption and reduce operating costs without sacrificing output.
                  </p>
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy-Duty Durability</h3>
                   <p className="text-sm text-white">
                    Built from reinforced steel with wear-resistant liners, designed to withstand continuous use in abrasive environments.
                  </p>
                </div>
              </div>
            </div>
          </section>

      <section className="bg-[#f5f5f5] flex justify-center py-12 md:py-20 w-full">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
    
    {/* Left Column: Heading */}
    <div className="md:col-span-4 flex items-start md:items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] pt-25 pl-10">
        ADVANTAGES
      </h2>
    </div>

    {/* Right Column: Points Box */}
    <div className="md:col-span-8 bg-white border border-gray-300 rounded-lg p-6 shadow space-y-4">
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
        Types of Cone Crushers
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