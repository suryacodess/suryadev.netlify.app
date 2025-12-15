import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MCQ = () => {
  // useGSAP(() => {
  //   const mm = gsap.matchMedia();
  //   mm.add("(min-width:1024px)", () => {
  //     let mcqTimeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".mcq",
  //         markers: false,
  //         start: "top 60%",
  //         end: "bottom bottom",
  //         scrub: 1,
  //       },
  //     });
  //     const questions = gsap.utils.toArray([
  //       ".mcq-question-1",
  //       ".mcq-question-2",
  //       ".mcq-question-3",
  //       ".mcq-question-4",
  //       ".mcq-question-5",
  //       ".mcq-question-6",
  //     ]);

  //     mcqTimeline.fromTo(
  //       questions,
  //       {
  //         autoAlpha: 0,
  //         scale: 0.5,
  //         transformOrigin: "left",
  //       },
  //       {
  //         autoAlpha: 1,
  //         scale: 1,
  //         duration: 1,
  //         stagger: 2,
  //       }
  //     );

  //     mcqTimeline.fromTo(
  //       ".mcq-list-item-bottom",
  //       {
  //         autoAlpha: 0,
  //         scale: 0.5,
  //         transformOrigin: "bottom right",
  //       },
  //       {
  //         autoAlpha: 1,
  //         scale: 1,
  //         delay: 1,
  //         stagger: 2,
  //         duration: 1,
  //       },
  //       "<"
  //     );
  //   });
  // });

  return (
    <section className="mcq bg-[#FF6D38] py-20 px-4">
      <div className="mcq-inner">
        <div className="mcq-headings flex flex-col gap-3">
          <div className="mcq-subheading">
            <p className="text-[14px] font-medium text-black poppins text-center selection:bg-[#141414] selection:text-[#fdf9f0]">
              You ask, Surya answers.
            </p>
          </div>
          <div className="mcq-heading">
            <h2 className="text-center text-[62px] lg:text-[120px] font-extrabold text-black leading-[100%] tracking-[-4px] poppins selection:bg-[#141414] selection:text-[#fdf9f0]">
              <p>Most Common</p>
              <p>Questions</p>
            </h2>
          </div>
        </div>

        <div className="mcq-list max-w-[460px] m-auto py-10">
          <div className="mcq-list-items flex flex-col">
            {/* first question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-1 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                Who are you?
              </div>
            </div>
            <div className="mcq-list-item-bottom mcq-list-item-bottom-1 flex items-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I’m Surya Srigada, a passionate Frontend Developer who loves
                crafting clean, responsive, and performant user interfaces.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            {/* second question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-2 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                where are you from?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I’m from Hyderabad, Telangana, India.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            {/* third question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-3 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                How much experience do you have in frontend development?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I have 2 years of experience in frontend development.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            {/* forth question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-4 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                Where do you work at?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I currently work as a Frontend Developer (Member of Technical
                Staff), in{" "}
                <a
                  href="https://techmojo.in"
                  target="_blank"
                  className="underline"
                >
                  Techmojo
                </a>
                , Hyderabad.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            {/* fifth question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-5 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                What technologies do you work with?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I work primarily with JavaScript, React.js, Astro.js, Next.js,
                and TypeScript, for building interactive and performant user
                interfaces. For styling and design systems, I use Tailwind CSS,
                and for content management, I prefer Strapi CMS due to its
                flexibility with APIs.
                <br></br>
                <br></br>
                <br></br>I also integrate libraries like GSAP for animations and
                Swiper.js for interactive carousels, focusing on creating
                engaging and seamless user experiences.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            {/* sixth question */}
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-6 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                How do you ensure a website is responsive and mobile-friendly?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I follow a mobile-first approach, ensuring layouts adapt
                smoothly across all screen sizes. Using Tailwind CSS and modern
                CSS Grid/Flexbox, I design fluid, scalable layouts with
                consistent spacing and typography.
                <br></br>
                <br></br>I also test responsiveness on multiple devices and
                browsers to guarantee an optimal user experience. Additionally,
                I use tools like Lighthouse and Chrome DevTools to verify
                performance and accessibility on mobile.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCQ;
