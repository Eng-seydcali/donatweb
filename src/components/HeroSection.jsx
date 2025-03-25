const HeroSection = () => {
    return (
      <section className="relative h-[650px] flex items-center justify-between px-6 md:px-16 pt-8 hiddesn:bg-[url('./HeroImage.png')] md:bg-[url('./HeroImage.png')] bg-cover bg-center">
        {/* Left Side (Text) */}
        <div className="md:w-1/2 text-center md:text-left ">
          <h1 className="text-6xl md:text-6xl font-bold leading-tight">
            Donate For A <br></br> <span className="text-yellow-500">Better World</span>
          </h1>
          <p className="text-gray-700">
            Explore the variety of volunteer opportunities<br></br> available. From event
            planning and fundraising<br></br> to fieldwork and administrative support.
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <button className="bg-teal-800 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition">
              Discover Now ↗
            </button>
            <button className="bg-yellow-400 text-white p-4 rounded-full hover:bg-yellow-500 transition">
              ▶
            </button>
          </div>
        </div>
  
        {/* Right Side (Image) */}
       
      </section>
    );
  };
  
  export default HeroSection;
  