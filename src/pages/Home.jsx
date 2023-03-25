import React from "react";
import { MovieCard, Carousel } from "../components";
import { useFetchMovie } from "../hooks";

export const Home = () => {
  const { getMovies, overviewToggle, setOverviewToggle, updateToggleIndex } =
    useFetchMovie();

  const top5Movies = getMovies?.results
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 5);

  console.log("top 5", top5Movies);

  return (
    <div className="mt-12 bg-background h-full">
      <div className="pt-8">
        <Carousel top5Movies={top5Movies} auto={true} interval={4000} />
      </div>
      <div className="mt-3 lg:flex lg:justify-center">
        <MovieCard
          getMovies={getMovies}
          overviewToggle={overviewToggle}
          updateToggleIndex={updateToggleIndex}
          setOverviewToggle={setOverviewToggle}
        />
      </div>
    </div>
  );
};
