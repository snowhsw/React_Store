import { HeaderWrap, HeaderInner, SearchBox, Btn } from "../../style/CommonStyle"
import { Link } from "react-router-dom"
import { useState } from "react";
const Header = () => {
    return (
        <HeaderWrap>
            <HeaderInner>
                <Link to="/">
                    <p>SHOOPING</p>
                </Link>
                <SearchBox>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="lucide lucide-search w-6 h-6"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                    <input type="text" />
                </SearchBox>
                <div>
                    <Link to="/wish">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="lucide lucide-heart w-6 h-6"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                    </Link>
                    <Link to="/cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"width="24"height="24"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="lucide lucide-shopping-cart w-6 h-6"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                    </Link>
                </div>
            </HeaderInner>

        </HeaderWrap>
    );
};

export default Header;
