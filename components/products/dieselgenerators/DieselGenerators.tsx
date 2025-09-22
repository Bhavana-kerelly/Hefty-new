"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "15 KVA - 250 KVA", link: "#products/screens/vibratingscreen" },
  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/screens/S1.png"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Diesel Generators
          </h2>
          <p className="text-base text-gray-200 mb-6">
           In construction and mining environments, uninterrupted power supply is critical for maintaining productivity, safety, and operational efficiency. Hefty’s Diesel Generators are engineered to provide robust, reliable power solutions for your toughest job sites, ensuring your equipment and operations run smoothly, even in remote or off-grid locations.
          </p>
          <p className="text-base text-gray-200 mb-6">Designed for durability, high performance, and efficiency, our Diesel Generators are ideal for powering construction machinery, lighting, site offices, and other critical systems in challenging industrial environments.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white flex justify-center">
        <div className="max-w-7xl text-center">

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
              What is a Diesel Generator?
            </h2>
           <p className="text-base text-black mb-6">
           A Diesel Generator is a power generation system that uses a diesel engine coupled with an alternator to produce electricity. In construction and mining sites where grid power is unreliable or unavailable, diesel generators provide a dependable, on-site power solution.
          </p>
          <p className="text-base text-black mb-6">Hefty Diesel Generators deliver continuous power for heavy-duty operations, supporting essential equipment such as concrete batching plants, crushers, pumps, lighting systems, and more. They are designed to handle high-load demands, operate in harsh conditions, and ensure minimal downtime.
          </p>
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                 Key Benefits of Hefty Diesel Generators
                </h4>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Hefty –<br />
                  <span className="text-gray-700">Powering Your Operations</span> <br />
                  <span className="text-white">with Unmatched Reliability</span>{" "}<br/>
                  <span className="text-gray-700">and Performance</span>
                </h2>
                
                <p className='text-gray-900 text-sm'>Our Diesel Generators combine efficiency, durability, and high performance, providing the essential energy supply your operations depend on</p><br/>
                <button className="border border-blue-900 text-white px-6 py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5">
                  <span className="text-blue-900">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Reliable Power Supply: Designed for 24/7 operation, our generators provide uninterrupted power, keeping your construction or mining site fully operational at all times.
</h3>
                 
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">High Fuel Efficiency: Engineered for optimal fuel consumption, Hefty Diesel Generators lower operating costs while maximizing power output.
</h3>
                  
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Durable & Rugged Construction: 
Built to withstand extreme weather, dust, and rough site conditions, ensuring long-term performance and low maintenance.

</h3>
                   
                  
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Wide Power Range Options: Available in a variety of capacities (kVA), from small portable units to large industrial generators, suited for diverse site requirements.

Available in a variety of capacities (kVA), from small portable units to large industrial generators, suited for diverse site requirements.
.</h3>
                  
                  
                </div>
                 
              </div>
            </div>
          </section>
        

      <section className="bg-gray-200 px-6 py-12 md:py-20 w-full flex justify-center">
      <div className="max-w-7xl text-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold leading-tight mb-4">
                  Why Choose<br />
                  <span className="text-blue-900 hover:text-[#ec6b24]">Hefty Diesel Generators?</span> 
                </h2>
          <p className="text-black text-base mb-6 max-w-xl">
            At Hefty, we deliver power solutions built for the high demands of construction and mining industries. Our Diesel Generators combine efficiency, durability, and high performance, providing the essential energy supply your operations depend on. Whether it’s powering concrete batching plants, pumps, or temporary lighting systems, Hefty Diesel Generators are engineered to deliver peace of mind and operational continuity under any conditions.
          </p>
          
         
           
        </div>
      </div>
    </section>

    
     <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Types of Diesel Generators
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
