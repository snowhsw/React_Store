<<<<<<< HEAD
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
=======
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
>>>>>>> 4654f11ee7575df2e3f0c7424b2e6424d1bbf5d0
export default store