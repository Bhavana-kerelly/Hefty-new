export default function AboutSection() {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-white text-black flex flex-col items-center gap-10">
      
      {/* Text Block */}
      <div className="max-w-3xl text-center">
        <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
          HEFTY: WHERE STRENGTH MEETS SMART ENGINEERING.
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
          At Hefty, we engineer more than just machines — we build solutions that
          power productivity. Specializing in advanced crushing and screening
          equipment, we serve the mining and construction industries with
          technology-driven, cost-effective, and reliable systems. Our designs
          focus on power, precision, and performance, ensuring that every operation
          achieves maximum efficiency and output.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
          With a commitment to innovation and durability, Hefty products are built
          to thrive in demanding environments, delivering consistent results that
          our customers can depend on nationwide. From mobile track-mounted
          crushers to integrated screening systems, we provide solutions tailored
          to your project’s scale and requirements.
        </p>
      </div>

      {/* Image */}
      <div className="w-full max-w-7xl">
        <img
          src="/About1.png"
          alt="Office"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded shadow"
        />
      </div>
    </section>
  );
}
