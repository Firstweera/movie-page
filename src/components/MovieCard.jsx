import React from "react";
import { HiStar } from "react-icons/hi";

export const MovieCard = ({ getMovies }) => {
  return (
    <div className="px-3 md:w-4/5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {getMovies?.results.map((r, idx) => (
          <div key={idx} className="shadow-lg">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w500${r.poster_path}`}
                alt="posterMovie"
              />
            </div>
            <div className="flex justify-between p-3">
              <p className="">{r.name ?? r.title}</p>
              <div className="flex space-x-1 items-center">
                <HiStar className=" text-amber-400" />
                <p className="">{r.vote_average.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
