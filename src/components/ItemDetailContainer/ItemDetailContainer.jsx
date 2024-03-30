import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Banner from "../Banner/Banner"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(result => {
                setProduct(result)
            })
    }, [itemId])
    
    return (
        <div className="flex-col">
            <ItemDetail {... product } ></ItemDetail>
            <Banner></Banner>
        </div>
    ) 
}

export default ItemDetailContainer