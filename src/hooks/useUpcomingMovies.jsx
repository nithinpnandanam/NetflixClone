// Custom hook for getting Upcoming movies from TMDB API
import { useEffect } from "react";
import {nowplayingMoviesURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../Utils/moviesSlice.jsx"
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(nowplayingMoviesURL, APIOptions);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))

    };
    useEffect(() => {
        getUpcomingMovies();
    }, []);

}
export default useUpcomingMovies;