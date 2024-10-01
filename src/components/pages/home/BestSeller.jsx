import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import { homeproducts2 } from "../../../constants/homeproducts"; // Assuming you still want to use static data here

const BestSeller = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch product data (replace URL with your API endpoint if needed)
    const fetchProducts = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setBestProducts(data.slice(0, 8)); // Assuming data is an array
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`w-full px-10 py-6 lg:py-24 flex flex-col gap-y-8`}>
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
          BEST SELLER
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
          Discover Our <br /> Most Selling Products
        </h2>
        <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all best sellers
        </button>
      </div>
      <div className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6`}>
        {bestProducts?.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            id={product.id}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
