import ReadMore from './ReadMore'
const DetailPlace = ({item}) => {
  return (
    <section className="sm:flex photos-container mx-auto flex-wrap">
      {item ?
        item.map((place, index) => {
          return (
            <div
              className="my-8 px-1 sm:w-1/3 items-center bg-transparent shadow-lg hover:shadow-blue-500/50 transition duration-700 
               text-blue-500 font-semibold border rounded"
              key={index}
            >
              {/* py-2 px-4  */}
              <figure className="h-96 w-97">
                <img
                  className="object-cover w-full h-full duration-500 hover:rotate-5 hover:scale-95 transition-transform cover"
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
                <span className="text-gray-700 text-base">
                  <ReadMore>{place.description}</ReadMore>
                </span>
              </div>
            </div>
          );
        }) : "There are no places"}
    </section>
  );
};
export default DetailPlace;
