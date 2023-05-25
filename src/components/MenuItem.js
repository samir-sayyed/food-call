import { useState } from "react";
import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = (props) => {
  const { menu } = props;
  const [resMenu, setResMenu] = useState(menu);

  const dispatch = useDispatch();

  const handleAction = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="rounded-md flex p-2 m-2 w-[550px] bg-green-200 justify-between items-center">
      <img
        className="w-[150px] rounded-md"
        src={RES_IMG_URL + resMenu?.imageId}
      />
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold">{resMenu?.name}</h4>
        <h5>{resMenu?.category}</h5>
        <h1 className="font-semibold">{resMenu.price / 100} Rs</h1>
      </div>
      <button
        data-testid="addBtn"
        onClick={() => handleAction(resMenu)}
        className="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring-violet-300 p-2 m-2 bg-white rounded-md"
      >
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
