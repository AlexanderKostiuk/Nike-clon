import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import MenuTitle from './components/MenuTitle/MenuTitle'
import NavBar from './components/NavBar/Navbar'
import SideBar from './components/SideBar/SideBar'

function App() {

  return (
    <div>
      <NavBar />
      <MenuTitle title="Nike"></MenuTitle>
      <div className="flex justify-center">
        <SideBar></SideBar>
        <ItemListContainer props={"PRODUCTOS"}></ItemListContainer>
      </div>
    </div>
  )
}

export default App
