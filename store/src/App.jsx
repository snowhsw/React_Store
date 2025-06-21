import {ProductState} from "./context/RootContext"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import MainPage from "./components/MainPage"
import WishPage from "./components/WishPage"
import DetailPage from "./components/DetailPage"
import CartPage from "./components/CartPage"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <ProductState>
    <Header />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/wish" element={<WishPage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      <Footer/>
    </ProductState>
  )
}

export default App
