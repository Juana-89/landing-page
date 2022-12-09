const DetailPlace = ({item}) => {
  return (
    <section className="flex flex-wrap rounded shadow-lg">
      {item ?
        item.map((place, index) => {
          return (
            <div
              className="items-center	m-4 flex-1 bg-transparent shadow-lg hover:shadow-blue-500/50 transition duration-700 
               text-blue-500 font-semibold py-2 px-4 border rounded" key={index}>
              <figure className="h-96 w-97">
                <img
                  className="w-full h-full duration-500 hover:rotate-5 hover:scale-95 transition-transform cover"
                  src={place.img}
                  alt={place.name}
                />
              </figure>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <iconify-icon icon="heroicons-outline:location-marker" />
                  {place.name}
                </div>
                <p className="text-sm mb-2">{place.title}</p>
                <p className="text-gray-700 text-base">{place.description}</p>
              </div>
            </div>
          );
        }) : "There are no places"}
    </section>
  );
};
export default DetailPlace;
