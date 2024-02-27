import { useEffect } from "react";
import Header from "./Header";
import { nowplayingURL, APIOptions } from "../Utils/constants";
const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(nowplayingURL, APIOptions);
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
