import { act, useContext } from "react"
import { MainWrap, MainBanner, Contianer } from "../style/MainPageStyle"
import ProductCard from "./product/ProductCard"
import { ReducerData, ReducerDispatch } from "../context/RootContext"
import Nav from "./common/Nav"
import axios from "axios"
const MainPage = () =>{

    const data = useContext(ReducerData)
    const dispatch = useContext(ReducerDispatch)

    return(
        <MainWrap>
            <MainBanner>

            </MainBanner>
            <Nav/>
            <Contianer>
            {
                data.map(info => <ProductCard key={info.id} info={info}/>)
            }
            <button
                style={{textAlign:"center", padding:"10px 50px"}}
                onClick={()=>{
                    axios.get("https://codingapple1.github.io/shop/data2.json")
                    .then((result)=>{
                        const resultAttr = result.data.map(d => {
                            return {...d, src:"https://codingapple1.github.io/shop/shoes2.jpg"}
                        })
                        dispatch({
                            type: "addPr",
                            addData: resultAttr
                        })
                    })
                    .catch(()=>{
                        alert("못 가져와")
                    })
                    
                }}
            >
                더 줘
            </button>
            </Contianer>
        </MainWrap>
    )
}

export default MainPage;