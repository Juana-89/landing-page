import { useEffect, useState } from "react";
import ButtonPlace from "./ButtonPlace.jsx";
import DetailPlace from "./DetailPlace.jsx";
import { allPlaces } from "../../server/database/connection.js";

const Places = () => {
  const[places, setPlaces] = useState([]);
  console.log([... new Set(places.filter(place =>place.name==='Lima'))], "22222")

  //const placesNoRepeat= [... new Set(places.map(item => item.name))]
  //console.log(placesNoRepeat + "aaaaa")

  useEffect(() => {
    allPlaces(setPlaces);
  }, []);

  const filterPlace = (name) => {
    //const filteredData = places.filter((place, index) => place.name ===  name);
    const filteredData = [...new Set(places.filter(place =>place.name ===  name))]
    //console.log(name.name)
    return setPlaces(filteredData)
  
  }


  return (
    <section className="m-4 flex flex-wrap justify-center">
      {/* {places &&
        places.map((place, index) => (
          <button
            className="items-center	m-4 flex-1 w-32 bg-transparent hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            key={place._id}
            //onClick={()=>filter(place)}
          >
            {place.name}
          </button>
        ))} */}
        <ButtonPlace buttonName={places} filterPlace={filterPlace}/>
        <DetailPlace item={places}/>
    </section>
  );
};
export default Places;
