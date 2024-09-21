import { useState } from "react";
import { homeproducts1, homeproducts2 } from "../../../constants/homeproducts";
import ProductCard from "../home/ProductCard";

const BathroomHero = () => {
  const [currentCategory, setCurrentCategory] = useState(""); // Default category
  const [activeTab, setActiveTab] = useState("All Products"); // Default active tab

  // Combine products into one array
  const allProducts = [...homeproducts1, ...homeproducts2];

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setActiveTab(category); // Update active tab when category changes
  };

  // Determine which products to display based on the selected category
  const filteredProducts = () => {
    switch (currentCategory) {
      case "Mirrors and Medicine Cabinets":
        return homeproducts1; // Adjust as needed
      case "Bathroom Sinks":
        return homeproducts2; // Adjust as needed
      case "All Products":
        return allProducts; // Return all products
      case "Toilets and Bidets":
        return homeproducts1; // Adjust as needed
      case "Showers and Bathtubs":
        return homeproducts2; // Adjust as needed
      case "Vanities and Cabinets":
        return homeproducts1; // Adjust as needed
      default:
        return allProducts; // Fallback to all products
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center py-10 gap-5">
        <h1 className="text-4xl font-bold">Bathroom</h1>

        <div className="flex gap-4 mb-6">
          {[
            "All Products",
            "Vanities and Cabinets",
            "Showers and Bathtubs",
            "Toilets and Bidets",
            "Bathroom Sinks",
            "Mirrors and Medicine Cabinets",
          ].map((category) => (
            <div
              key={category}
              className={`cursor-pointer px-4 py-2 rounded-lg transition duration-300 
                                ${
                                  activeTab === category
                                    ? "bg-yellow-500 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-yellow-500 hover:text-white"
                                }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className=" w-full flex flex-col items-start justify-start px-6 lg:px-40">
          <h2 className="text-xl font-bold">{activeTab}</h2>
          <p className="mt-2">Displaying products for {activeTab}.</p>
        </div>

        <div
          className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:pt-24`}
        >
          {filteredProducts().map((product, index) => (
            <ProductCard
              name={product.name}
              price={product.price}
              id={product.id}
              category={product.category}
              image={product.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BathroomHero;
