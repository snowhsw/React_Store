import { createContext, useReducer } from "react";
import data from "../data/Data";


    const reducer = (dataValue, action) =>{
        switch(action.type){
            case "write":{
                return dataValue;
            }
            case "delete":{
                return dataValue;
            }
            default :{
                return dataValue;
            }
        }
    }

    const ReducerDispatch = createContext()
    const ReducerData = createContext()


const ProductState = ({children}) =>{

    const [dataValue, dispatch] = useReducer(reducer, data)

    return(
        <ReducerData.Provider value={dataValue}>
            <ReducerDispatch.Provider value={dispatch}>
                {children}
            </ReducerDispatch.Provider>
        </ReducerData.Provider>
    )
}

export  {ProductState, ReducerDispatch,  ReducerData}
