"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';


const tableData = [
    ["SERIES", "UNIT", "TMV 200", "TMV 300"],
    ["Feed Opening Size (W x L)", "mm (inch)", "58 (2.3)", "66 (2.6)"],
    ["Rotor Speed", "m (sec)", "45-70", "45-75"],
    ["*Capacity", "TPH", "180 - 320", "250 - 470"],


  ];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section
  className="relative min-h-[700px] text-white bg-center bg-cover px-6"
  style={{ backgroundImage: "url('/mobileseries/V1.png')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto text-center md:text-left space-y-6 pt-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Unleash Precision & Power – Right Where You Need It
    </h2>

    <p className="text-base text-gray-200 text-center">
      The Hefty™ TMV Series Track Mounted Vertical Shaft Impactors are engineered
      for delivering unmatched precision in producing high-quality, cubical
      aggregates and manufactured sand (M-Sand). Built for on-site mobility and
      maximum efficiency, this powerhouse combines advanced crushing technology
      with the flexibility of track-mounted mobility – ensuring you can crush
      directly where your raw material lies.
    </p>

    <p className="text-base text-gray-200 text-center">
      Whether you’re in road construction, concrete production, or mineral
      processing, the TMV Series ensures consistent output, superior particle
      shape, and reduced downtime.
    </p>
  </div>
</section>


      {/* What We Finance */}
  <section className="w-full px-6 py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
    
    {/* Left Side - Heading */}
    <div className="md:w-1/3">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 hover:text-[#ec6b24] leading-tight pt-40 pl-10">
        SILENT FEATURES
      </h2>
    </div>

    {/* Right Side - Points Box */}
    <div className="md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-md">
      <ol className="list-decimal list-inside space-y-3 text-gray-700 text-base md:text-lg">
        <li>Dust Suppression System</li>
        <li>Light Mast (Opening Feature)</li>
        <li>Power Source with Acoustic Canopy</li>
        <li>Rotor Ports & Impact Cartridge options</li>
        <li>Feeding Control System</li>
        <li>Motorized Pulley</li>
        <li>Wireless Tracking Remote</li>
        <li>Dual Power Import</li>
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
                  <h3 className="text-xl text-white font-semibold mb-2">Heavy duty track unit with dual speed (optional) configuration.</h3>  
                   
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Safety guards in compliance with machinery directives. Sturdy walkway with handrails, kick board and access ladders.</h3>
                   
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Dual power mode – Flexibility to power the plant either by external electric connection or by on-board diesel generator power pack unit (optional).</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Four-point emergency stop. Detachable dog lead control system for marching.</h3>
                   
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Radio remote control for marching (optional).Metal detector. Electrical driven hydraulic system for quick setup & marching.</h3>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Low noise acoustic engine canopy with overload protection.</h3>
                   
                </div>
              </div>
            </div>
          </section>
        
        <div className="p-4 mt-20 mb-20 bg-white">
          <h1 className='text-blue-900  text-4xl mb-5 text-bold'>Technical Data</h1>
      <table className="border border-gray-400 w-full text-center text-black">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex === 0 ? "font-bold bg-gray-200" : ""}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-400 p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
     
      <ContactSection />
      
    </>
  );
}