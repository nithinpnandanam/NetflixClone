import {  useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({id}) => {
    useMovieTrailer(id)
    const trailerId = useSelector(store=>store?.movies?.trailerId)
    return (
        <div>
            <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+trailerId} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}
export default VideoBackground