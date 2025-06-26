import { Outlet, useParams } from "react-router-dom"
import { ReducerData } from "../context/RootContext"
import { useContext } from "react"

const DetailPage = () =>{

    const data = useContext(ReducerData)
    const { uid } = useParams();

    const prInfo = data.find(d =>{
        return Number(d.id) === Number(uid)
    })

    // console.log(data[0].id)
    // console.log("uid "+uid)
    console.log("결과 " + (data[0].id === Number(uid)))

    
    return(
        <div>
            <h1>상세 페이지 입니다.</h1>
            <Outlet></Outlet>
            <p>{prInfo.title}</p>
            <p>{prInfo.content}</p>
            <p>{prInfo.price}</p>
            <img src={prInfo.src} alt={prInfo.title} />
            
        </div>
    )
}

export default DetailPage