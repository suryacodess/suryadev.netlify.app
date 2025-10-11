import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
// register SplitText to use it
gsap.registerPlugin(SplitText);
const Hero = () => {
  // const { name } = useContext(AppContext);
  const name = "Surya"
  useGSAP(() => {
    const heroTimeline = gsap.timeline();
    heroTimeline.fromTo(
      ".hero-content-middle-top-middle",
      {
        y: -20,
        rotation: -20,
        transformOrigin: "top left",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        rotation: -3,
        duration: 1.5,
      }
    );
    heroTimeline.fromTo(
      ".hero-content-middle-bottom-right",
      {
        y: -20,
        rotation: -20,
        transformOrigin: "left top",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 2,
        duration: 1.5,
      },
      "<"
    );
    // get text elements
    let text1 = SplitText.create(".hero-content-middle-top-left", {
      type: "words, chars",
    });
    let text2 = SplitText.create(".hero-content-middle-top-right", {
      type: "words, chars",
    });
    let text3 = SplitText.create(".hero-content-middle-bottom-left", {
      type: "words, chars",
    });
    let text4 = SplitText.create(".hero-content-middle-bottom-middle", {
      type: "words, chars",
    });
    heroTimeline.fromTo(
      text1.chars,
      { y: -5, opacity: 0 },
      {
        y: 0,
        stagger: 0.1,
        duration: 0.1,
        opacity: 1,
      }
    );
    heroTimeline.fromTo(
      text2.chars,
      { y: -5, opacity: 0 },
      {
        y: 0,
        stagger: 0.1,
        duration: 0.1,
        opacity: 1,
      }
    );
    heroTimeline.fromTo(
      text3.chars,
      { y: -5, opacity: 0 },
      {
        y: 0,
        stagger: 0.1,
        duration: 0.1,
        opacity: 1,
      }
    );
    heroTimeline.fromTo(
      text4.chars,
      { y: -5, opacity: 0 },
      {
        y: 0,
        stagger: 0.1,
        duration: 0.1,
        opacity: 1,
      }
    );
    heroTimeline.fromTo(
      ".hero-content-top",
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
    heroTimeline.fromTo(
      ".hero-content-bottom-p",
      {
        opacity: 0,
      },
      { opacity: 1 }
    );
    heroTimeline.fromTo(
      ".hero-content-bottom-btn",
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0 }
    );
  });
  const videoSrc = new URL("../assets/video.mp4", import.meta.url).href;
  const videoSrc2 = new URL("../assets/video-2.mp4", import.meta.url).href;
  return (
    <section className="hero mt-[92px] px-4">
      <div className="hero-content flex flex-col justify-center text-center gap-[30px]">
        <div className="hero-content-top text-black text-[16px] poppins">
          Meet {name}
        </div>
        <div className="hero-content-middle flex flex-col gap-[10px] lg:gap-[20px] inter">
          <div className="hero-content-middle-top flex justify-center items-center gap-[10px] lg:gap-[15px]">
            <div className="hero-content-middle-top-left text-black text-[24px] lg:text-[92px] leading-[100%] tracking-[-2px] lg:tracking-[-6px]">
              Turning
            </div>
            <div className="hero-content-middle-top-middle h-[60px] lg:h-[120px] w-[100px] lg:w-[200px] rounded-[1000px] overflow-hidden">
              <video
                autoPlay
                muted
                playsInline
                loop
                className="h-full w-full object-cover"
              >
                <source src={videoSrc} />
              </video>
            </div>
            <div className="hero-content-middle-top-right text-black text-[24px] lg:text-[92px] leading-[100%] tracking-[-2px] lg:tracking-[-6px]">
              Conversations
            </div>
          </div>
          <div className="hero-content-middle-bottom flex justify-center items-center gap-[10px] lg:gap-[15px]">
            <div className="hero-content-middle-bottom-left text-black text-[24px] lg:text-[92px] leading-[100%] tracking-[-2px] lg:tracking-[-6px]">
              into
            </div>
            <div className="hero-content-middle-bottom-middle text-black text-[24px] lg:text-[92px] leading-[100%] tracking-[-2px] lg:tracking-[-6px]">
              Creations.
            </div>
            <div className="hero-content-middle-bottom-right h-[60px] lg:h-[120px] w-[100px] lg:w-[200px] rounded-[1000px] overflow-hidden">
              <video
                autoPlay
                muted
                playsInline
                loop
                className="h-full w-full object-cover"
              >
                <source src={videoSrc2} />
              </video>
            </div>
          </div>
        </div>
        <div className="hero-content-bottom flex flex-col justify-center items-center gap-10">
          <p className="hero-content-bottom-p text-black text-[16px] lg:text-[20px] poppins">
            Turning ideas into sleek, <br></br> functional web experiences.
          </p>
          <button className="hero-content-bottom-btn poppins flex justify-center items-center gap-2 text-[16px] h-[40px] px-10 py-[26px] border-none z-[2] bg-black text-white rounded-full cursor-pointer">
            Explore more
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
