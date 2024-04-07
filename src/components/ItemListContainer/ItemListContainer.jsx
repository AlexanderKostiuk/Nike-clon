import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot, query, where } from "firebase/firestore"
import { db } from "../../Services/firebase/firebaseConfig"

const ItemListContainer = ({ props }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const productsCollection = categoryId ? (
            query(collection(db, 'Products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'Products')
        )
        getDocs(productsCollection)
            .then(QuerySnapshot => {
                console.log(QuerySnapshot)
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }

                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="laptop:w-full grid justify-center my-16">
            <div className="flex justify-between mobile:px-6">
                <p className="hidden laptop:flex text-base font-normal">{props}</p>
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer