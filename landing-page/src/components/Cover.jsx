const Cover = () => {
  return (
    <section className="h-[10vh] grid grid-cols-1">
      {/* position: absolute;
    content: "";
    background-image: -webkit-gradient(linear, left top, right top, color-stop(10%, #5191fa), color-stop(75%, rgba(81, 145, 250, 0))); */}

      <img src="https://images.pexels.com/photos/10549835/pexels-photo-10549835.jpeg" />
      <article className="absolute text-white p-9 max-w-[620px]">
        <div className="text-7xl font-bold">
          {" "}
          Where Your <br />
          Journey Start !!!{" "}
        </div>
        <p className="leading-6 py-8 text-xl">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
        <div>
          <button className="bg-secondary text-xl hover:bg-sky-700">
            Book a Tour
          </button>
          <button className="bg-primary text-xl hover:bg-sky-700">
            Get a Quote
          </button>
        </div>
      </article>
    </section>
  );
};
export default Cover;
