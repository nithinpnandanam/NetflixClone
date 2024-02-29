import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrailerContainer from "./TrailerContainer"
import AllMovieContainer from "./AllMovieContainer";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <TrailerContainer />
      <AllMovieContainer/>
    </div>
  );
};

export default Browse;
