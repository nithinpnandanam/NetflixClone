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
  
  const backgroundStyle = {
    backgroundImage:
      'url("https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
    backgroundSize:"cover",
  };
  return (
    <div className={`${gpt.gptMoviesModifiedStore===null?'h-screen':''}`} style={backgroundStyle}>
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
