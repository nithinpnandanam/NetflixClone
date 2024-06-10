import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const GptShowSuggestions = () => {
    const { gptMoviesModifiedStore, tmdbFinalResultStore } = useSelector(store => store?.gpt)
    const gpt = useSelector((store) => store.gpt)
    return gptMoviesModifiedStore &&  (
        <div className="bg-black opacity-80">
            {gptMoviesModifiedStore?.map((movieName, index) => (
                <MovieList
                    key={movieName}
                    title={movieName}
                    movies={tmdbFinalResultStore[index]}
                />
            ))}
        </div>
    )
}
export default GptShowSuggestions