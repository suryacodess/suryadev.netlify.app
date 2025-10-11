import React, { useEffect, useRef } from "react";

const Banner = (props) => {
  console.log(props.smoother);
  const bannerCta = useRef(null);
  const bannerCtaBtn = bannerCta.current;
  const redirectTo = () => {
    props.smoother.scrollTo(".projects", true, "top top");
  };
  return (
    <div className="lg:pt-20">
      <section className="banner aspect-video h-auto w-full relative z-0 overflow-hidden rounded-4xl before:content-[''] before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-full before:bg-black/50">
        <div className="banner-inner h-full w-full px-4 relative flex justify-center items-center">
          <img
            className="w-full h-full object-cover rounded-4xl absolute"
            alt=""
            src="https://berserkguts.netlify.app/berserk.png"
          />

          <div className="h-[100px] w-[100px] rounded-full bg-red-500/80 z-[11] overflow-hidden transition-all duration-400 hover:bg-red-500 group">
            <a
              ref={bannerCta}
              onClick={() => redirectTo()}
              className="w-full h-full flex justify-center items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                focusable="false"
                className="h-[35px] w-[35px] opacity-50 group-hover:opacity-100 transition duration-400"
              >
                <g weight="fill">
                  <path d="M216,72H131.31L104,44.69A15.88,15.88,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.41,15.41,0,0,0,39.39,216h177.5A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40Z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
