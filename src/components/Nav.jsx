import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MovieContext } from "../App";

export const Nav = () => {
  const navigate = useNavigate();
  const { movieName, setMovieName } = useContext(MovieContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search`);
    }
  };

  return (
    <div className="shadow-lg w-full p-4 bg-primary fixed top-0 left-0 z-50">
      <div className="flex justify-between">
        <div className="pl-3">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3163/3163478.png"
                  alt="web-logo"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <div>
                <p className="text-text uppercase font-normal text-lg md:text-xl">
                  the pixels
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-right">
          <input
            type="text"
            className="border-2 placeholder:text-slate-400 bg-white rounded-md pl-2 w-4/5 md:w-full"
            placeholder="search..."
            name="search"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};
