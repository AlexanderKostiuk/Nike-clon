import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Banner from "../Banner/Banner"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'Products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data }
                setProduct(productAdapted)
            })  
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div className="flex-col">
            <ItemDetail {...product} ></ItemDetail>
            <Banner></Banner>
        </div>
    )
}

export default ItemDetailContainer