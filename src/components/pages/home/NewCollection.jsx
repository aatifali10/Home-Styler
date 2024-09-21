import { NewCollectionImg } from "../../../assets/export";
import ProductCard from "./ProductCard";
import { homeproducts1 } from "../../../constants/homeproducts";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <div className={`w-full  py-6 lg:py-24`}>
      <div className="w-full grid grid-cols-2 gap-6">
        <div className="col-span-2 lg:col-span-1 lg:pr-14">
          <img src={NewCollectionImg} alt="" className="h-96 w-full" />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-8 justify-center">
          <div className="flex items-center justify-start gap-x-3">
            <div className="border w-24 border-yellow-500" />
            <p className="text-yellow-500 font-normal text-sm uppercase">
              new collection
            </p>
          </div>
          <h2 className="text-4xl font-bold">
            A Perfect Set For Your Living Room
          </h2>
          <p className="text-base font-normal leading-7">
            Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur
            faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas
            faucibus vulputate pharetra nunc sed maecenas diam quisque
            habitasse.
          </p>
          <div>
            <Link
              to={"/products"}
              className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium hover:text-white transition-all duration-100"
            >
              shop this collection
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:pt-24`}
      >
        {homeproducts1.map((product, index) => {
          return (
            <ProductCard
              name={product.name}
              price={product.price}
              id={product.id}
              category={product.category}
              image={product.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
