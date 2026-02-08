import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerLeftBox = useRef();
  useGSAP(() => {
    const leftBox = footerLeftBox.current;
    // leftBox.addEventListener("mouseover", (e) => {
    //   console.log(e);
    //   gsap.to(leftBox.children[0], {
    //     x: -10,
    //   });
    // });
    // leftBox.addEventListener("mouseleave", () => {
    //   gsap.to(leftBox.children[0], {
    //     x: 0,
    //   });
    // });
  }, []);
  const rogue = new URL("../assets/images/rogue.svg", import.meta.url).href;
  const resume = new URL(
    "../assets/SuryaSrigada.pdf",
    import.meta.url
  ).href;
  return (
    <footer className="footer min-h-screen flex justify-center items-center w-full py-20 px-4">
      <div className="footer-inner w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            ref={footerLeftBox}
            className="bg-green rounded-4xl aspect-square relative overflow-hidden border-2 border-black"
          >
            <img
              src={rogue}
              alt=""
              className="w-full h-full absolute bottom-[-40px]"
            />
          </div>
          <div className="bg-[#7A78FF] rounded-4xl aspect-square overflow-hidden border-2 border-black p-5 flex flex-col justify-between ">
            <div className="max-w-full lg:max-w-[60%] poppins flex flex-col gap-[4px]">
              <h2 className="font-bold text-[70px] text-black  tracking-[-4px] leading-[100%]">
                Let’s Connect
              </h2>
              <p className="text-[14px] text-black leading-[100%] ps-1">
                Feel free to reach out for collaborations or opportunities!
              </p>
            </div>
            <div className="w-full text-right">
              <a href={resume} download className="text-[22px] lg:text-[42px] font-[900] text-black leading-[100%] poppins underline">
                Download my resume
              </a>
            </div>
          </div>
          <div className="bg-orange rounded-full py-4 text-center">
            <h2 className="text-black text-[72px] lg:text-[122px] font-[900] poppins">
              Surya
            </h2>
          </div>
          <div className="bg-purple-300 rounded-full flex items-center justify-between py-10 px-15">
            <div className="">
              <a href="https://github.com/suryacodess" target="_blank">
                <i className="fa-brands fa-github text-[42px] lg:text-[62px]"></i>
              </a>
            </div>
            <div className="">
              <a href="https://x.com/heysuryaaaa" target="_blank">
                <i className="fa-brands fa-x-twitter text-[42px] lg:text-[62px]"></i>
              </a>
            </div>

            <div className="">
              <a href="mailto:suryaprakashsrigada@gmail.com">
                <i className="fa-solid fa-envelope text-[42px] lg:text-[62px]"></i>
              </a>
            </div>
            <div className="">
              <a href="https://www.instagram.com/heysuryaaaa" target="_blank">
                <i className="fa-brands fa-instagram text-[42px] lg:text-[62px]"></i>
              </a>
            </div>
            <div className="">
              <a
                href="https://linkedin.com/in/suryaprakashsrigada"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-[42px] lg:text-[62px]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
