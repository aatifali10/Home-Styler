import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = React.useState(JSON.parse(localStorage.getItem("wishlist")) || []);

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlist.filter(id => id !== itemId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-4 pt-28">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((itemId) => (
            <li key={itemId} className="flex justify-between items-center mb-2">
              <Link to={`/products/${itemId}`} className="text-blue-500">
                Product {itemId}
              </Link>
              <button 
                onClick={() => removeFromWishlist(itemId)} 
                className="text-red-500 ml-4 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
