import { useEffect, useState } from "react"
import logo from "../../assets/Logo_NIKE.svg"
import JumpmanLogo from "../../assets/Jumpman_logo.svg"
import CartWidget from "../Widgets/CartWidget/CartWidget"
import MenuWidget from "../Widgets/MenuWidget/MenuWidget"
import SearchWidget from "../Widgets/SearchWidget/SearchWidget"
import CloseMenuWidget from "../Widgets//CloseMenuWidget/CloseMenuWidget"
import InfoWidget from "../Widgets/InfoWidget/InfoWidget"
import TiendasWidget from "../Widgets/TiendasWidget/TiendasWidget"
import ArrowRightWidget from "../Widgets/ArrowRightWidget/ArrowRight"
import { Link } from "react-router-dom"
import { QuerySnapshot, collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../Services/firebase/firebaseConfig"


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'Categories'), orderBy('order', 'asc'))
        getDocs(categoriesCollection)
            .then(QuerySnapshot => {
                const categoriesAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setCategories(categoriesAdapted)
            })
            .catch(error => {
                console.error('Error')
            })
    }, [])

    return (
        <nav className="sticky top-0 w-full opacity-100 z-[9999999]">
            {/* comienza barra de navegacion desktop */}
            <div className={`hidden laptop:flex bg-white justify-between items-center px-8 shadow-sm`}>
                <div>
                    <Link to='/Nike-clon'><img src={logo} alt="logo_nike" className=" size-20 min-w-20 cursor-pointer" /></Link>
                </div>

                <div>
                    <ul className="flex gap-4 text-base ml-24">
                        {
                            Categories.map(cat => {
                                if (cat.slug === 'Destacados') {
                                    return <Link to='./Nike-clon' key={cat.id}> {cat.name}</Link>
                                }
                                return <Link className="underline-offset-8 transition-all hover:underline" to={`./Nike-clon/category/${cat.slug}`} key={cat.id}>{cat.name}</Link>
                            })
                        }

                    </ul>
                </div>

                <div className="flex justify-between items-center gap-8">
                    <div className="flex items-cente bg-gray py-2 pl-3 rounded-[50px] gap-1 bg-gris">
                        <SearchWidget />
                        <button type="button" className="pr-24">Buscar</button>
                    </div>
                    {/* div carrito pantalla grande para al hacer click desplegar informacion del carrito */}
                    <Link to='/Nike-clon/Cart'>
                        <CartWidget />
                    </Link>
                </div>
            </div>
            {/* termina barra de navegacion desktop */}

            {/*empieza barra de navegacion mobile */}
            <div className={`flex laptop:hidden justify-between items-center px-4 bg-white border border-gray-200`}>
                <button onClick={() => setOpen(true)}>
                    <MenuWidget />
                </button>

                <img src={logo} alt="Logo_nike" className="size-14" />

                <div className="flex gap-4 items-center">
                    <SearchWidget />

                    {/* div carrito pantalla chica para al hacer click desplegar informacion del carrito */}
                    <Link to='/Nike-clon/Cart'>
                        <CartWidget />
                    </Link>
                </div>

                {/* Aca agrego un div que ocupa toda la pantalla para luego desplegar la Navbar lateral izquierda
                y que el resto de pantalla tenga menos opacidad */}
                <div className={`${!open && "hidden"} min-h-screen w-full
                 fixed top-0 left-0 right-0 bg-black opacity-30`} onClick={() => setOpen(false)} ></div>

                {/* Empieza navbar en mobile */}
                <div className={`${!open && "hidden"} bg-white min-h-screen w-96 fixed top-0 left-0`}>
                    <div className="flex justify-between bg-whitete border border-gray-200 ">
                        <div></div>
                        <img src={logo} alt="Logo nike" className="size-16 ml-4" />
                        <button onClick={() => setOpen(false)} className="mr-4">
                            <CloseMenuWidget></CloseMenuWidget>
                        </button>
                    </div>
                    <ul className="mt-4">
                        {
                            Categories.map(cat => {
                                if (cat.slug === 'Destacados') {
                                    return <Link onClick={() => setOpen(false)}
                                        className="flex py-2 justify-between items-center px-4 text-xl"
                                        to='./Nike-clon'
                                        key={cat.id}> {cat.name}
                                        <ArrowRightWidget></ArrowRightWidget>
                                    </Link>
                                }
                                return <Link onClick={() => setOpen(false)}
                                    className="flex px-4 py-2 items-center justify-between cursor-pointer text-xl"
                                    to={`./Nike-clon/category/${cat.slug}`}
                                    key={cat.id}>{cat.name}
                                    <ArrowRightWidget></ArrowRightWidget>
                                </Link>
                            })
                        }
                    </ul>
                    <Link to='./Nike-clon/NotFound' onClick={() => setOpen(false)}>
                        <div className=" flex items-center gap-2 ml-4 mt-6">
                            <img src={JumpmanLogo} alt="jumpman logo" className="size-8" />
                            <p className=" font-bold">Jordan</p>
                        </div>
                    </Link>

                    <Link to='./Nike-clon/NotFound' onClick={() => setOpen(false)}>
                        <div className="flex items-center ml-4 mt-6 gap-4 ">
                            <InfoWidget></InfoWidget>
                            <p className=" text-xs font-bold">Ayuda</p>
                        </div>
                    </Link>
                    <Link to='./Nike-clon/NotFound' onClick={() => setOpen(false)}>
                        <div className="flex items-center ml-4 mt-6 gap-4">
                            <TiendasWidget></TiendasWidget>
                            <p className=" text-xs font-semibold">Buscar tiendas</p>
                        </div>
                    </Link>
                </div>
                {/* termina sidebar izquierda */}
            </div>
        </nav>
    )
}


export default NavBar