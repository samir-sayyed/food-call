import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);

  const [filteredResList, setFilteredResList] = useState([]);

  const { user, setUser } = useContext(UserContext);

  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    getRestaurantList();
  }, []);

  const isOnline = useIsOnline();

  if (!isOnline)
    return <h1>Ohh.... seems like you are disconnected from world!!</h1>;

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredResList(json?.data?.cards[2]?.data?.data?.cards);
  }

  return filteredResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="px-3 py-1 m-2 bg-blue-100 shadow-lg rounded-sm"
          onClick={() => {
            const filterList = resList.filter((res) => res.data.avgRating > 4);
            setFilteredResList(filterList);
          }}
        >
          Filter Top Rated Restaurant
        </button>

        <input
          data-testid="search-box"
          className="p-1 border-2 bg-blue-100 "
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        ></input>
        <button
          data-testid="search-btn"
          className="px-3 py-1 m-2 bg-blue-100 shadow-lg rounded-sm"
          onClick={() => {
            const filterList = filteredResList.filter((res) =>
              res.data.name.toLowerCase().includes(searchedText.toLowerCase())
            );
            setFilteredResList(filterList);
          }}
        >
          Search
        </button>
      </div>

      <div
        data-testid="restaurant-container"
        className="flex flex-wrap justify-evenly"
      >
        {filteredResList.map((res) => (
          <Link key={res?.data?.id} to={"/restaurant/" + res?.data?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
