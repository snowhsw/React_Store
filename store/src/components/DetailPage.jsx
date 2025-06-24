import { Outlet, useParams } from "react-router-dom"
import { ReducerData } from "../context/RootContext"
import { useContext } from "react"

const DetailPage = () =>{

    const data = useContext(ReducerData)
    const { uid } = useParams();


    console.log(data[0].id)
    console.log("uid "+uid)
    console.log("결과 " + data[0].id === Number(uid))
    // console.log(typeof(data[0].id))
    // console.log(typeof(Number(uid)))
    return(
        <div>
            <h1>상세 페이지 입니다.</h1>
            <Outlet></Outlet>
            {/* {
                [...data].map(d => {
                    return(
                        d.id === Number(uid) &&
                        <div key={d.id}>
                            <img src={d.src} alt={d.title} />
                            <p>{d.title}</p>
                            <p>{d.content}</p>
                            <p>{d.price}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default DetailPage