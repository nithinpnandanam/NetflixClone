import GptSearchBar from "./GptSearchBar"
import GptShowSuggestions from "./GptShowSuggestions"

const GptSearch = () => {
    return (
        <div className="flex flex-col " >
            <GptSearchBar/>
            <GptShowSuggestions/>
        </div>
    )
}
export default GptSearch