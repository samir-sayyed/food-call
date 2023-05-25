import { RESTAURANT_MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const [restaurantMenu, setRestaurantMenu] = useState([]);

  async function getRestaurantMenu() {
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    setRestaurantMenu(json?.data?.cards);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
