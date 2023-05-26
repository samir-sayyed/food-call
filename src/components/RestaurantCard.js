import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.data;

  // Define CSS classes for styling
  const cardContainerStyles =
    "my-3 mx-3 p-2 rounded-md bg-blue-100 sm:w-[250px] sm:h-[270px] md:w-[300px] md:h-[320px] flex flex-col items-center justify-between transition-shadow duration-300";
  const imageStyles = "w-full h-2/3 rounded-t-md object-cover";
  let ratingStyles = "px-2 text-white";

  if (avgRating <= 2) {
    ratingStyles += " bg-red-500";
  } else if (avgRating <= 4) {
    ratingStyles += " bg-orange-500";
  } else {
    ratingStyles += " bg-green-500";
  }
  const detailsContainerStyles =
    "flex flex-col items-center justify-center font-semibold my-2";
  const cuisineStyles = "text-sm";
  const costStyles = "text-sm font-semibold";

  return (
    <div className={cardContainerStyles}>
      <img
        className={imageStyles}
        alt="res logo"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <div className={detailsContainerStyles}>
        <h3>{name}</h3>
        <h5 className={ratingStyles}>{avgRating}</h5>
      </div>
      <div className="flex justify-between text-sm my-2">
        <h6 className={cuisineStyles}>{cuisines.join(", ")}</h6>
        <h6 className={costStyles}>₹{costForTwo / 100} FOR TWO</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
