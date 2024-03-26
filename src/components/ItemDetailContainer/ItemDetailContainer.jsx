import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(result => {
                setProduct(result)
                console.log(result)
                console.log(result.type)
            })
    }, [itemId])
    
    return (
        <div className="flex-col">
            <ItemDetail {... product } ></ItemDetail>
        </div>
    ) 
}

export default ItemDetailContainer