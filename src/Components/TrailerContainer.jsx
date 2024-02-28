import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux"
const TrailerContainer = () =>{
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies)
    if (!movies) return;// (!movies) means movies === null This process is called early return
    const mainMovie = movies[0]
    const {original_title,overview,id} = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id}/>
        </div>
    )
}
export default TrailerContainer