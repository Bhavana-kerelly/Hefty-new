"use client";

import Image from "next/image";
import Link from "next/link";

const productsRow1 = [
  { id: 1, img: "/products/1.png", name: "Product 1" },
  { id: 2, img: "/products/2.png", name: "Product 2" },
  { id: 3, img: "/products/3.png", name: "Product 3" },
  { id: 4, img: "/products/4.png", name: "Product 4" },
  { id: 5, img: "/products/5.png", name: "Product 5" },
  { id: 6, img: "/products/6.png", name: "Product 6" },
  { id: 7, img: "/products/7.png", name: "Product 7" },
  { id: 8, img: "/products/8.png", name: "Product 8" },
];

const productsRow2 = [
  { id: 9, img: "/products/9.png", name: "Product 9" },
  { id: 10, img: "/products/10.png", name: "Product 10" },
  { id: 11, img: "/products/11.png", name: "Product 11" },
  { id: 12, img: "/products/12.png", name: "Product 12" },
  { id: 13, img: "/products/13.png", name: "Product 13" },
  { id: 14, img: "/products/14.png", name: "Product 14" },
  { id: 15, img: "/products/15.png", name: "Product 15" },
  { id: 16, img: "/products/16.png", name: "Product 16" },
];

export default function ProductSlider() {
  return (
    <div className="w-full overflow-hidden bg-white py-8 md:py-12 space-y-6 md:space-y-8">
      {/* Row 1 */}
      <div className="slider-row animate-slide">
        {[...productsRow1, ...productsRow1].map((product) => (
          <div
            key={"row1-" + product.id + Math.random()}
            className="flex-shrink-0 w-36 h-28 md:w-72 md:h-44 rounded-lg shadow-md bg-gray-100 flex items-center justify-center"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={180}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="slider-row animate-slide-reverse">
        {[...productsRow2, ...productsRow2].map((product) => (
          <div
            key={"row2-" + product.id + Math.random()}
            className="flex-shrink-0 w-36 h-28 md:w-72 md:h-44 rounded-lg shadow-md bg-gray-100 flex items-center justify-center"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={180}
              height={120}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* View More button */}
      <div className="flex justify-center pt-4 md:pt-6">
        <Link
          href="/gallery"
          className="w-full md:w-auto text-center px-6 py-3 bg-[#ec6b24] text-white font-semibold rounded-lg shadow hover:bg-[#d65a1d] transition-colors duration-300"
        >
          View More →
        </Link>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slide-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .slider-row {
          display: flex;
          width: max-content;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .slider-row {
            gap: 2rem;
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        .animate-slide-reverse {
          animation: slide-reverse 20s linear infinite;
        }
        /* Pause only that row when hovered or touched */
        .slider-row:hover,
        .slider-row:active {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
