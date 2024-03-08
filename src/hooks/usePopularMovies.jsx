// Custom hook for getting NowPLaying movies from TMDB API
import { useEffect } from "react";
import {popularMoviesURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import { addPopularMovies} from "../Utils/moviesSlice.jsx"
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(popularMoviesURL, APIOptions);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))

    };
    useEffect(() => {
        getPopularMovies();
    }, []);

}
export default usePopularMovies;
