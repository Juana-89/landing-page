const DetailPlace = ({item}) => {

  return (
    <section className="flex flex-wrap rounded shadow-lg">
      {item ?
        item.map((place, index) => {
          return <div
            className="items-center	m-4 flex-1 bg-transparent hover:bg-blue-500  transition duration-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            
          ><figure>
           <img className="w-full" src={place.img} alt={place.name} key={index}/>
           </figure>
           <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{place.name}</div>
            {/* <img className="w-full" src={place.img2} alt={place.name}/>
            <img className="w-full" src={place.img3} alt={place.name}/> */}
           
            <p className="font-bold text-xl mb-2">{place.title}</p>
            <p className="text-gray-700 text-base">{place.description}</p>
            </div>
            
          </div>
}) : "There are no places"}
    </section>
  );
};
export default DetailPlace;
