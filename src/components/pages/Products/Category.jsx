import { useEffect, useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import CategoryCart from './CategoryCart';
import { products } from "../../../constants/homeproducts";

const Category = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sortCriteria, setSortCriteria] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('');

    useEffect(() => {
        const filtered = products
            .filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                product.category.toLowerCase().includes(filterCriteria.toLowerCase())
            );

        const sorted = filtered.sort((a, b) => {
            if (sortCriteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortCriteria === 'price') {
                return a.price - b.price;
            } else {
                return 0;
            }
        });

        setFilteredProducts(sorted);
    }, [searchQuery, filterCriteria, sortCriteria]);

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterCriteria(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='py-20 w-full grid grid-cols-3'>
            <div className='col-span-1 fixed top-2'>
                <div className='w-full px-28 pt-5'>
                    <h2 className='text-2xl font-bold'>Products</h2>
                </div>
                <div className='w-full flex flex-col pt-4 pb-20 px-28 gap-6'>
                    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
                        <FaSearch className="text-gray-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search by name"
                            className='border border-transparent outline-none flex-1 px-2'
                        />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-2">
                        <FaFilter className="text-gray-500" />
                        <input
                            type="text"
                            value={filterCriteria}
                            onChange={handleFilterChange}
                            placeholder="Enter category"
                            className='border border-transparent outline-none flex-1 px-2'
                        />
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <label htmlFor="sort" className='font-medium'>Sort by:</label>
                        <select id="sort" onChange={handleSortChange} className='border border-transparent outline-none w-full'>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='py-20 col-span-2 relative left-96'>
                <ul className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            <CategoryCart
                                name={product.name}
                                price={product.price}
                                id={product.id}
                                category={product.category}
                                image={product.image}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Category;
