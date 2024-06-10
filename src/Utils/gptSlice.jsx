import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptsearch:false,
        gptMovies:null,
        gptMoviesModifiedStore:null,
        tmdbFinalResultStore:null
    },
    reducers:{
        toggleGptsearch:(state)=>{
            state.showGptsearch=!state.showGptsearch
        },
        addGPTMovieResult:(state,action)=>{
            const {gptMoviesModified,tmdbFinalResult} = action.payload
            state.gptMoviesModifiedStore = gptMoviesModified
            state.tmdbFinalResultStore = tmdbFinalResult

        }
    }
})
export const {toggleGptsearch,addGPTMovieResult} = gptSlice.actions
export default gptSlice.reducer


