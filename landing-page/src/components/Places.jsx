import { useEffect, useState } from "react";
import ButtonPlace from "./ButtonPlace";
import DetailPlace from "./DetailPlace";
import { allPlaces } from "../../server/database/connection";

const Places = () => {
  const [places, setPlaces] = useState([]);
  const placesNoRepeat= [... new Set(places.map(item => item.name))]

  useEffect(() => {
    allPlaces(setPlaces);
  }, []);

  const filterPlace = (name) => {
    const filter = places.filter(place => place.name ===  name);
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
