import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import BannerTop from "./components/BannerTop/BannerTop"
import NavBar from './components/NavBar/Navbar'
import TitleAndPath from './components/TitleAndPath/TitleAndPath'
import Hero from './components/Hero/Hero'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import PageNotFound from "./components/PageNotFound/PageNotFound"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {

    return (
        <>
            <BrowserRouter>
                <ScrollToTop></ScrollToTop>
                <BannerTop></BannerTop>
                <NavBar />
                <TitleAndPath></TitleAndPath>
                <Routes>
                    <Route path='/Nike-clon' element={<Hero></Hero>}></Route>
                    <Route path='/Nike-clon/category/:categoryId' element={<Hero></Hero>}></Route>
                    <Route path='/Nike-clon/category/:categoryId/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                    <Route path='/Nike-clon/NotFound' element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
                <Banner></Banner>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default App
