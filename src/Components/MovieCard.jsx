// This component is responsible for showing a single poster within a row
import {posterCDN} from "../Utils/constants"
const MovieCard = ({poster_path}) => {
    return poster_path && (
        <div className="p-2 w-44">
            <img src={posterCDN+poster_path} alt="MoviePoster" />
        </div>
    )
}
export default MovieCard