import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <div className="grid gap-2 mt-8">
            <div className="flex mobile:justify-center items-center">
                <button className="bg-gris text-black py-2 px-8 text-xl rounded-s-3xl border-r-[1px]  transition-all hover:bg-grisOscuro hover:text-white" onClick={decrement}>-</button>
                <h3 className="bg-gris text-black py-2 px-6 text-xl">{count}</h3>
                <button className="bg-gris text-black py-2 px-8 text-xl rounded-e-3xl border-l-[1px] transition-all hover:bg-grisOscuro hover:text-white " onClick={increment}>+</button>
            </div>
            <div className="flex w-full mobile:justify-center">
                <Link to='/Nike-clon/Cart' className="px-[44px] text-center mobile:w-full py-3 bg-black rounded-2xl text-white font-medium hover:bg-grisOscuro transition-all" onClick={() => onAdd(count)}>Agregar a carrito</Link>
            </div>
        </div>
    )
}

export default ItemCount