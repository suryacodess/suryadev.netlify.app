import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MCQ = () => {
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
            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-1 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                Who are you?
              </div>
            </div>
            <div className="mcq-list-item-bottom mcq-list-item-bottom-1 flex items-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I&apos;m Surya Srigada, a QA Engineer specializing in manual
                and automation testing for iGaming, B2C, and e-commerce
                platforms.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-2 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                where are you from?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I&apos;m from Hyderabad, Telangana, India.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-3 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                How much experience do you have in QA?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I have 3 years of experience in manual and automation testing,
                covering functional, regression, smoke, and cross-browser test
                cycles across multiple production releases.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-4 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                Where do you work at?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I currently work as a QA Engineer (Manual + Automation) at{" "}
                <a
                  href="https://techmojo.in"
                  target="_blank"
                  className="underline"
                >
                  Techmojo Solutions
                </a>
                , Hyderabad.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-5 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                What tools and technologies do you work with?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2 mb-4 lg:mb-8">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I use Playwright (JavaScript/TypeScript) for end-to-end
                automation, Postman and Swagger for REST API testing, and JIRA
                for defect tracking. I also test CMS-driven workflows on Strapi
                and WordPress, and conduct cross-browser testing on Chrome,
                Firefox, Safari, and Edge.
              </div>
              <div className="bg-[#FDF9F0] min-w-[40px] h-[40px] rounded-full inter font-extrabold flex justify-center items-center text-[12px]">
                S
              </div>
            </div>

            <div className="mqc-list-item-top flex items-start max-w-[80%] mb-4 lg:mb-8">
              <div className="mcq-question mcq-question-6 text-[14px] bg-black text-[#fdf9f0] font-[500] py-3 px-7 rounded-full poppins">
                What types of testing do you specialize in?
              </div>
            </div>
            <div className="mcq-list-item-bottom flex items-end justify-end w-full gap-2">
              <div className="w-[10%]"></div>
              <div className="mcq-answer max-w-[80%] bg-[#FDF9F0] text-[#141414] font-[500] text-[14px] px-7 py-4 rounded-2xl rounded-br-[0px] border-[1px] border-black poppins">
                I specialize in functional, regression, smoke, sanity, and
                end-to-end testing — both manual and automated. I also perform
                API validation, CMS content workflow testing, responsive and
                cross-browser testing, and WCAG accessibility compliance
                checks across web and mobile viewports.
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
