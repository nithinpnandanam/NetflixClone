import { useDispatch, useSelector } from "react-redux";
import languageWords from "../Utils/languageWords";
import { useRef, useState } from "react";
import openai from "../Utils/openAI";
import { APIOptions } from "../Utils/constants";
import { addGPTMovieResult } from "../Utils/gptSlice";

const MovieSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.lang.selectedLang);
  const gpt = useSelector((store) => store.gpt);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const getSingleMovieDetail = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      APIOptions
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchFake = async (gptMoviesModified) => {

    const allMovieDetails = gptMoviesModified.map((movie) =>
      getSingleMovieDetail(movie)
    );
    // allMovieDetails = [Promise1,Promise2,Promise3,Promise4,Promise5] since getSingleMovieDetail is an asynchronous function
    const tmdbFinalResult = await Promise.all(allMovieDetails);
    // Promise.all takes in an array of promises
    dispatch(
      addGPTMovieResult({
        tmdbFinalResult: tmdbFinalResult,
        gptMoviesModified: gptMoviesModified,
      })
    );
  };

  const questionSuggestion = {
    [languageWords[selectedLang]["Horror Movies"]]: [
      "The Exorcist",
      "Hereditary",
      "The Conjuring",
      "A Nightmare on Elm Street",
      "The Shining",
      "It",
    ],
    [languageWords[selectedLang]["Thriller Movies"]]: [
      "Se7en",
      "The Silence of the Lambs",
      "Gone Girl",
      "Shutter Island",
      "Fight Club",
      "Zodiac",
    ],
    [languageWords[selectedLang]["Romcom Movies"]]: [
      "Crazy, Stupid, Love",
      "10 Things I Hate About You",
      "The Proposal",
      "When Harry Met Sally",
      "Notting Hill",
      "50 First Dates",
    ],
    [languageWords[selectedLang]["Top Rated Movies"]]: [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "The Godfather: Part II",
      "12 Angry Men",
      "Schindler's List",
    ],
    [languageWords[selectedLang]["Animated Movies"]]: [
      "Spirited Away",
      "Toy Story",
      "The Lion King",
      "Coco",
      "Inside Out",
      "Finding Nemo",
    ],
  };

  const getQuestionFromUser = (element) => {
    searchText.current.value = element;
    handleGptSearchFake(questionSuggestion[element])
  };
  return (
    <div
      className={`p-4 pt-80 ${
        gpt.gptMoviesModifiedStore === null ? "" : " bg-black opacity-80"
      }`}
    >
      <form
        action=""
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col w-6/12">
          <input
            className="pl-4 py-2 "
            placeholder={languageWords[selectedLang].searchPlaceHolder}
            type="text"
            ref={searchText}
            onClick={() => setShowSuggestions(true)}
          />

          <div className="w-full bg-slate-400 rounded-lg">
            {showSuggestions && Object.keys(questionSuggestion).map((element, index) => {
              return (
                <p
                  className="p-[10px]"
                  key={index}
                  onClick={() => {
                    getQuestionFromUser(element)
                    setShowSuggestions(false)
                  }}
                >
                  {element}
                </p>
              );
            })}
          </div>
        </div>

        {/* <button
          className="bg-[rgb(193,17,25)] ml-3 px-4 py-2 h-1/4 text-white rounded-lg"
          onClick={handleGptSearchFake}
        >
          {languageWords[selectedLang].search}
        </button> */}
      </form>
    </div>
  );
};

export default MovieSearch;
