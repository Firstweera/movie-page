import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMovie = () => {
  const [getMovies, setGetMovies] = useState();
  const [overviewToggle, setOverviewToggle] = useState([]);

  console.log("toggle status", overviewToggle);

  useEffect(() => {
    const getListOfMovies = async () => {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${
            import.meta.env.VITE_MOVIE_API
          }`
        );
        console.log("movies from Api", result.data);
        setGetMovies(result.data);
        const tempArr = [...Array(result.data?.length)];
        const updatedAccordion = tempArr.map(() => false);
        console.log("Map false in arr", updatedAccordion);
        setOverviewToggle(updatedAccordion);
      } catch (err) {
        console.error(err);
      }
    };
    getListOfMovies();
  }, []);

  const updateToggleIndex = (idx) => {
    const newToggles = [...overviewToggle];
    newToggles[idx] = !newToggles[idx];
    setOverviewToggle(newToggles);
  };

  return { getMovies, overviewToggle, setOverviewToggle, updateToggleIndex };
};
