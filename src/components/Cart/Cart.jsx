import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, total, removeItem } = useContext(CartContext)

    return (
        <div className="my-4">
            <h1 className=" mx-6 my-4  text-3xl font-medium">Carrito</h1>
            <section>
                {cart.length === 0 ?
                    <div className="flex m-4 items-center justify-center">
                        <h1 className="text-2xl">El carrito esta vacío</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>

                    </div>
                    :
                    cart.map(prod => {
                        return (
                            <article key={prod.id}>
                                <div className="block justify-center laptop:flex m-4 rounded border-b-2 p-2 ">
                                    <div className="flex justify-center">
                                        <img className="w-36" src={prod.img} alt={prod.name} />
                                    </div>
                                    <div className="laptop:flex w-full justify-between items-center laptop:px-16">

                                        <div className="text-center border-b-2 my-1 flex justify-between laptop:my-0  laptop:border-none laptop:block laptop:min-w-48">
                                            <h2 className=" laptop:text-gray-400">Nombre</h2>
                                            <p>{prod.name}</p>
                                        </div>
                                        <div className="text-center border-b-2 my-1  flex justify-betwee laptop:my-0n laptop:border-none laptop:block laptop:min-w-48">
                                            <h2 className=" laptop:text-gray-400">Precio</h2>
                                            <p>${prod.price}</p>
                                        </div>
                                        <div className="text-center border-b-2 my-1 flex justify-between laptop:my-0 laptop:border-none laptop:block laptop:min-w-48">
                                            <h2 className=" laptop:text-gray-400">Cantidad</h2>
                                            <p>{prod.quantity}</p>
                                        </div>
                                        <div onClick={() => removeItem(prod.id)} className="cursor-pointer flex justify-center text-center hover:text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        )
                    })
                }

            </section>
            <div className={`flex justify-center gap-4  mx-4`}>
                {
                    cart.length > 0 ?
                    <div className="w-full flex justify-between">
                        <Link to='/Nike-clon' className="bg-black text-white py-2 px-4 rounded-full transition-all hover:opacity-80">Seguir comprando</Link>
                        <div className="flex items-center">
                            <p className="bg-gris py-2 px-4 rounded-s-full ">Total: ${total}</p>
                            <Link to='/Nike-clon/checkout' className="bg-black text-white py-2 px-4 rounded-e-full transition-all hover:opacity-80"> Ir al Checkout</Link>

                        </div>
                    </div>
                    :
                    <Link to='/Nike-clon' className="bg-black text-white py-2 px-4 rounded-full transition-all hover:opacity-80">Ver catálogo</Link>
                }

            </div>
        </div>
    )
}

export default Cart