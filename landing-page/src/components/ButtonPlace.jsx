const ButtonPlace = ({ buttonName, filterPlace }) => {

  return (
    <section className="flex sx:flex-nowrap flex-wrap w-[100%] justify-center">
      {
        buttonName.map((place, index) => (
          <button type="button"
            className="items-center px-6 py-3.5	m-4 flex-1 w-36 max-w-1/2 bg-transparent shadow-bx-sc hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white rounded hover:animate-shake-horizontal"
            key={index}
            onClick={ ()=> filterPlace(place) }
          >
            {place}
          </button>
        ))}
    </section>
  );
};
export default ButtonPlace;
