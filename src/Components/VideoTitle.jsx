const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute pl-16 pr-8 w-full aspect-video pt-[22rem] bg-gradient-to-r  from-black ">
            <h1 className="my-7 w-2/5 text-white text-6xl font-bold">{title}</h1>
            <p className="text-white text-lg w-2/5">{overview}</p>
            <div className="py-6">
                <button className="bg-white text-black py-4 px-12 text-xl rounded-lg hover:bg-opacity-80">Play</button>
                <button className="mx-2 bg-gray-500 text-white py-4 px-12 text-xl rounded-lg :bg-opacity-80">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle