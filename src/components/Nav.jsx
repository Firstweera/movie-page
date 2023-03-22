import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="shadow-lg w-full p-4 bg-[#7C7575]">
      <div className="flex justify-between">
        <div className="pl-3">
          <Link to="/">
            <p className="font-normal text-lg md:text-xl hover:text-gray-400">
              THE MOVIES DB
            </p>
          </Link>
        </div>
        <div className="text-right">
          <input
            type="text"
            className="border-2 rounded-md pl-2 w-3/5 md:w-full"
            placeholder="search..."
          />
        </div>
      </div>
    </div>
  );
};
