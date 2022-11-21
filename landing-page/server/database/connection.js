import axios from "axios";
 const allPlaces = async (state) => {
    const peticion = await axios.get("http://localhost:5500/api/places")
    console.log(peticion.data)
    state(peticion.data)
}
export { allPlaces }