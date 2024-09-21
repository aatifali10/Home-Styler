import  { useState } from 'react';
import ProductCard from '../home/ProductCard';
import { homeproducts1 } from "../../../constants/homeproducts"; 

const FurnitureHero = () => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [activeTab, setActiveTab] = useState('All Products'); 

    const allProducts = [ ...homeproducts1]; 

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setActiveTab(category); 
    };

    const filteredProducts = () => {
        switch (currentCategory) {
            case 'Sofa and Couches':
                return allProducts ;// Specific array for sofas
            case 'Chairs and Recliners':
                return allProducts;// Specific array for chairs
            case 'Tables':
                return allProducts; // Specific array for tables
            case 'Beds and Mattresses':
                return allProducts; // Specific array for beds
            case 'All Products':
                return allProducts; // All products
            default:
                return allProducts; // Filtered products
        }
    };

    return (
        <div>
            <div className='w-full flex flex-col items-center justify-center py-10 gap-5'>
                <h1 className='text-4xl font-bold'>Furniture</h1>

                <div className='flex flex-col md:flex-row lg:flex-row gap-2 mb-6'>
                    {['All Products', 'Sofa and Couches', 'Chairs and Recliners', 'Tables', 'Beds and Mattresses', 'Storage'].map((category) => (
                        <div 
                            key={category} 
                            className={`cursor-pointer px-2 lg:px-4 py-1 lg:py-2 rounded-lg transition duration-300 
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
}

export default FurnitureHero;
