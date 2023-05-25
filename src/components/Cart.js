import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCartAction = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-5 text-4xl font-bold">Cart {cartItems.length}</h1>
      <button onClick={() => handleClearCartAction()}>Clear cart</button>
      <ul>
        {cartItems.map((item) => (
          <MenuItem key={item.id} menu={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
