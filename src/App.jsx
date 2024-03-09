import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer props={"PRODUCTOS"}></ItemListContainer>
    </div>
  )
}

export default App
