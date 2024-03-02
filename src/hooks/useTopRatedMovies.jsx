// Custom hook for getting TopRatedMovies movies from TMDB API
import { useEffect } from "react";
import {topRatedMoviesURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import { addTopRatedMovies} from "../Utils/moviesSlice.jsx"
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(topRatedMoviesURL, APIOptions);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    };
    useEffect(() => {
        getTopRatedMovies();
    }, []);

}
export default useTopRatedMovies;