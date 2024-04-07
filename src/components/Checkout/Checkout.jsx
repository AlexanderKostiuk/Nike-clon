import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, QuerySnapshot, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../Services/firebase/firebaseConfig'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: `${firstName} ${lastName}`,
                    email: email,
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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === confirmEmail) {
            createOrder();
        } else {
            <h1>Error, los correos electronicos no coinciden</h1>
        }
    }

    if (loading) {
        return (
            <div className='flex justify-center py-16'>
                <h1 className='text-2xl'>Su orden está siendo generada...</h1>
            </div>
        )
    }

    if (orderId) {
        return (
            <div className='grid gap-4 justify-center items-center text-center p-8'>
                <h1 className='text-2xl'>Producto/s comprado !!</h1>
                <div className='flex items-center gap-4'>
                    <h2 className='text-lg'>El id de su orden es:</h2>
                    <p className='bg-gris p-2'> {orderId}</p>
                </div>
                <Link to='/Nike-clon' className="bg-black text-white py-2 px-4 rounded-full transition-all hover:opacity-80" >Volver a inicio</Link>
            </div>
        )

    }

    return (
        <div className='my-16'>
            <h1 className='text-2xl font-medium p-4 text-center'>CHECKOUT</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} >
                    {/* nombre y apellido */}
                    <div className="flex gap-4 m-6">
                        <input type="text" placeholder="Ingrese su nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                            className='border-b-2 py-1 placeholder:text-left laptop:w-96' />

                        <input type="text" placeholder="Ingrese su apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                            className='border-b-2 placeholder:text-left laptop:w-96' />
                    </div>

                    <div className="flex gap-4 m-6">
                        <input type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required
                            className='py-1 border-b-2 placeholder:text-left laptop:w-96' />

                        <input type="email" placeholder="Confirme su correo electrónico" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required
                            className=" border-b-2 placeholder:text-left laptop:w-96" />
                    </div>


                    {email !== "" && email === confirmEmail && (
                        <div className='flex justify-center'>
                            <button type="submit" className="bg-black text-white py-2 px-4 my-4 rounded-full transition-all hover:opacity-80">Generar orden de compra</button>
                        </div>
                    )}
                    {email !== confirmEmail && (
                        <div className='flex justify-center'>
                            <p className="text-red-500">Los correos electrónicos no coinciden</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )

}


export default Checkout