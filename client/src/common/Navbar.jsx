import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "../components/SearchBar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => setVisible(!visible);
  const closeMenu = () => setVisible(false);

	const {setShowSearch} = useContext(ShopContext);


  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl  mt-3.5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <NavLink className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={assets.logo} className="mb-5 w-14" alt="Logo" />
            </NavLink>
          </div>

          <button
            onClick={toggleMenu}
            className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav
            aria-label="Global"
            className="hidden md:flex md:items-center md:gap-12"
          >
            <ul className="flex flex-row items-center gap-6 text-sm">
              <li>
                <NavLink
                  to="/collection"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "font-bold text-teal-600 transition-all duration-300" // Active: teal color, bold, and transition
                        : "text-gray-500 hover:text-teal-600 transition-all duration-300" // Inactive: default gray color and hover teal
                  }
                >
                  Collection
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/about"
                  className={
                    ({ isActive }) =>
                      isActive
                        ? "font-bold text-teal-600 transition-all duration-300" // Active: teal color, bold, and transition
                        : "text-gray-500 hover:text-teal-600 transition-all duration-300" // Inactive: default gray color and hover teal
                  }
                >
                  About
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Products
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Contact
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Register
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/place-order"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-teal-600 transition-all duration-300"
                      : "text-gray-500 hover:text-teal-600 transition-all duration-300"
                  }
                >
                  Place Order
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 ml-2">
            <div className="sm:flex sm:gap-4">
						
							<a
                className="px-2 py-2.5"
                href="#"
              >
									<img src={assets.search_icon} onClick={()=> setShowSearch(true)} alt="Search bar"  className="w-5 cursor-pointer"/>
              </a>


              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-0 bg-white p-8 flex flex-col items-center justify-center">
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li>
                <NavLink
                  to="/collection"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-gray-700" // Bold font for active link
                      : "text-gray-700"
                  }
                >
                  Collection
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-gray-700" // Bold font for active link
                      : "text-gray-700"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/place-order"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "font-bold text-gray-700" : "text-gray-700"
                  }
                >
                  Place Order
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}

			<SearchBar />
    </header>
  );
};

export default Navbar;
