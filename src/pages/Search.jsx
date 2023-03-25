import React from "react";
import { MovieCardBySearch } from "../components";
import { useSearchMovie } from "../hooks";

export const Search = () => {
  const { getSearch, overviewToggle, updateToggleIndex, setOverviewToggle } =
    useSearchMovie();

  return (
    <div className="mt-12 bg-background h-screen">
      <div className="pt-5">
        <MovieCardBySearch
          getSearch={getSearch}
          overviewToggle={overviewToggle}
          updateToggleIndex={updateToggleIndex}
          setOverviewToggle={setOverviewToggle}
        />
      </div>
    </div>
  );
};
