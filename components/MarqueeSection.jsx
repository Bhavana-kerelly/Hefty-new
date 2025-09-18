"use client";

import { FaArrowRight } from "react-icons/fa6";


const styles = {
  marqueeWrapper: {
    overflow: "hidden",
    backgroundColor: "#ec6b24",
    padding: "24px 0",
  },
  marqueeContent: {
    display: "flex",
    whiteSpace: "nowrap",
    animation: "marquee 30s linear infinite",
  },
  textBlock: {
    display: "flex",
    alignItems: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#ffffff",
    margin: "0 20px", // reduced margin for mobile
  },
  arrow: {
    fontSize: "36px",
    margin: "0 12px", // reduced arrow spacing for mobile
  },
};


const keyframes = `
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .marqueeTextBlock {
    font-size: 24px !important;
    margin: 0 12px !important;
  }
  .marqueeArrow {
    font-size: 28px !important;
    margin: 0 8px !important;
  }
}
`;

export default function MarqueeSection() {
  return (
    <>
      
      <style>{keyframes}</style>

      <div style={styles.marqueeWrapper}>
        <div style={styles.marqueeContent}>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} style={styles.textBlock} className="marqueeTextBlock">
              <span>Crushers</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Mobile Series</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Semi Mobile Series</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Feeders</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Impactors</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Screeners</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
              <span>Conveyors</span>
              <FaArrowRight style={styles.arrow} className="marqueeArrow" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
