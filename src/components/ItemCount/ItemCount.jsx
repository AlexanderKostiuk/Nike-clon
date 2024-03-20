import { useState } from "react";

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev -1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return(
        <div className="mt-8 flex items-center">
            <button className="bg-gris text-black p-3 rounded-lg text-lg" onClick={decrement}>-</button>
            <button className="px-12 mx-2 p-3 bg-black rounded-2xl text-white font-medium hover:bg-grisOscuro transition-all" onClick={() => onAdd(count)}>Agregar a carrito</button>
            <button className="bg-gris text-black p-3 rounded-lg" onClick={increment}>+</button>
            <h3 className=" bg-black text-white p-3 rounded-lg ml-4 text-lg">{count}</h3>
        </div>
    )
}

export default ItemCount