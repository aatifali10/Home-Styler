import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((e) => (
          <div key={e.id} className="border rounded-lg shadow-lg p-4 bg-white">
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{e.name}</h3>
              <p className="text-gray-600">Price: ${e.price}</p>
              <p className="text-gray-600">Quantity: {e.quantity}</p>
              <div className="grid lg:grid-cols-2 gap-10">
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                  Remove item
                </button>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
