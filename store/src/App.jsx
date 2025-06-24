import {ProductState} from "./context/RootContext"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import MainPage from "./components/MainPage"
import WishPage from "./components/WishPage"
import DetailPage from "./components/DetailPage"
import CartPage from "./components/CartPage"
import { Route, Routes, useNavigate, Outlet } from "react-router-dom"
function App() {

  return (
    <ProductState>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/wish" element={<WishPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/detail" element={<DetailPage/>}>
          <Route path="/detail/:uid" element={<h4>첫번째</h4>}/>
        </Route>
        <Route path="*"element={<h1>잘못된 페이지 입니다.</h1>}/>
      </Routes>
      <Footer/>
    </ProductState>
  )
}



export default App
