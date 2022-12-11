import { useEffect, useState,useMemo } from "react";
import ButtonPlace from "./ButtonPlace";
import DetailPlace from "./DetailPlace";
import { allPlaces } from "../../server/database/connection";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const placesNoRepeat= [... new Set(places.map(item => item.name))]
  //const [buttons, setButtons] = useState(placesNoRepeat)
  //console.log(placesNoRepeat + "aaaaa")
  //(places.sort((a,b) => a.name < b.name))
  useEffect(() => {
    allPlaces(setPlaces)
  }, []);

  const filterPlace = (name) => {
    const filter = places.filter(place => place.name ===  name);
    // // const filteredData = [
    // //   ...new Set(places.filter((place) => place.name === name)),
    // // ];
    //console.log(name.name)
    return setPlaces(filter);
  };

  return (
    <section className="m-4 flex flex-wrap justify-center">
      <ButtonPlace buttonName={placesNoRepeat} filterPlace={filterPlace} />
      <DetailPlace item={places} />
    </section>
  );
};
export default Places;
