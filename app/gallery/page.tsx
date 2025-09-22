"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allImages = [
  { id: 1, path: "/gallery/G1.png", label: "Photo 1" },
  { id: 2, path: "/gallery/G2.png", label: "Photo 2" },
  { id: 3, path: "/gallery/G3.png", label: "Photo 3" },
  { id: 4, path: "/gallery/G4.png", label: "Photo 4" },
  { id: 5, path: "/gallery/G5.png", label: "Photo 5" },
  { id: 6, path: "/gallery/G6.png", label: "Photo 6" },
  { id: 7, path: "/gallery/G7.png", label: "Photo 7" },
  { id: 8, path: "/gallery/G8.png", label: "Photo 8" },
  { id: 9, path: "/gallery/G9.png", label: "Photo 9" },
  { id: 10, path: "/gallery/G10.png", label: "Photo 10" },
  { id: 11, path: "/gallery/G12.png", label: "Photo 11" },
  { id: 12, path: "/gallery/G13.png", label: "Photo 12" },
  { id: 13, path: "/gallery/G14.png", label: "Photo 13" },
  { id: 14, path: "/gallery/G15.png", label: "Photo 14" },
  { id: 15, path: "/gallery/G16.png", label: "Photo 9" },
  { id: 16, path: "/gallery/G17.png", label: "Photo 10" },
  { id: 17, path: "/gallery/G18.png", label: "Photo 11" },
  { id: 18, path: "/gallery/G19.png", label: "Photo 12" },
  { id: 19, path: "/gallery/G20.png", label: "Photo 13" },
  { id: 20, path: "/gallery/G21.png", label: "Photo 14" },
];

export default function GridGallery() {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, allImages.length));
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 hover:text-[#ec6b24] mb-10 sm:mb-12 text-center">
          Image Gallery
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl">
          {allImages.slice(0, visibleCount).map((img) => (
            <div
              key={img.id}
              className="border-2 border-black hover:border-[#ec6b24] w-full rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={img.path}
                alt={img.label}
                width={600}
                height={400}
                className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
          ))}
        </div>

        
        {visibleCount < allImages.length && (
          <div className="w-full flex justify-center mt-8 sm:mt-10">
            <button
              onClick={handleLoadMore}
              className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-[#ec6b24] transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
