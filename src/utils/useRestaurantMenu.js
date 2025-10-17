import { RESTAURANT_MENU_URL } from "./constants";
import { useEffect, useState } from "react";
import { MENU_DATA } from "../mocks/restaurantData";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const [restaurantMenu, setRestaurantMenu] = useState([]);

  async function getRestaurantMenu() {
    // Using mock data instead of API call to avoid CORS issues
    // const data = await fetch(RESTAURANT_MENU_URL + resId);
    // const json = await data.json();
    // setRestaurantMenu(json?.data?.cards);
    
    setRestaurantMenu(MENU_DATA?.data?.cards);
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
