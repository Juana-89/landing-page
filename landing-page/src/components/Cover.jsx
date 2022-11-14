const Cover = () => {
  return (
    <main>
      <div className="h-[10vh] w-[100%] py-20 z-50 justify-center items-center">
        <img
          className="h-screen w-full"
          src="https://images.pexels.com/photos/3059092/pexels-photo-3059092.jpeg"
        />
        {/* <img src="https://images.pexels.com/photos/10549835/pexels-photo-10549835.jpeg" /> */}
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500"></div>
      <article className="text-center sm:text-left description w-full sm:pl-14 text-white md:w-2/3 max-w-[620px]">
        <div className="text-3xl sm:text-7xl font-bold animate-slide-left">
          {" "}
          Where Your <br />
          Journey Start !!!{" "}
        </div>
        <p className="text-lg p-2 leading-6 py-8 sm:text-xl animate-slide-left-two">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
        <div className="inline-flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-slide-buttons">
          <button className="bg-secondary text-xl py-2 px-4 rounded hover:bg-sky-700 transition duration-700 ease-in hover:duration-150">
            Book a Tour
          </button>
          <button className="bg-primary text-xl py-2 px-4 rounded hover:bg-sky-700 transition duration-700 ease-in hover:duration-150">
            Get a Quote
          </button>
        </div>
      </article>
    </main>
  );
};
export default Cover;
