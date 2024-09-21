const Hero = () => {
  return (
    <div className={`home-hero w-full h-screen bg-gray-800 flex items-center justify-center`}>
      <div className={`w-full h-[calc(100vh-5rem)] flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-start px-4 md:px-8 lg:px-16`}>
        <div className="flex items-center justify-start gap-x-3">
          <div className="border w-10 border-yellow-500" />
          <p className="text-yellow-500 font-normal text-sm">
            KAYUU FURNITURE STORE
          </p>
        </div>
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl">
          Make Yourself At Home
        </h1>
        <p className="text-white font-medium text-sm md:text-base leading-5 md:leading-7 lg:w-3/5">
          Transform your empty spaces into beautiful, functional areas with our
          interior design solutions. Our curated products enhance your home’s
          aesthetic, maximizing comfort and style while reflecting your unique
          personality. Let us help you create a warm, inviting environment that
          feels like home!
        </p>
        <div>
          <button className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium hover:bg-yellow-600 transition">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
