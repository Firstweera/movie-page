import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../App";
import axios from "axios";

export const useSearchMovie = () => {
  const { movieName } = useContext(MovieContext);
  const [getSearch, setGetSearch] = useState();
  const [overviewToggle, setOverviewToggle] = useState([]);

  //---------------- Get list of movie By search ------------------//

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_MOVIE_API
          }&language=en-US&query=${movieName}&page=1&include_adult=false`
        );
        console.log("search Movie", result.data);
        setGetSearch(result.data);
        const tempArr = [...Array(result.data?.length)];
        const updatedAccordion = tempArr.map(() => false);
        console.log("Map false in arr", updatedAccordion);
        setOverviewToggle(updatedAccordion);
      } catch (err) {
        console.error(err);
      }
    };
    if (movieName) {
      getSearchMovie();
    }
  }, [movieName]);

  const updateToggleIndex = (idx) => {
    const newToggles = [...overviewToggle];
    newToggles[idx] = !newToggles[idx];
    setOverviewToggle(newToggles);
  };

  // --------------------------------------------------------------//

  return { getSearch, overviewToggle, updateToggleIndex, setOverviewToggle };
};
