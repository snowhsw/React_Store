import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./data/Data";

let testData = createSlice({
    name: "data",
    initialState: data
})

const store = configureStore({
    reducer:{
        tData : testData.reducer
    }
})
export default store