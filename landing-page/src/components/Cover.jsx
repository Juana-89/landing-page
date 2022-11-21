import Buttons from './Buttons'
const Cover = () => {
  return (
    <main className="bg-hero-pattern bg-cover bg-center opacity-90">
      <div className="bg-auto bg-center content-center pt-20 sm:pt-60 z-50 justify-center items-center">
      </div>
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
          <Buttons text= "Book a Tour"/>
          <Buttons text= "Get a Quote"/>
        </div>
      </article>
    </main>
  );
};
export default Cover;
