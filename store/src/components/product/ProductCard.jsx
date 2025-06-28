import { Link } from "react-router-dom"
import { ProductBox, AddCartBtn } from "../../style/ProductStyle"
import { useContext } from "react"


const ProductCard = ({info}) => {



    return (
        <ProductBox>
            <Link to={`/detail/${info.id}`}>
                <div className="imgBox">
                    <img src={info.src} alt={info.title} />
                </div>
                <div className="prInfoBox">
                    <p className="pr_title">{info.title}</p>
                    <p className="pr_content">{info.content}</p>
                    <p className="pr_price">{info.price}</p>
                    <AddCartBtn
                        onClick={(e)=>{
                            e.preventDefault()
                            e.stopPropagation();
                            console.log(111)
                        }}
                    >
                        장바구니 담기
                    </AddCartBtn>
                </div>
            </Link>
        </ProductBox>
    )
}

export default ProductCard