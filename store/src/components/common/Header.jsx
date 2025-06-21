import {HeaderWrap, Btn} from "../../style/CommonStyle"
import wishNone  from "../../assets/icon/wish.png"
import cart  from "../../assets/icon/cart_v2.png"
import search  from "../../assets/icon/search_v2.png"

import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <HeaderWrap>
            <Link to="/">
                <p>SHOOPING</p>
            </Link>
            <div>
                <Link to="/wish">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                </Link>
                <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-6 h-6"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                </Link>
                <Btn>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-6 h-6"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </Btn>
                
            </div>
        </HeaderWrap>
    )
}

export default Header