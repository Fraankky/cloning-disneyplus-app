import { API_KEY } from "../constants";
import useFetch from "./useFetch";

const useGenres = () => {
  // fetching data 
  const { data: dataMovieGenre, loading:loadingMovieGenre} = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  const { data: dataTvGenre, loading: loadingTvGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`
  );

  
  return {
    // kalo request must use loading to make users experience more comfort
    loading: loadingMovieGenre || loadingTvGenre,
    genres: [
        ...(dataMovieGenre?.genres || []),
        ...(dataTvGenre?.genres || [])
    ]
  }
};

export default useGenres;
