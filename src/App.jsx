import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
{/*       <ItemListContainer greeting="Bienvenido al web clone de nike hecho por Alexander Kostiuk"></ItemListContainer>
 */}    </div>
  )
}

export default App
