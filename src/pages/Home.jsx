import React, { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "../components";

const Home = () => {
  const [getMovies, setGetMovies] = useState();

  //-------------- getMovies --------------//
  const getListOfMovies = async () => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        import.meta.env.VITE_MOVIE_API
      }`
    );
    console.log("movies from Api", result.data);
    setGetMovies(result.data);
  };
  useEffect(() => {
    getListOfMovies();
  }, []);

  //-------------------------------------//

  return (
    <div className="bg-[#DFD3D3] p-3 md:p-5">
      <div className="flex justify-center">
        <MovieCard getMovies={getMovies} />
      </div>
    </div>
  );
};

export default Home;
