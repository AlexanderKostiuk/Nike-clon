import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, stock, type, price, img, img_sec, description}) => {

    const [cantidad, setCantidad] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)
/*         console.log('Agregue al carrito: ', count) */

        setCantidad(quantity)
        addItem(objProductToAdd)
    }
    
    return (
        <div className="grid gap-4 p-4 items-center justify-center laptop:grid-cols-2 desktop-lg:grid-cols-3">
            <img className="w-[600px]" src={img} />
            <img className="hidden laptop:w-[600px] laptop:block" src={img_sec}/>
            <div className=" flex-col laptop:p-12 ">
                <h1 className="text-3xl font-semibold my-2">{name}</h1>
                <h2 className="text-gray-500 my-2">{type}</h2>
                <p className="my-2">{description}</p>
                <p className="text-lg font-medium my-2" >${price}</p>
                
                {
                    cantidad === 0 && (
                        <ItemCount onAdd={handleOnAdd} stock={stock} ></ItemCount>
                    )

                }

            </div>
        </div>
    )
}

export default ItemDetail