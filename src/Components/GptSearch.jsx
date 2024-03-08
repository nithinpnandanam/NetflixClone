import GptSearchBar from "./GptSearchBar"
import GptShowSuggestions from "./GptShowSuggestions"

const GptSearch = () => {
    const backgroundStyle = {
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    return (
        <div className="h-screen overflow-hidden flex flex-col pt-80" style={backgroundStyle}>
            <GptSearchBar/>
            <GptShowSuggestions/>
        </div>
    )
}
export default GptSearch