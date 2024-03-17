import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:'lang',
    initialState:{
        selectedLang:'english'
    },
    reducers:{
        assignLanguage:(state,action)=>{
            state.selectedLang=action.payload
        }
    }
})

export const {assignLanguage} = languageSlice.actions
export default languageSlice.reducer