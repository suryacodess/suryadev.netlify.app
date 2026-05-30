const projects = [
  {
    name: "Pragmatic Play",
    url: "https://pragmaticplay.com",
    period: "2023 – Present",
    description:
      "Performed functional and regression testing for the public-facing corporate website of Pragmatic Play, a global iGaming content provider covering product showcases, multilingual pages, and marketing sections. Validated WordPress CMS workflows, REST API responses, cross-browser compatibility, and WCAG accessibility compliance.",
    stack: "Manual Testing · Playwright · REST API Testing · WordPress",
    gradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    name: "Pragmatic Play Fun",
    url: "https://pragmaticplay.fun",
    period: "2023 – Present",
    description:
      "Performed end-to-end manual testing for a free-to-play community gaming platform validating game discovery flows, slot catalog filtering, and reward interactions. Validated Strapi CMS-driven content rendering and wrote Playwright automation scripts for tag-based filtering and navigation flows.",
    stack: "Manual Testing · Playwright · Strapi CMS · REST APIs",
    gradient: "from-[#2d1b69] to-[#11998e]",
  },
  {
    name: "ARRISE",
    url: "https://arrise.com",
    period: "2023 – Present",
    description:
      "Executed functional and regression testing for the ARRISE corporate website validating careers portal listings, location pages, product showcases, and brand sections. Tested Strapi CMS workflows for dynamic job listings and validated REST API responses for real-time content accuracy.",
    stack: "Manual Testing · Playwright · Strapi CMS · REST APIs",
    gradient: "from-[#0f0c29] to-[#302b63]",
  },
  {
    name: "Klira Skin",
    url: "https://klira.skin",
    period: "2025 – Present",
    description:
      "Performed end-to-end manual testing for a dermatology e-commerce platform covering the multi-step Skin Test quiz flow, product pages, shop, gift card, and checkout journeys. Wrote Playwright automation scripts for checkout and quiz flows, and verified WCAG accessibility across all customer-facing pages.",
    stack: "Manual Testing · Playwright · Strapi CMS · REST APIs",
    gradient: "from-[#ff6d38] to-[#f5576c]",
  },
];

const Projects = () => {
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
              <p>Ensuring Quality</p> <p>Across Platforms</p>
            </h2>
          </div>
        </div>

        <div className="projects-list max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div className="project-list-item" key={project.url}>
              <div className="project-list-item-img">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <div
                    className={`h-[240px] lg:h-[300px] w-full rounded-2xl bg-gradient-to-br ${project.gradient} flex flex-col justify-center items-center gap-2 p-6`}
                  >
                    <span className="text-white/60 text-[14px] poppins font-medium">
                      {project.period}
                    </span>
                    <span className="text-white text-[28px] lg:text-[36px] font-bold poppins text-center leading-tight">
                      {project.name}
                    </span>
                    <span className="text-white/50 text-[13px] poppins">
                      {project.url.replace("https://", "")}
                    </span>
                  </div>
                </a>
              </div>
              <div className="prject-list-item-body py-4">
                <h3 className="text-white text-2xl font-bold poppins selection:bg-[#ff6d38]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ff6d38] transition-colors selection:bg-[#ff6d38]"
                  >
                    {project.name}
                  </a>
                </h3>
                <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38]">
                  {project.description}
                </p>
                <p className="text-white text-[14px] font-[400] poppins selection:bg-[#ff6d38] pt-2">
                  {project.stack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
