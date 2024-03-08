import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import TrailerContainer from "./TrailerContainer"
import AllMovieContainer from "./AllMovieContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  const gpt = useSelector((store) => store.gpt)

  return (
    <div>
      <Header />
      {
        gpt.showGptsearch ? <GptSearch /> : <>
          <TrailerContainer />
          <AllMovieContainer />
        </>
      }
    </div>
  );
};
export default Browse;
