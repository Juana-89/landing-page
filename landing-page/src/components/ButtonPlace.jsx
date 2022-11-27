const ButtonPlace = ({buttonName, filterPlace}) => {
  
  return (
    <section className="m-4 flex flex-wrap">
      {
        buttonName.map((place, index) => (
          <button
            className="items-center	m-4 flex-1 w-32 bg-transparent hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={place._id}
            onClick={()=>filterPlace(place.name)}
          >
            {place.name}
          </button>
        ))}
    </section>
  );
};
export default ButtonPlace;
