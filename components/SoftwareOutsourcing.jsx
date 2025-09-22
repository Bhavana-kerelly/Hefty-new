"use client";

import React, { useState, useEffect, useRef } from "react";


const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          const startTime = performance.now();
          const animate = (timestamp) => {
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);
            setCount(Math.floor(percentage * end));

            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              hasAnimated.current = true;
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration]);

  return [count, ref];
};

export default function SoftwareOutsourcing() {
  const [modelsCount, modelsRef] = useCountUp(20, 2.5);
  const [yearsCount, yearsRef] = useCountUp(15, 2.5);
  const [installationsCount, installationsRef] = useCountUp(50, 2.5);
  const [qualityCount, qualityRef] = useCountUp(100, 2.5);

  return (
    <div className="bg-[#ec6b24] text-white flex justify-center py-12 px-5">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Main Text */}
        <div className="space-y-6 text-center">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold leading-tight">
            Wide Range of Crushing & Screening Solutions<br/>
            with Your Trusted Industry Partner
          </h1>
          <p className="text-base leading-relaxed max-w-3xl mx-auto">
            Discover a complete line of crushing and screening equipment designed to meet every project requirement from jaw, cone, and impact crushers to track-mounted and integrated mobile systems.
          </p>
          <p className="text-base leading-relaxed max-w-3xl mx-auto">
            As your trusted partner in the mining and construction sectors, Hefty Industries streamlines your operations with innovative designs, expert engineering, and reliable performance. Whether you’re building, mining, or upgrading — we deliver the right solution to make it happen efficiently and cost-effectively.
          </p>
        </div>

        {/* Statistics */}
        <div className="flex flex-nowrap justify-between items-center mt-12 divide-x divide-gray-500 bg-blue-900 w-full overflow-x-auto">
  <div ref={modelsRef} className="text-center px-8 py-4 flex-shrink-0">
    <div className="text-white text-lg">Models of crushers and screeners</div>
    <div className="text-5xl lg:text-6xl font-bold mt-2">{modelsCount}+</div>
  </div>

  <div ref={yearsRef} className="text-center px-8 py-4 flex-shrink-0">
    <div className="text-white text-lg">Years of engineering expertise</div>
    <div className="text-5xl lg:text-6xl font-bold mt-2">{yearsCount}+</div>
  </div>

  <div ref={installationsRef} className="text-center px-8 py-4 flex-shrink-0">
    <div className="text-white text-lg">Nationwide installations</div>
    <div className="text-5xl lg:text-6xl font-bold mt-2">{installationsCount}+</div>
  </div>

  <div ref={qualityRef} className="text-center px-8 py-4 flex-shrink-0">
    <div className="text-white text-lg">Commitment to quality & safety</div>
    <div className="text-6xl lg:text-7xl font-bold mt-2">{qualityCount}%</div>
  </div>

  <div className="text-center px-8 py-4 flex-shrink-0">
    <div className="text-white text-lg">Service and technical support</div>
    <div className="text-6xl lg:text-7xl font-bold mt-2">24/7</div>
  </div>
</div>

      </div>
    </div>
  );
}
