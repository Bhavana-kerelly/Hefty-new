import Image from "next/image";
import Navbar from "@/components/Navbar";
import MissionVision from "@/components/inner/MissionVision";
import CoreValues from "@/components/inner/CoreValues";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";
import SoftwareOutsourcing from "@/components/SoftwareOutsourcing";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container font-sans text-gray-800">
       
        <section className="w-full">
          <Image
            src="/BannerImage2.png"
            alt="Office Team"
            width={1920}
            height={700}
            className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[600px] object-cover"
            priority
          />
        </section>

       
        <section className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16 bg-white">
          
          <div className="max-w-3xl text-center space-y-4 sm:space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 hover:text-[#ec6b24]">
              About Hefty
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              At <strong>Hefty</strong>, we are more than just a manufacturer — we are innovators, problem-solvers, and partners in progress. With years of expertise in designing and delivering world-class crushing, screening, and material handling equipment, we have built a reputation for strength, precision, and reliability. Our products are engineered to perform in the toughest conditions, empowering industries like mining, construction, aggregates, and recycling to achieve maximum efficiency and productivity.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              From the drawing board to the final assembly, every Hefty solution reflects our passion for engineering excellence and our commitment to delivering unmatched value to our clients.
            </p>
          </div>

          
          <div className="w-full mt-6 sm:mt-8">
            <Image
              src="/Family1.png"
              alt="Team Working"
              width={1920}
              height={400}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        
        <SoftwareOutsourcing />
        <MissionVision />
      </div>

      <CoreValues />
      <Faq />
      <ContactSection />
      
      <Footer />
    </>
  );
};

export default AboutUs;
