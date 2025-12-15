// Context Api
import { AppProvider } from "./src/utils/AppContext";

// Gsap
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
// register ScrollSmoother and ScrollTrigger to use it
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// components
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Banner from "./src/components/Banner";
import Projects from "./src/components/Projects";
import Surya from "./src/components/Surya";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Footer from "./src/components/Footer";
import MCQ from "./src/components/MCQ";
import ScrollContainer from "./src/components/ScrollContainer";
import HeroV2 from "./src/components/HeroV2";

const App = () => {
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
  });
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="main bg-[#FDF9F0] min-h-screen">
          <div className="main-inner max-w-[1200px] m-auto px-4">
            <Header />
            <HeroV2 />
            {/* <Hero /> */}
            <Banner smoother={smoother} />
            <About />
          </div>
          <Projects />
          <MCQ />
          <div className="max-w-[1200px] m-auto">
            <Footer />
          </div>
          <Surya />
        </main>
      </div>
    </div>
  );
};

export default App;
