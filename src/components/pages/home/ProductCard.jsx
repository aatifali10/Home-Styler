import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id, description, category }) => {
  const [isWishlisted, setIsWishlisted] = useState(
    () => JSON.parse(localStorage.getItem("wishlist"))?.includes(id) || false
  );

  const formatCategory = () => {
    switch (category) {
      case "bedroom":
        return "Bedroom";
      case "living-room":
        return "Living Room";
      case "home-office":
        return "Home Office";
      case "bathroom":
        return "Bathroom";
      case "kitchen":
        return "Kitchen";
      default:
        return "";
    }
  };

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!isWishlisted) {
      wishlist.push(id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      const updatedWishlist = wishlist.filter(itemId => itemId !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="w-full px-4 max-w-sm mx-auto group overflow-hidden rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-[80%] h-48 mx-auto object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className="absolute top-4 right-4 p-2 rounded-full transition-transform duration-300 cursor-pointer"
          onClick={toggleWishlist}
        >
          {isWishlisted ? (
            <FaHeart className="text-yellow-500 w-6" />
          ) : (
            <FaRegHeart className="text-gray-500 w-6" />
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-xs text-gray-500 font-medium">{formatCategory()}</p>
        <p className="text-lg text-yellow-500 font-semibold mt-1">{name}</p>
        <p className="text-sm text-gray-700 font-light mt-1 text-center">
          {description}
        </p>
        <div className="flex justify-between w-full mt-2">
          <p className="text-base text-black font-medium">${price}</p>
          <p className="text-sm text-black font-medium">Rating: 5.4</p>
        </div>
        <Link to={`/products/${id}`} className="mt-4 w-full">
          <button className="bg-yellow-500 w-full py-2 rounded-md uppercase text-xs font-medium text-white hover:bg-yellow-600 transition duration-300">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
