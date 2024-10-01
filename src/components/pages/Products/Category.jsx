import { useEffect, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlice"; // Import addToCart action
import { products as availableProducts } from "../../../constants/homeproducts"; // Assuming you have this as your available products
import { useParams } from "react-router-dom"; // Import useParams

const Category = () => {
  const [filteredProducts, setFilteredProducts] = useState(availableProducts);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("");
  const dispatch = useDispatch();

  // Get the product ID from URL params (if needed)
  const { id } = useParams(); 
  const products = useSelector((state) => state.cart.items); // Ensure you're accessing the correct state structure

  // Check if products is an array and then find the product
  const product = Array.isArray(products) ? products.find((prod) => prod.id === parseInt(id)) : null;

  useEffect(() => {
    const filtered = availableProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        product.category.toLowerCase().includes(filterCriteria.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === "price") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

    setFilteredProducts(sorted);
  }, [searchQuery, filterCriteria, sortCriteria]); // Removed products from dependency as it's not needed here

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`${product.name} added to cart`); // Alert to notify the user
  };

  return (
    <>
      
    <div className="py-20 w-full grid grid-cols-1 lg:grid-cols-3">
      {/* Sidebar for search, filter, and sort */}
      <div className="w-[30%] pt-28 lg:col-span-1 w-full lg:fixed top-2">
        <div className="w-full px-8 lg:px-28 pt-5">
          <h2 className="text-2xl font-bold">Products</h2>
        </div>
        <div className="w-full flex flex-col pt-4 pb-20 px-8 lg:px-28 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              
              placeholder="Search by name"
              className="border border-transparent outline-none flex-1 px-2 placeholder-black"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
            <FaFilter className="text-gray-500" />
            <input
              type="text"
              value={filterCriteria}
              onChange={handleFilterChange}
              placeholder="Enter category"
              className="border border-transparent outline-none flex-1 px-2 placeholder-black"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4">
            <label htmlFor="sort" className="font-medium text-black">
              Sort by:
            </label>
            <select
              id="sort"
              onChange={handleSortChange}
              className="border border-transparent outline-none w-full text-black"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>
      {/* Products Grid */}
      <div className="py-20 lg:col-span-2 lg:ml-[320px]">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <li key={product.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="mt-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Category;
