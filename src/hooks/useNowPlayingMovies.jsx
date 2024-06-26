// Custom hook for getting NowPLaying movies from TMDB API
import { useEffect } from "react";
import {upcomingMoviesURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies} from "../Utils/moviesSlice.jsx"
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(upcomingMoviesURL, APIOptions);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))

    };
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}
export default useNowPlayingMovies;