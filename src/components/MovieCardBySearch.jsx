import React from "react";
import { HiStar } from "react-icons/hi";

export const MovieCardBySearch = ({
  getSearch,
  overviewToggle,
  updateToggleIndex,
  setOverviewToggle,
}) => {
  // console.log(getMovies?.results.map((r, idx) => idx));

  return (
    <div className="py-3 px-5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {getSearch?.results.map((r, idx) => (
          <div
            key={idx}
            className="cursor-pointer bg-secondary text-text rounded-md shadow-md "
            onClick={() => updateToggleIndex(idx)}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  r.poster_path ?? r.backdrop_path
                }`}
                alt={r.name ?? r.title}
                className="rounded-t-md"
              />
            </div>
            <div className="flex justify-between p-3">
              <p className="">{r.name ?? r.title}</p>
              <div className="flex space-x-1 items-center">
                <HiStar className=" text-amber-400" />
                <p className="">{r.vote_average.toFixed(2)}</p>
              </div>
            </div>

            {overviewToggle[idx] && (
              <div className="w-full h-screen left-0 top-0 fixed flex bg-gray-500/30 backdrop-blur-sm">
                <div className="flex flex-col m-auto bg-secondary p-5 w-4/5 rounded-md">
                  <div className="mb-4 flex justify-between">
                    <p className="font-bold">Overview:</p>
                    <button
                      className="cursor-pointer hover:font-bold"
                      onClick={() => setOverviewToggle(!overviewToggle)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="lg:flex lg:space-x-5">
                    <div className="flex justify-center mb-5 lg:w-6/12">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${
                          r.backdrop_path ?? r.poster_path
                        }`}
                        alt="posterMovie"
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2 lg:space-y-5 lg:w-6/12">
                      <p className="text-sm font-semibold">
                        {r.name ?? r.title} :
                      </p>
                      <p className="text-sm text-slate-400 uppercase">
                        {r.first_air_date ?? r.release_date
                          ? (r.first_air_date ?? r.release_date).slice(0, 4)
                          : ""}{" "}
                        | {r.media_type} | {r.original_language}
                      </p>
                      <p className="text-sm indent-8 lg:pt-10">{r.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
