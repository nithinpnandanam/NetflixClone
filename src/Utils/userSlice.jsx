import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            // initialState will get the value when returned
            // only when "action.payload is used we get the parameter that was passed"
            return action.payload
        },
        removeUser:(state)=>{
            return null
        }
    }
})
export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer