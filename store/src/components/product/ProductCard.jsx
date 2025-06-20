import { ProductBox } from "../../style/ProductStyle"



const ProductCard = ({info}) => {
    return (
        <ProductBox>
            <p>{info.title}</p>
            <p>{info.content}</p>
            <p>{info.price}</p>
            <img src={info.src} alt={info.title} />
        </ProductBox>
    )
}

export default ProductCard