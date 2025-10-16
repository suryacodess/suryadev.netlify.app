const Projects = () => {
  const arrise = new URL("../assets/images/arrise.png", import.meta.url).href;
  const chanAndChan = new URL("../assets/images/chan-chan.png", import.meta.url)
    .href;
  const duffle = new URL("../assets/images/duffle.png", import.meta.url).href;
  const freelancers = new URL(
    "../assets/images/freelancers.png",
    import.meta.url
  ).href;
  const movies = new URL("../assets/images/movies.png", import.meta.url).href;
  const oldagency = new URL("../assets/images/oldagency.png", import.meta.url)
    .href;
  return (
    <section className="projects bg-black py-20 px-4" id="projects">
      <div className="projects-inner flex flex-col gap-20">
        <div className="projects-headings flex flex-col gap-3">
          <div className="projects-subheading">
            <p className="text-[14px] font-medium text-white poppins text-center selection:bg-[#ff6d38]">
              Projects.
            </p>
          </div>
          <div className="projects-heading">
            <h2 className="text-center text-[62px] lg:text-[120px] font-extrabold text-white leading-[100%] tracking-[-4px] poppins selection:bg-[#ff6d38]">
              <p> Building Stories</p> <p>With Code</p>
            </h2>
          </div>
        </div>

        <div className="projects-list max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="project-list-item">
            <div className="project-list-item-img">
              <a href="https://arrise.com" target="_blank">
                <img
                  src={arrise}
                  alt="Project"
                  className="h-[auto] w-full object-cover rounded-2xl"
                />
              </a>
            </div>
            <div className="prject-list-item-body py-4">
              <h3 className="text-white text-2xl font-bold poppins selection:bg-[#ff6d38]">
                <a
                  href="https://arrise.com"
                  className="hover:text-[#ff6d38] transition-colors selection:bg-[#ff6d38]"
                >
                  Arrise
                </a>
              </h3>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38]">
                Arrise is a professional corporate website developed by me at
                &nbsp;
                <a
                  href="https://techmojo.in"
                  target="_blank"
                  className="underline"
                >
                  TechMojo Solutions
                </a>
                , where I'm currently employed. I was responsible for building
                the entire frontend — from layout structure and responsive
                design to smooth animations and performance optimization.
              </p>

              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38] pt-2">
                Techstack - Astro.JS, Strapi, Bootstrap and Swiper.JS.
              </p>
            </div>
          </div>
          <div className="project-list-item">
            <div className="project-list-item-img">
              <a href="http://chanandchan.netlify.app/" target="_blank">
                <img
                  src={chanAndChan}
                  alt="Project"
                  className="h-[auto] w-full object-cover rounded-2xl"
                />
              </a>
            </div>
            <div className="prject-list-item-body py-4">
              <h3 className="text-white text-2xl font-bold poppins selection:bg-[#ff6d38]">
                <a
                  href="https://chanandchan.netlify.app"
                  target="_blank"
                  className="hover:text-[#ff6d38] transition-colors"
                >
                  Chan & Chan
                </a>
              </h3>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38]">
                Chan & Chan is a single-page website for events and food,
                designed to provide users with a smooth browsing experience. I
                developed the frontend, focusing on responsive design, easy
                navigation, and interactive elements to make exploring events
                and food options simple and engaging.
              </p>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38] pt-2">
                Techstack - HTML 5, Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="project-list-item">
            <div className="project-list-item-img">
              <a href="https://oldagency.netlify.app/" target="_blank">
                <img
                  src={oldagency}
                  alt="Project"
                  className="h-[auto] w-full object-cover rounded-2xl"
                />
              </a>
            </div>
            <div className="prject-list-item-body py-4">
              <h3 className="text-white text-2xl font-bold poppins selection:bg-[#ff6d38]">
                <a
                  href="https://oldagency.netlify.app/"
                  target="_blank"
                  className="hover:text-[#ff6d38] transition-colors"
                >
                  Old Agency
                </a>
              </h3>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38]">
                Old Agency is a single-page landing website for an agency,
                designed to showcase services and highlight key offerings. I
                developed the frontend with a focus on responsive design, smooth
                navigation, and interactive elements to create an engaging user
                experience.
              </p>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38] pt-2">
                Techstack - HTML 5, Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="project-list-item">
            <div className="project-list-item-img">
              <a href="https://duffle.netlify.app" target="_blank">
                <img
                  src={duffle}
                  alt="Project"
                  className="h-[auto] w-full object-cover rounded-2xl"
                />
              </a>
            </div>
            <div className="prject-list-item-body py-4">
              <h3 className="text-white text-2xl font-bold poppins selection:bg-[#ff6d38]">
                <a
                  href="https://duffle.netlify.app"
                  target="_blank"
                  className="hover:text-[#ff6d38] transition-colors"
                >
                  Duffle Ecommerce
                </a>
              </h3>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38]">
                Duffle is an e-commerce website focused on duffle bags, designed
                to provide users with a smooth and intuitive shopping
                experience. I developed the frontend, ensuring a responsive
                layout, easy navigation, and interactive elements to make
                browsing products seamless and engaging.
              </p>
              <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38] pt-2">
                Techstack - HTML 5, Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
