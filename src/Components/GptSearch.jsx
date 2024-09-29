import GptSearchBar from "./GptSearchBar"
import MovieSearch from "./MovieSearch"
import GptShowSuggestions from "./GptShowSuggestions"

const GptSearch = () => {
    return (
        <div className="flex flex-col " >
            {/* <GptSearchBar/> */}
            <MovieSearch/>
            <GptShowSuggestions/>
        </div>
    )
}
export default GptSearch