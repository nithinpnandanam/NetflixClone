// Custom hook for getting NowPLaying movies from TMDB API
import { useEffect } from "react";
import {nowplayingURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies} from "../Utils/moviesSlice.jsx"
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(nowplayingURL, APIOptions);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results))

    };
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}
export default useNowPlayingMovies;