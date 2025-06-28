import { createContext, useReducer } from "react";
import data from "../data/Data";


    const reducer = (dataValue, action) =>{
        switch(action.type){
            case "addPr" :{
                return(
                    
                    [...dataValue, ...action.addData]
                )
            }
            case "detail":{
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

    export const ReducerDispatch = createContext()
    export const ReducerData = createContext()


export const ProductState = ({children}) =>{

    
    const [dataValue, dispatch] = useReducer(reducer, data)

    return(
        <ReducerData.Provider value={dataValue}>
            <ReducerDispatch.Provider value={dispatch}>
                {children}
            </ReducerDispatch.Provider>
        </ReducerData.Provider>
    )
}

