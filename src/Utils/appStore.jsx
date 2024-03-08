import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Utils/userSlice"
import moviesReducer from "../Utils/moviesSlice"
import gptReducer from "../Utils/gptSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer
    }
})

export default appStore