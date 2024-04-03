import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart } = useContext(CartContext)
    console.log('length de cart', cart.length)

    return (
        <div>
            {

                (cart.length == 0) ?
                    <div className="bg-gris py-36">
                        <div className="grid gap-2 text-center justify-center items-center">
                            <div className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl">Carrito vacío</h1>
                            <Link to='/Nike-clon' className=" text-grisOscuro text-md">Volver al inicio</Link>
                        </div>
                    </div>
                    :
                    <div className="my-4">
                        {cart.map((properties) => {
                            return (
                                <ItemCart key={properties.id} {...properties} ></ItemCart>
                            )
                        })}
                        <div className="flex justify-between px-4">
                            <button className="bg-black text-white p-4 rounded-full transition-all hover:bg-red-700">Vaciar carrito</button>
                            <div className="flex">
                                <p className="bg-gris p-4 rounded-s-3xl">TOTAL: {} $</p>
                                <button className="bg-black text-white p-4 rounded-e-3xl text-sm transition-all hover:bg-green-700">COMPRAR</button>
                            </div>
                        </div>
                    </div>

            }

        </div>
    )
}

export default Cart