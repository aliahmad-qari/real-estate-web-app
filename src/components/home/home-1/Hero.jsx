const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <h1 className="text-4xl font-bold capitalize md:text-5xl leading-tight">
          Find Your Dream <br /> 
          <span className="text-primary">Property</span> Today
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <p className="text-lg">
            Discover the perfect home or investment property with PrimeEstate. 
            We offer premium residential and commercial properties tailored to your needs.
          </p>
        </div>
        <button className="mt-6 btn btn-primary shadow-lg">Get Started</button>
        <div className="mt-8 text-center flex-align-center gap-x-8">
          <div>
            <h1 className="text-3xl font-bold">
              1200<span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-sm mt-1">Premium Listings</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              850<span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-sm mt-1">Happy Clients</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              15<span className="text-sm text-primary">+</span>
            </h1>
            <p className="text-sm mt-1">Years Experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem]">
        <img src="/images/hero-4.png" alt="Modern Property" className="w-full drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
