import { configureStore, createSlice } from "@reduxjs/toolkit"
import data from "./data/Data"



const tData = createSlice({
    name: "data",
    initialState : data,
    reducers:{
        editState(state, action){
            return [...state, action.payload]
        },
        numCount(state, action){
            return(
                state.map(state =>{
                    return state.id === action.payload.id ? {...state, discount: action.payload.discount+1}:state
                })
            )
        },
        listSort(state, action){
            return(
                state.sort((a,b)=>a.title.localeCompare(b.title,"ko"))
            )
        }
    }
})

const couunt = createSlice({
    name: "number",
    initialState: 0,
    reducers:{
        countUp(state){
            return state + 1
        }
    }
})

export const {editState, numCount, listSort} = tData.actions
export const {countUp} = couunt.actions
const store = configureStore({
    reducer:{
        tData: tData.reducer,
        couunt: couunt.reducer
    }
})


export default store
