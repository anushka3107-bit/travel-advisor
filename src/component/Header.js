import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-between w-full h-20 shadow-[0px_5px_20px_rgba(0,0,0,0.15)] ">
        <div className="flex items-center justify-center cursor-pointer px-3  border border-gray-200 rounded-full shadow-[rgba(50,50,105,0.15) 0px 2px 5px 0px, rgba(0,0,0,0.05) 0px 1px 1px 0px]">
          <BsFillCalendarCheckFill />
          <span className="font-bold pl-3">Enter Date</span>
        </div>

        <div className="flex w-3/5 cursor-pointer border border-gray-200 h-10 bg-white mt-5 m-2 px-[15px] py-2 rounded-[50px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
          <div className="flex justify-center items-center w-[10%] ">
            <FaSearch className="text-md  text-gray-500 font-bold" />
          </div>
          <input
            className="w-[75rem] text-gray-500 bg-transparent justify-left outline-none"
            type="text"
            placeholder="Where to ?"
          />
        </div>

        <div className="flex text-md cursor-pointer items-center justify-end mr-5 ml-0 ">
          <div className="text-gray-600 py-2 px-4  border border-gray-200 rounded-full">
            <span>Filters</span>
          </div>
          <div className="text-gray-600 py-2 px-4 ml-3 border border-gray-200 rounded-full">
            <span>Attractions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
