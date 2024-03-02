import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import TrailerContainer from "./TrailerContainer"
import AllMovieContainer from "./AllMovieContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header />
      <TrailerContainer />
      <AllMovieContainer/>
    </div>
  );
};

export default Browse;
// absolute px-8 w-screen aspect-video pt-[27rem] bg-gradient-to-r from-black