// src/components/ScrollContainer.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const locomotive = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.08, // controls the smoothness
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    // Update scroll after images or content load
    setTimeout(() => {
      locomotive.update();
    }, 1000);

    return () => {
      locomotive.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollContainer;
