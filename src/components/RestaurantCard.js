import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="my-3 mx-3 p-2 rounded-md bg-green-300 w-[250px] h-[270px] flex-col items-center justify-evenly">
      <img
        className="w-[250px] rounded-md"
        alt="res logo"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <div className="flex justify-between font-semibold my-2">
        <h3>{name}</h3>
        <h5>{avgRating}</h5>
      </div>
      <div className="flex text-sm my-2">
        <h6 className="text-[12px]">{cuisines.join(", ")}</h6>
        <h6 className="text-[12px]">₹{costForTwo / 100} FOR TWO</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
