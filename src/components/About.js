import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

import Tag from "./Tag";
const About = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let aboutContentText = new SplitText(".about-content", {
        type: "words, chars",
      });

      let aboutContentTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          markers: false,
          start: "top top",
          end: "bottom -100%",
          scrub: 1,
          pin: true,
        },
      });

      gsap.set(aboutContentText.words, { opacity: 0.4 });

      aboutContentTimeline.to(aboutContentText.words, {
        opacity: 1,
        duration: 2,
        stagger: 0.8,
      });

      gsap.set(".tag-1", { rotate: 3, opacity: 0 });
      gsap.set(".tag-2", { rotate: 7, opacity: 0 });
      gsap.set(".tag-3", { rotate: -6, opacity: 0 });
      gsap.set(".tag-4", { rotate: -10, opacity: 0 });
      gsap.set(".tag-5", { rotate: 10, opacity: 0 });
      gsap.set(".tag-6", { rotate: 4, opacity: 0 });

      let tags = gsap.utils.toArray([
        ".tag-1",
        ".tag-2",
        ".tag-3",
        ".tag-4",
        ".tag-5",
        ".tag-6",
      ]);

      aboutContentTimeline.to(
        tags,
        {
          autoAlpha: 1,
          stagger: 4,
          duration: 6,
        },
        "<"
      );
    });
  });

  return (
    <section className="about py-10 py-lg-0 h-auto lg:min-h-screen w-full flex justify-center items-center gap-[50px]">
      <div className="tags-left hidden lg:flex flex-col justify-center items-center gap-[50px] h-full">
        <div className="tag-1 relative">
          <Tag icon={""} label="Playwright" bg="bg-orange" />
        </div>
        <div className="tag-2">
          <Tag icon={""} label="Manual Testing" bg="bg-purple" />
        </div>
        <div className="tag-3">
          <Tag icon={""} label="API Testing" bg="bg-black" />
        </div>
      </div>
      <div className="about-inner flex flex-col gap-5 px-4">
        <div className="about-heading text-center">
          <h2 className="text-[14px] font-medium text-black poppins text-center selection:bg-[#ff6d38]">
            About
          </h2>
        </div>
        <div className="about-content text-center flex flex-col gap-3 font-[inter] max-w-[700px] w-full">
          <p
            className="text-[32px] lg:text-[40px] font-[400] leading-[1.4em] inter tracking-[-2px] selection:bg-[#ff6d38]"
            style={{ fontFeatureSettings: "salt" }}
          >
            I&apos;m a QA Engineer with 3 years of experience in manual and
            automation testing for iGaming, B2C, and e-commerce platforms. I
            focus on thorough test coverage, sharp defect detection, and
            ensuring every release meets the highest quality standards.
          </p>
        </div>
      </div>
      <div className="tags-right hidden lg:flex flex-col justify-center items-center gap-[50px] h-full">
        <div className="tag-4">
          <Tag icon={""} label="Cross-Browser" bg="bg-green" />
        </div>
        <div className="tag-5">
          <Tag icon={""} label="CMS Testing" bg="bg-blue" />
        </div>
        <div className="tag-6">
          <Tag icon={""} label="Agile/Scrum" bg="bg-lime" color="text-black" />
        </div>
      </div>
    </section>
  );
};

export default About;
