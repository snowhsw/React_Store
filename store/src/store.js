import { configureStore, createSlice } from "@reduxjs/toolkit"
import data from "./data/Data"


const tData = createSlice({
    name: "data",
    initialState : data,
    reducers:{
        editState(state, addState){
            return [...state, addState]
        }
    }
})

export const {editState} = tData.actions

const store = configureStore({
    reducer:{
        tData: tData.reducer
    }
})


export default store
