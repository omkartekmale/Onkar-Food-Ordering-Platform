import { CDN_URL } from "./../utils/constants";

const Card = ({ resdata }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    sla: { deliveryTime },
    costForTwo,
  } = resdata?.info;

  return (
    <div className="w-60 m-4 rounded-lg bg-gray-200 p-3 shadow-md hover:shadow-lg transition">
      
      {/* Image */}
      <img
        className="w-full h-40 rounded-lg object-cover"
        alt="restaurant img"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Content */}
      <h3 className="font-bold text-lg py-2">{name}</h3>

      <p className="text-sm text-gray-700">
        {cuisines.join(", ")}
      </p>

      <p className="py-1 text-sm font-medium">
        Price: {costForTwo}
      </p>

      <p className="py-1 text-sm">
        ⭐ {avgRatingString}
      </p>

      <p className="py-1 text-sm">
        ⏱ {deliveryTime} mins
      </p>
    </div>
  );
};

export const Withpromot=(Card)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute px-2 m-2 bg-yellow-700 rounded-b-lg text-white font-bold">Veg 🟢</label>
        <Card {...props}/>
      </div>
    )
  }
}

export default Card;
