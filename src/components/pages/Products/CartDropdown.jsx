import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  // Use optional chaining to avoid accessing properties of undefined
  const cartItems = useSelector((state) => state.cart.items );

  const handleItemClick = (item) => {
    window.location.href = `/product/${item.id}`;
  };

  return (
    <div className="absolute right-0 bg-white shadow-lg p-4 w-64 z-50">
      <h3 className="font-bold text-lg mb-2">Your Cart</h3>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between py-2 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item)} // Add onClick event
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/checkout" className="mt-4 block bg-yellow-500 text-white text-center py-2 rounded-lg">
        Checkout
      </Link>
    </div>
  );
};

export default CartDropdown;
