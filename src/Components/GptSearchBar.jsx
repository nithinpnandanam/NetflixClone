import { useDispatch, useSelector } from "react-redux"
import languageWords from "../Utils/languageWords"
import { useRef } from "react"
import openai from "../Utils/openAI"
import { APIOptions } from "../Utils/constants"
import { addGPTMovieResult } from "../Utils/gptSlice"
const GptSearchBar = () => {
    const searchText = useRef(null)
    const dispatch = useDispatch()
    const selectedLang = useSelector(store => store.lang.selectedLang)
    const gpt = useSelector((store) => store.gpt)

    const getSingleMovieDetail = async(movieName)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, APIOptions)
        const json = await data.json()
        return json.results
    }
    // const handleGptSearch = async() => {
    //     const gptQuery =
    //         "Act as a movie recommendation system and suggest some movies for the query: " +
    //         searchText.current.value +
    //         ". Only give me names of five movies, comma separated like the given example ahead. Example: movie1, movie2, movie3, movie4, movie5";

    //     const gptResult = await openai.chat.completions.create({
    //         messages: [{ role: "user", content: gptQuery }],
    //         model: "gpt-3.5-turbo",
    //     });
    //     const gptMovies = gptResult.choices[0]?.message?.content
    //     console.log("gptMovies",gptMovies)
    //     const gptMoviesModified = gptMovies.split(',')
    //     console.log("gptMoviesModified",gptMoviesModified)
    //     const allMovieDetails = gptMoviesModified.map(movie => getSingleMovieDetail(movie))
    //     // allMovieDetails = [Promise1,Promise2,Promise3,Promise4,Promise5] since getSingleMovieDetail is an asynchronous function
    //     const tmdbFinalResult = await Promise.all(allMovieDetails)
    //     // Promise.all takes in an array of promises
    //     dispatch(addGPTMovieResult({tmdb_final_result:tmdbFinalResult,gpt_movies_modified:gptMoviesModified}))
        
    // }
    const handleGptSearchFake = async() => {

        const gptMoviesModified = ['12th Fail','Nayakan','Anbe Sivam','3 Idiots']
        const allMovieDetails = gptMoviesModified.map(movie => getSingleMovieDetail(movie))
        // allMovieDetails = [Promise1,Promise2,Promise3,Promise4,Promise5] since getSingleMovieDetail is an asynchronous function
        const tmdbFinalResult = await Promise.all(allMovieDetails)
        // Promise.all takes in an array of promises
        dispatch(addGPTMovieResult({tmdbFinalResult:tmdbFinalResult,gptMoviesModified:gptMoviesModified}))
        
    }
    return (
        <div  className={`p-4 pt-80 ${gpt.gptMoviesModifiedStore===null?'':' bg-black opacity-80'}`} >
            <form action="" className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
                <input className="pl-4 py-2 w-6/12" placeholder={languageWords[selectedLang].searchPlaceHolder} type="text" ref={searchText} />
                <button className="bg-[rgb(193,17,25)] ml-3 px-4 py-2 h-1/4 text-white rounded-lg" onClick={handleGptSearchFake}>{languageWords[selectedLang].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar