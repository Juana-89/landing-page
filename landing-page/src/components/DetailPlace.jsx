const DetailPlace = ({item}) => {

  return (
    <section>
      <h1>ChosenPlace</h1>
      {item ?
        item.map((place, index) => {
          return <button
            className="items-center	m-4 flex-1 w-32 bg-transparent hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={place._id}
          >
            <h2>{place.name}</h2>
            <img src={place.img1} alt={place.name}/>
            <img src={place.img2} alt={place.name}/>
            <img src={place.img3} alt={place.name}/>
          </button>
}) : "NO HAY LUGARES"}
    </section>
  );
};
export default DetailPlace;
