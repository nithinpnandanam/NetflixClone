import {createSlice} from "@reduxjs/toolkit"
const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerId:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies= action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies= action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies= action.payload
        },
        addTrailerId:(state,action)=>{
            state.trailerId= action.payload
        }
    }

})
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrailerId} = moviesSlice.actions
export default moviesSlice.reducer


