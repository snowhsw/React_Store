import { useContext } from "react"
import {MainWrap} from "../style/CommonStyle"
import ProductCard from "./product/ProductCard"
import { ReducerData } from "../context/RootContext"

const MainPage = () =>{
    const data = useContext(ReducerData)
    return(
        <MainWrap>
            {
                data.map(info => <ProductCard key={info.id} info={info}/>)
            }
        </MainWrap>
    )
}

export default MainPage;