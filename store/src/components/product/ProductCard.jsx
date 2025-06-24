import { Link } from "react-router-dom"
import { ProductBox } from "../../style/ProductStyle"
import { useContext } from "react"


const ProductCard = ({info}) => {



    return (
        <ProductBox>
            <Link to={`/detail/${info.id}`}>
                <p>{info.title}</p>
                <p>{info.content}</p>
                <p>{info.price}</p>
                <img src={info.src} alt={info.title} />
            </Link>
        </ProductBox>
    )
}

export default ProductCard