import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
	const location = useLocation();

	useEffect(() => {
		console.log(location.pathname);
	}, [location])
	

  return (
    <>
      {showSearch && (
        <div className="border-t border-b bg-gray-50 text-center py-4">
          <div className="inline-flex items-center justify-center border border-gray-400 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="flex-1 bg-inherit text-sm border-transparent focus:border-transparent focus:ring-0"
            />
            {/* Uncomment this line if you want to display the search icon */}
            <img className="w-4" src={assets.search_icon} alt="Search Icon" />
          </div>
          <img
            onClick={() => setShowSearch(false)}
            className="inline w-3 cursor-pointer"
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
