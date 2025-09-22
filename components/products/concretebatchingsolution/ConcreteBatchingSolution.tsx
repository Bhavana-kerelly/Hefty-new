"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";



import ContactSection from '@/components/ContactSection';


const industries = [
    { name: "Concrete Batching Plant", link: "/products/concretebatchingsolution/concretebatchingplant" },
    { name: "Concrete Pumps", link: "/products/concretebatchingsolution/concretepumps" },

    { name: "Wetmix Macadam Plant", link: "/products/concretebatchingsolution/wetmixmacadamplant" },


  ];


export default function Crushers() {
  return (
    <>
      <section className="py-20 px-6  bg-[#ec6b24] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/concrete/CBP1.png"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-5">
           Precision, Efficiency, and Reliability in Every Batch
          </h2>
          <p className="text-base text-gray-200 mb-6">
           In the fast-paced world of construction and mining, precision, speed, and consistency are paramount. Hefty’s Concrete Batching Solution offers a state-of-the-art system designed to deliver high-quality concrete production with exceptional efficiency and accuracy. Built for the toughest environments, our batching solutions are engineered to optimize your concrete production process, reduce waste, and accelerate project timelines.
          </p>
          
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white  flex justify-center">
        <div className="max-w-7xl text-center">
          

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 hover:text-[#ec6b24] leading-tight mb-6">
              What is a Concrete Batching Solution?
            </h2>
            <p className='text-base text-gray-700'>
              Concrete Batching Solutions are specialized systems that combine the precise measurement, mixing, and handling of raw materials — such as cement, aggregates, water, and additives — to produce high-quality concrete in a controlled and consistent manner. These systems are essential for large-scale construction projects where uniformity, speed, and operational efficiency are critical.

            </p>
            <p className='text-base text-gray-700'>
             Hefty’s Concrete Batching Solution includes fully automated plants or modular systems that integrate seamlessly into your construction site or quarry operations, providing flexibility for both mobile and stationary applications.

            </p>
          </div>
        </div>
      </section>
      
     
          <section className="bg-[#ec6b24] text-white px-8 py-16 ">
            <div className="max-w-7xlmax-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div>
                <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
                  Key Benefits of Hefty Concrete Batching Solutions
                </h4>
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Hefty –<br />
                  <span className="text-gray-700">Powering Productivity</span> <br />
                  <span className="text-white">With Precision Crushing</span>{" "}<br/>
                  <span className="text-gray-700">& Screening</span>
                </h2>
                
                <p className='text-gray-900 text-sm'>Discover how Hefty’s Concrete Batching Solutions 
can transform your project efficiency, reduce costs, and improve the quality of concrete production. Our team is ready to help you design, install, and maintain a system tailored to your specific needs.
</p><br/>
                <button className="border border-blue-900 text-white px-6 py-3 hover:bg-blue-900 transition flex items-center gap-2 mt-5">
                  <span className="text-blue-900">&#8213;</span> Get In Touch
                </button>
              </div>
      
              {/* Right Section */}
              <div className="space-y-6">
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Precision Mixing for Superior Quality</h3>
                  <p className="text-sm text-white">
                    Achieve the highest concrete quality by precisely measuring and mixing components according to strict specifications, ensuring uniform consistency and strength in every batch.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Enhanced Operational Efficiency</h3>
                   <p className="text-sm text-white">
                   Automated control systems streamline the entire batching process, significantly reducing manual intervention, human error, and material waste, while accelerating production speed.
                  </p>
                  
                </div>
                <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Flexibility for All Project Sizes</h3>
                   <p className="text-sm text-white">
                  Whether for large infrastructure projects or small-scale construction tasks, Hefty offers modular solutions that can be customized for any project size or production capacity requirement.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Reduced Environmental Impact</h3>
                   <p className="text-sm text-white">
                  With optimized material use and energy-efficient designs, our solutions help reduce CO₂ emissions, lower energy consumption, and contribute to sustainable construction practices.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Durability in Harsh Environments</h3>
                   <p className="text-sm text-white">
                 Engineered for the construction and mining industries, our batching systems are built to withstand the most rugged sites, ensuring continuous, reliable operation under extreme conditions.
                  </p>
                </div>
                 <div className="border border-gray-700 p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">Seamless Integration</h3>
                   <p className="text-sm text-white">
                 Hefty’s batching solutions integrate perfectly with existing site logistics and other Hefty equipment, such as crushers and conveyors, allowing a smoother workflow and improved site productivity.
                  </p>
                </div>
               
              </div>
            </div>
          </section>
        

      <section className="bg-gray-200 px-6 py-12 md:py-20 w-full flex items-center justify-center">
  <div className="max-w-4xl text-center">
    <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold leading-tight mb-4">
      Global Reach – Why Choose Hefty’s Concrete Batching Solution?
    </h2>
    <p className="text-black text-base mb-6">
      At Hefty, we understand the demanding requirements of modern construction and mining projects.
      Our commitment to engineering excellence ensures that every batching solution we offer stands
      for durability, precision, and high performance. From modular setups for quick deployment to
      fully customized fixed plants, we deliver solutions that reduce costs, improve efficiency, and
      provide consistent quality – all backed by our expert technical support.
    </p>
  </div>
</section>

    
     <section>
        <div className="bg-white text-blue-900 px-6 py-16 mb-15 mt-10">
      <h2 className="text-3xl text-blue-900 hover:text-[#ec6b24] font-bold mb-10">
        Concrete Batching Solutions
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
