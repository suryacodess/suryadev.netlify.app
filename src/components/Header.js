import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useContext } from "react";
import { AppContext } from "../utils/AppContext";

const Header = () => {
  // const { name } = useContext(AppContext);
  const name = "Surya";
  // useGSAP(() => {
  //   const headerTimeline = gsap.timeline({ delay: 5 });
  //   headerTimeline.fromTo(
  //     ".header-left",
  //     { y: -100, opacity: 0 },
  //     { y: 0, opacity: 1 }
  //   );
  //   headerTimeline.fromTo(
  //     ".header-right",
  //     { y: -100, opacity: 0 },
  //     { y: 0, opacity: 1 },
  //     "<"
  //   );
  // });
  return (
    <div className="header">
      <div className="header-inner w-full h-[90px] flex justify-between items-center m-auto">
        <div className="header-left">
          <a className="bg-orange text-black font-[inter] text-[18px] px-5 py-3 rounded-full font-bold poppins cursor-default">
            {name}
          </a>
        </div>
        <div className="header-right">
          <button className="flex flex-col gap-2 items-center justify-center h-[40px] w-[40px] rounded-full bg-[#FF6D38] cursor-not-allowed">
            <div className="flex w-[15px] h-px bg-[#fdf9f0]"></div>
            <div className="flex w-[15px] h-px bg-[#fdf9f0]"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
