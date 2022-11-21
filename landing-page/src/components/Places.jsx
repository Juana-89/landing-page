import { useEffect, useState } from "react";
import { allPlaces } from '../../server/database/connection.js'
const Places = () => {

    const [places, setPlaces] = useState(null);
  useEffect(() => {
    allPlaces(setPlaces);
  }, []);
  return (
    <>
    {places && places.map((place) => (
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" key={place._id}>
      {place.name}
    </button>
  )
  )}
  </>
  );
    }
export default Places;
