import dropdownwhite from "../assets/dropdown.svg";
import searchlogo from "../assets/searchlogo.svg";
import cart from "../assets/cart.svg";
import { useState } from "react";
import NestedDropdown from "./NestedDropdown";

const SearchArea = () => {
  const [toggleDropown, setToggleDropown] = useState<boolean>(false);

  return (
    <div className="bg-primary h-20 flex justify-between items-center px-6 sm:px-8 md:px-16 lg:px-24 text-white relative">
      {/* left */}
      <ul className="flex gap-8">
        <li className="flex flex-col justify-center items-center gap-2">
          <div className="flex">
            <span>Explore</span>
            <img
              src={dropdownwhite}
              alt="dropdown"
              className="cursor-pointer"
              onClick={() => setToggleDropown(!toggleDropown)}
            />
          </div>
          {toggleDropown && (
            <NestedDropdown
              toggleDropown={toggleDropown}
              setToggleDropown={setToggleDropown}
            />
          )}
        </li>
        <li>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={searchlogo}
                alt="search"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
              placeholder="Type skill here"
            />
          </div>
        </li>
      </ul>

      {/* right */}
      <div className="flex justify-center items-center gap-4">
        <img src={cart} alt="cart" />
        <h5>Cart</h5>
      </div>
    </div>
  );
};

export default SearchArea;
