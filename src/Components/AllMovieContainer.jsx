import { useSelector } from "react-redux"
import MovieList from "./MovieList"
// This component is responsible for showing all rows
const AllMovieContainer = () => {
    const allMovies = useSelector(store => store?.movies)
    return (
        <div className="bg-black">
            <div className="-mt-72 pl-8 relative z-10">
                <MovieList title="Now Playing" movies={allMovies?.nowPlayingMovies} uniq_id='now-playing'/>
                <MovieList title="Popular" movies={allMovies?.popularMovies} uniq_id='popular' />
                <MovieList title="Top Rated" movies={allMovies?.topRatedMovies} uniq_id='top-rated' />
                <MovieList title="Upcoming" movies={allMovies?.upcomingMovies} uniq_id='upcoming'/>
            </div>


        </div>
    )
}

export default AllMovieContainer