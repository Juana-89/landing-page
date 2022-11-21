import { useEffect, useState } from "react";
import { allPlaces } from "../../server/database/connection.js";
const ChosenPlace = () => {
  const [places, setPlaces] = useState(null);
  useEffect(() => {
    allPlaces(setPlaces);
  }, []);
  return (
    <section>
      <h1>ChosenPlace</h1>
      {places &&
        places.map((place) => (
          <button
            className="items-center	m-4 flex-1 w-32 bg-transparent hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={place._id}
          >
            <h2>{place.name}</h2>
            <img src={place.img1} />
            <img src={place.img2} />
            <img src={place.img3} />
          </button>
        ))}
    </section>
  );
};
export default ChosenPlace;
