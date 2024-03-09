import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

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
        <div className="">
            <h1 className="m-4 flex justify-center">{props}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer