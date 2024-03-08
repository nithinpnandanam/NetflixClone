import { useSelector } from "react-redux"
import languageWords from "../Utils/languageWords"
const GptSearchBar = () => {
    const selectedLang = useSelector(store=>store.lang.selectedLang)
    return  (
        <div className="p-4  border-2 border-red-500 border-solid">
            <form action="" className="flex justify-center" onSubmit={(e) => e.preventDefault()}>
                <input className="pl-4 py-2 w-6/12" placeholder={languageWords[selectedLang].searchPlaceHolder} type="text" />
                <button className="bg-[rgb(193,17,25)] ml-3 px-4 py-2 h-1/4 text-white rounded-lg">{languageWords[selectedLang].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar