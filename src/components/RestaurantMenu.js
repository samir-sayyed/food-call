import { useParams } from "react-router-dom";
import { RES_IMG_URL } from "../utils/constants";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  const resInfo = restaurantMenu[0]?.card?.card?.info;
  const resMenuList =
    restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;

  return restaurantMenu?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center justify-between my-2 bg-green-50">
      <div className="flex items-center my-2 mx-4 justify-between shadow-lg p-6">
        <img
          className="w-[400px] h-[200px] "
          src={RES_IMG_URL + resInfo?.cloudinaryImageId}
        />

        <div className="mx-14">
          <h1 className="text-4xl font-bold">{resInfo?.name}</h1>
          <div>
            <h4 className="text-xl">
              {resInfo?.city + ", " + resInfo?.locality}
            </h4>
            <h5 className="font-bold">{resInfo?.avgRatingString} Stars</h5>
          </div>
        </div>
      </div>
      <h1 data-testid="menu" className="text-lg font-bold">
        Menu
      </h1>
      <ul data-testid="menu-container" className="flex flex-col">
        {resMenuList?.map((res) => (
          <li key={res?.card?.info?.id}>
            <MenuItem menu={res?.card?.info} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
