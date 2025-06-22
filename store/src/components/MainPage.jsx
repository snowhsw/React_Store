import { useContext } from "react"
import { MainWrap, MainBanner, Contianer } from "../style/MainPageStyle"
import ProductCard from "./product/ProductCard"
import { ReducerData } from "../context/RootContext"
import Nav from "./common/Nav"

const MainPage = () =>{
    const data = useContext(ReducerData)
    return(
        <MainWrap>
            <MainBanner>

            </MainBanner>
            <Nav/>
            <Contianer>
            {
                data.map(info => <ProductCard key={info.id} info={info}/>)
            }
            </Contianer>
        </MainWrap>
    )
}

export default MainPage;