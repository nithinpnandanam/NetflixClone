import {createSlice} from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptsearch:false,
    },
    reducers:{
        toggleGptsearch:(state)=>{
            state.showGptsearch=!state.showGptsearch
        },
    }
})
export const {toggleGptsearch} = gptSlice.actions
export default gptSlice.reducer


