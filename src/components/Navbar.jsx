import { useState, useRef } from "react";
import { CgIfDesign } from "react-icons/cg";
import { BsFillBasketFill, BsHeart } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons for light and dark mode
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import CartDropdown from "./pages/Products/CartDropdown";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const dropdownRef = useRef(null);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const [showCart, setShowCart] = useState(false);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeoutId);
  };

  const wishlistCount =
    JSON.parse(localStorage.getItem("wishlist"))?.length || 0;

  return (
    <nav
      className={`w-full h-20 flex items-center justify-between ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } fixed z-50 px-4 lg:px-16 shadow`}
    >
      <Link to="/" className="flex items-center gap-x-1">
        <CgIfDesign
          className={`text-3xl ${
            isDarkMode ? "text-yellow-500" : "text-yellow-600"
          }`}
        />
        <h1
          className={`uppercase font-semibold text-xl ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          HOME DECOR
        </h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-x-10">
        <li>
          <Link
            to="/"
            className={`text-base font-medium ${
              isDarkMode ? "text-white" : "text-black"
            } hover:text-yellow-500`}
          >
            Home
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <Link to="/category">
            <button
              className={`text-base font-medium ${
                isDarkMode ? "text-white" : "text-black"
              } hover:text-yellow-500`}
            >
              Category
            </button>
          </Link>
          {isDropdownOpen && (
            <ul className="absolute left-0 w-40 bg-white shadow-lg py-1 z-10">
              <li>
                <Link
                  to="/furniture"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/decor"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Decor
                </Link>
              </li>
              <li>
                <Link
                  to="/lighting"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Lighting
                </Link>
              </li>
              <li>
                <Link
                  to="/kitchen"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Kitchen
                </Link>
              </li>
              <li>
                <Link
                  to="/bathroom"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Bathroom
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/about-us"
            className={`text-base font-medium ${
              isDarkMode ? "text-white" : "text-black"
            } hover:text-yellow-500`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={`text-base font-medium ${
              isDarkMode ? "text-white" : "text-black"
            } hover:text-yellow-500`}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className={`text-base font-medium ${
              isDarkMode ? "text-white" : "text-black"
            } hover:text-yellow-500`}
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <BsFillBasketFill
              className={`text-xl ${
                isDarkMode ? "text-yellow-500" : "text-yellow-600"
              }`}
            />
          </Link>
        </li>

        <li>
          <Link to="/wishlist" className="flex items-center">
            <BsHeart
              className={`text-xl ${
                isDarkMode ? "text-yellow-500" : "text-yellow-600"
              }`}
            />
            {wishlistCount > 0 && (
              <span className="ml-1 text-sm">{wishlistCount}</span>
            )}
          </Link>
        </li>
        <li className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-xl text-yellow-600" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
            {showCart && <CartDropdown />}
          </Link>
        </li>
      </ul>

      {/* Theme Toggle Icons */}
      <button
        onClick={toggleTheme}
        className={`mt-4 p-2 rounded ${
          isDarkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-xl" />
        ) : (
          <FaMoon className="text-xl" />
        )}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center"
        onClick={() => setOpenNav(!openNav)}
      >
        <IoMenu
          className={`text-xl ${
            isDarkMode ? "text-yellow-500" : "text-yellow-600"
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-20 flex justify-end ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500`}
        onClick={() => setOpenNav(false)}
      >
        <div
          className={`bg-white w-3/5 md:w-2/5 h-full shadow-xl p-4 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <button
            className="bg-yellow-500 w-8 h-8 flex items-center justify-center"
            onClick={() => setOpenNav(false)}
          >
            <IoClose className="text-xl" />
          </button>
          <ul className="flex flex-col items-start gap-y-3 mt-8">
            <li>
              <Link
                to="/"
                className={`text-base font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-yellow-500`}
              >
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button
                className={`text-base font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-yellow-500`}
              >
                Category
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 w-40 bg-white shadow-lg py-1 z-10">
                  <li>
                    <Link
                      to="/furniture"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Furniture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/decor"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Decor
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lighting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kitchen"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Kitchen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bathroom"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Bathroom
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/about-us"
                className={`text-base font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-yellow-500`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`text-base font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-yellow-500`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className={`text-base font-medium ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-yellow-500`}
              >
                Feedback
              </Link>
            </li>
          </ul>
          {/* Theme Toggle Icons in Mobile Menu */}
          <button
            onClick={toggleTheme}
            className={`mt-4 py-2 px-4 rounded ${
              isDarkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {isDarkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
