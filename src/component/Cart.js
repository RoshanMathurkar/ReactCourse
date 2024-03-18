import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cardSlice";

const Cart = () => {
  //read the items using selector
  const cartitems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4">
      <div className="flex items-center justify-evenly">
        <h1 className="font-bold text-2xl">Cart Items</h1>
        <button
          className="border-2 border-black-100 hover:bg-black hover:text-white rounded-md p-2 m-2"
          onClick={handleClick}
        >
          Clear Cart
        </button>
      </div>

      {cartitems.length === 0 && (
        <div>
          <img
            className="m-auto w-[400px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          />
          <h1 className="font-bold m-2 p-2 text-[#535665]">
            Your Cart is empty.
          </h1>
          <p className="text-[#7e808c]">
            You can go to home page to view more restaurants
          </p>
          <button className="m-8 p-3 bg-orange-400 text-white font-[600] mt-50">
            SEE RESTAURANTS NEAR YOU
          </button>
        </div>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
