const HeroV2 = () => {
  return (
    <section className="hero py-10 lg:pt-20 px-4">
      <div className="hero-inner">
        <div className="hero-content flex flex-col gap-3">
          <div className="hero-content-subheading">
            <p className="text-[14px] font-medium poppins text-black text-center poppins selection:bg-[#ff6d38]">
              Meet Surya
            </p>
          </div>
          <div className="hero-content-headings">
            <h1 className="text-[52px] lg:text-[104px] tracking-[-2px] lg:tracking-[-5px] leading-[90%] text-black font-[900] text-center poppins selection:bg-[#ff6d38]">
              <p>Interactive design</p>
              <p>through code</p>
              <p>and curiosity.</p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
