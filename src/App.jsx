import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import BannerTop from "./components/BannerTop/BannerTop"
import NavBar from './components/NavBar/Navbar'
/* import TitleAndPath from './components/TitleAndPath/TitleAndPath' */
import Hero from './components/Hero/Hero'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Cart from "./components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Checkout from "./components/Checkout/Checkout"


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop></ScrollToTop>
          <BannerTop></BannerTop>
          <NavBar />
          {/*           <TitleAndPath></TitleAndPath> */}
          <Routes>
            <Route path='/Nike-clon' element={<Hero></Hero>}></Route>
            <Route path='/Nike-clon/category/:categoryId' element={<Hero></Hero>}></Route>
            <Route path='/Nike-clon/category/:categoryId/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='/Nike-clon/NotFound' element={<PageNotFound></PageNotFound>}></Route>
            <Route path='/Nike-clon/Cart' element={<Cart></Cart>}></Route>
            <Route path='/Nike-clon/Checkout' element={<Checkout></Checkout>}></Route>
          </Routes>
          <Footer></Footer>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
