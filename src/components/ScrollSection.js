import React, { useRef } from "react";
import "./ScrollSection.css";

const ScrollSection = ({ title, children, divider = true }) => {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <>
      <section className="scroll-sec">
        <div className="scroll-sec__header">
          <h2 className="scroll-sec__title">{title}</h2>
          <div className="scroll-sec__arrows">
            <button className="scroll-sec__arrow" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
            <button className="scroll-sec__arrow" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
          </div>
        </div>
        <div className="scroll-sec__track hide-scroll" ref={ref}>
          {children}
        </div>
      </section>
      {divider && <hr className="section-divider" />}
    </>
  );
};

export default ScrollSection;
