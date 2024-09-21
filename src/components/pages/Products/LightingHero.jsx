import { useState } from 'react';
import { homeproducts1, homeproducts2 } from '../../../constants/homeproducts';
import ProductCard from '../home/ProductCard';

const LightingHero = () => {
    const [currentCategory, setCurrentCategory] = useState('All Products'); // Default category
    const [activeTab, setActiveTab] = useState('All Products'); // Default active tab

    // Combine products into one array
    const allProducts = [...homeproducts1, ...homeproducts2];

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setActiveTab(category); // Update active tab when category changes
    };

    // Determine which products to display based on the selected category
    const filteredProducts = () => {
        if (currentCategory === 'All Products') {
            return allProducts; // Return all products
        }
        return allProducts.filter(product => product.category === currentCategory); // Return filtered products
    };

    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center py-10 gap-5'>
                <h1 className='text-4xl font-bold'>Lighting</h1>

                <div className='flex gap-4 mb-6'>
                    {['All Products', 'Ceiling Lights', 'Wall Lights', 'Floor Lights', 'Outdoor Lamps', 'Table Lamps'].map((category) => (
                        <div 
                            key={category} 
                            className={`cursor-pointer px-4 py-2 rounded-lg transition duration-300 
                                ${activeTab === category ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-yellow-500 hover:text-white'}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>

                <div className='w-full flex flex-col items-start justify-start px-6 lg:px-40'>
                    <h2 className='text-xl font-bold'>{activeTab}</h2>
                    <p className='mt-2'>
                        Displaying products for {activeTab}.
                    </p>
                </div>

                <div className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:pt-24`}>
                    {filteredProducts().length > 0 ? (
                        filteredProducts().map((product, index) => (
                            <ProductCard
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                category={product.category}
                                image={product.image}
                                key={index}
                            />
                        ))
                    ) : (
                        <p className='text-center col-span-full'>No products available for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LightingHero;
