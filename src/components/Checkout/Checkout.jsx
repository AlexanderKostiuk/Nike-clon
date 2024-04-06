import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, QuerySnapshot, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../Services/firebase/firebaseConfig'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'alexander kosti',
                    email: 'alexan.contact@gmail.com',
                    phone: '123456789'
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'Products'), where(documentId(), 'in', ids))

            const QuerySnapshot = await getDocs(productsCollection)
            const { docs } = QuerySnapshot

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {

                batch.commit()

                const orderCollection = collection(db, 'orders')

                const { id } = await addDoc(orderCollection, objOrder)
                clearCart()
                setOrderId(id)

            } else {
                console.log('Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.log('Hubo un error en la generación de la orden')
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Su orden está siendo generada...</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div className='block my-4'>
            <div className='text-center'>
                <h1 className='text-2xl font-medium'>Checkout</h1>
                <div>
                    <h3>HACER O CREAR FOMRULARIO PARA INGRESO DE DATOS</h3>
                </div>
                <button onClick={createOrder} className="bg-black text-white py-2 px-4 rounded-full transition-all hover:bg-green-600">Generar orden de compras</button>
            </div>
        </div>
    )

}


export default Checkout