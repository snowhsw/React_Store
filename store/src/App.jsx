import {ProductState} from "./context/RootContext"
import Header from "./components/common/Header"
import Main from "./components/common/Main"
import Footer from "./components/common/Footer"
function App() {

  return (
    <ProductState>
      <Header />
      <Main/>
      <Footer/>
    </ProductState>
  )
}

export default App
