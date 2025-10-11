import "../styles/Surya/style.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Surya = () => {
  const ballRef = useRef(null);
  const topBallsWrapperRef = useRef(null);
  const suryaRef = useRef(null);

  useEffect(() => {
    // Pulse animation for bottom ball
    gsap.fromTo(
      ".ball-bottom-ball",
      { height: 20, width: 20 },
      { height: 40, width: 40, yoyo: true, repeat: -1, duration: 1 }
    );

    const surya = suryaRef.current;
    const ball = ballRef.current;
    const topBallsWrapper = topBallsWrapperRef.current;

    // Mouse move handler
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Move main ball
      gsap.to(ball, {
        x: deltaX * 0.09,
        y: deltaY * 0.09,
        duration: 0.3,
        ease: "power1.out",
      });

      // Move top balls wrapper
      gsap.to(topBallsWrapper, {
        x: deltaX * 0.08,
        y: deltaY * 0.08,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    // Add mouseenter/mouseleave to start/stop tracking
    const handleMouseEnter = () => {
      window.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // Optional: reset ball to center
      gsap.to(ball, { x: 0, y: 0, duration: 0.5, ease: "power1.out" });
      gsap.to(topBallsWrapper, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    surya.addEventListener("mouseenter", handleMouseEnter);
    surya.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup on unmount
    return () => {
      surya.removeEventListener("mouseenter", handleMouseEnter);
      surya.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={suryaRef}
      className="surya flex justify-center items-center h-screen min-h-[400px]"
      style={{ perspective: 1000 }}
    >
      <div
        ref={ballRef}
        className="ball bg-red-400 h-[300px] w-[300px] rounded-full flex flex-col justify-center items-center gap-[30px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={topBallsWrapperRef}
          className="ball-top flex justify-center items-center gap-8"
        >
          <div className="ball-top-ball bg-black w-[50px] h-[50px] rounded-full"></div>
          <div className="ball-top-ball bg-black w-[50px] h-[50px] rounded-full"></div>
        </div>
        <div className="ball-bottom">
          <div className="ball-bottom-ball bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Surya;
