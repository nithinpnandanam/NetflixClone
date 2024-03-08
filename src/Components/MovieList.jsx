// This component is responsible for showing a single row of movies
import { useState } from "react";
import MovieCard from "./MovieCard"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const MovieList = ({ title, movies, uniq_id }) => {
    const [showChevrons, setShowChevrons] = useState(false);
    const smoothScroll = (element, target, duration) => {
        const start = element.scrollLeft;
        const change = target - start;
        const increment = 20; // Adjust as needed

        const animateScroll = (elapsedTime) => {
            elapsedTime += increment;
            const position = easeInOut(elapsedTime, start, change, duration);
            element.scrollLeft = position;

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll.bind(null, elapsedTime));
            }
        };

        const easeInOut = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateScroll.bind(null, 0));
    };

    const slideLeft = () => {
        let slider = document.getElementById("row-movies-" + uniq_id);
        smoothScroll(slider, slider.scrollLeft - 500, 500);
    };

    const slideRight = () => {
        let slider = document.getElementById("row-movies-" + uniq_id);
        smoothScroll(slider, slider.scrollLeft + 500, 500);
    };
    return movies && (
        <div>
            <h1 className="text-white text-3xl p-2 ">{title}</h1>
            <div className="flex items-center relative" onMouseEnter={() => setShowChevrons(true)} onMouseLeave={() => setShowChevrons(false)}>
                <MdChevronLeft size={40} onClick={slideLeft} color="white" className={`h-60 w-20 ${showChevrons ? 'block' : 'hidden'} bg-black opacity-50 z-20 absolute left-0`} />
                <div className="flex overflow-x-auto scrollbar-hide z-10 " id={"row-movies-" + uniq_id}  >
                    <div className="flex">
                        {
                            movies?.map(movie => <MovieCard poster_path={movie?.poster_path} key={movie?.id} />)
                        }
                    </div>
                </div>
                <MdChevronRight size={40} onClick={slideRight} color="white" className={`h-60 w-20 ${showChevrons ? 'block' : 'hidden'} bg-black opacity-50 z-20 absolute right-0`} />
            </div>

        </div>

    )
}
export default MovieList