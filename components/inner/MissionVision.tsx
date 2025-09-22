"use client";

export default function VisionMission() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:py-20">
      <div className="max-w-7xl mx-auto font-serif">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-900 hover:text-[#ec6b24] text-center mb-12 sm:mb-16">
          Our Vision & Mission
        </h2>

        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          <div className="flex-1 bg-white border border-black hover:border-[#ec6b24] rounded-lg p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
              Vision
            </h3>
            <p className="text-base sm:text-lg text-black leading-relaxed">
              To be the global leader in crushing and screening solutions, setting
              industry benchmarks for innovation, durability, and customer satisfaction. 
              We envision a future where Hefty is the first choice for industries worldwide, 
              known for powering growth and enabling success through superior equipment 
              and services.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-white border border-black hover:border-[#ec6b24] rounded-lg p-6 sm:p-8 md:p-10 text-center shadow-sm">
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m4.5 6h-9A2.5 2.5 0 016 18.5v-13A2.5 2.5 0 018.5 3h7A2.5 2.5 0 0118 5.5v13a2.5 2.5 0 01-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 hover:text-[#ec6b24] mb-4">
              Mission
            </h3>
            <p className="text-base sm:text-lg text-black leading-relaxed mb-4">
              Our mission is to design and deliver high-performance, reliable, and sustainable 
              crushing and screening solutions that help our clients achieve their goals with 
              efficiency and confidence.
            </p>
            <h5 className="text-left font-semibold text-black mb-2">We strive to:</h5>
            <ol className="text-left text-base sm:text-lg space-y-2 list-decimal list-inside">
              <li>Continuously innovate to meet evolving industry needs.</li>
              <li>Deliver products that withstand extreme operational demands.</li>
              <li>
                Provide exceptional customer support at every stage — from purchase 
                to after-sales service.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
