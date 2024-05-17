import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="text-black p-3 flex flex-wrap justify-between items-center border-y border-black">
      <div className="text-lg font-semibold flex-grow">
        <h1 className="ml-2 md:ml-12 text-[18px] md:text-[24px] font-bold">Task Quick View</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 sm:mt-0">
        <div className="ml-1">
          <button className="flex items-center px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <h1 className="text-[12px] md:text-[14px] font-semibold">Menu</h1>
            <AiFillCaretDown className="ml-2 text-[10px] mt-1" />
          </button>
        </div>
        <div>
          <button className="flex items-center ml-1.5 px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <h1 className="text-[12px] md:text-[14px] font-semibold">Refresh</h1>
          </button>
        </div>
        <div>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <h1 className="text-[12px] md:text-[14px] font-semibold">New</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
