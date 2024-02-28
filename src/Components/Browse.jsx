import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TrailerContainer from "./TrailerContainer"
 
const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <TrailerContainer/>
    </div>
  );
};

export default Browse;
