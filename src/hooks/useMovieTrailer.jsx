// Custom hook for getting NowPLaying movies from TMDB API
import { useEffect } from "react";
import {videoInfoURL,APIOptions} from "../Utils/constants.jsx"
import { useDispatch } from "react-redux";
import {addTrailerId} from "../Utils/moviesSlice"

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()
    const getMoviesVideo = async () => {
        const videoInfoURL_ = videoInfoURL.replace('movie_id', id);
        const data = await fetch(videoInfoURL_, APIOptions)
        const json = await data.json()
        const filteredMovieData = json.results.filter(element => element.type == "Trailer")
        //handling case when there is no Trailer 
        const trailer = filteredMovieData.length === 0 ? json.results[0] : filteredMovieData[0]
        dispatch(addTrailerId(trailer.key))
    }
    useEffect(() => {
        getMoviesVideo()
    }, [])
    
}
export default useMovieTrailer;