import './App.css'
import NavBar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/Nike-clon' element={<Hero></Hero>}></Route>
                    <Route path='/Nike-clon/category/:categoryId' element={<Hero></Hero>}></Route>
                    <Route path='/Nike-clon/category/:categoryId/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
