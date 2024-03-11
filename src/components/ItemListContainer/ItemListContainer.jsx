import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import ArrowDown from "../Widgets/ArrowDownWidget/ArrowDownWidget"
import FilterWidget from "../Widgets/FilterWidget/FilterWidget"

const ItemListContainer = ({ props }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className=" laptop:w-full grid justify-center">
            {/* <h1 className=" bg-red-600 flex my-4 justify-center">{props}</h1> */}
            <div className="flex justify-between mobile:px-6">
                <p className="hidden laptop:flex text-base font-normal">{} Productos </p>
                <div className="flex w-full justify-evenly laptop:justify-end gap-8 pb-4">
                    <div className="flex gap-2 cursor-pointer">
                        <p>Ocultar Filtros</p>
                        <FilterWidget></FilterWidget>
                    </div>
                    <div className="flex items-end gap-2 cursor-pointer">
                        <p>Ordenar Por Más Reciente</p>
                        <ArrowDown></ArrowDown>
                    </div>

                </div>

            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer