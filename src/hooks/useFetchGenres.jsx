import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchGenres = () => {
  // const [genres, setGenres] = useState([]);
  //---------------- getGenres ----------//
  // useEffect(() => {
  //   const getGenres = async () => {
  //     try {
  //       const result = await axios.get(
  //         `http://api.themoviedb.org/3/genre/movie/list?api_key=${
  //           import.meta.env.VITE_MOVIE_API
  //         }`
  //       );
  //       console.log("get Genres", result.data);
  //       setGenres(result.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getGenres();
  // }, []);
  //---------------------------------------//
  // return { genres };
};
