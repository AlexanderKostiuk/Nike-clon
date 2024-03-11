import { useState } from "react"
import logo from "../../assets/Logo_NIKE.svg"
import JumpmanLogo from "../../assets/Jumpman_logo.svg"
import CartWidget from "../Widgets/CartWidget/CartWidget"
import MenuWidget from "../Widgets/MenuWidget/MenuWidget"
import SearchWidget from "../Widgets/SearchWidget/SearchWidget"
import CloseMenuWidget from "../Widgets//CloseMenuWidget/CloseMenuWidget"
import InfoWidget from "../Widgets/InfoWidget/InfoWidget"
import TiendasWidget from "../Widgets/TiendasWidget/TiendasWidget"
import ArrowRightWidget from "../Widgets/ArrowRightWidget/ArrowRight"
import CarritoVacio from "../CarritoVacio/CarritoVacio"


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [openCarrito, setOpenCarrito] = useState(false)

    return (
        <nav className="">
            {/* comienza barra de navegacion desktop */}
            <div className={`hidden laptop:flex justify-between items-center px-8 shadow-sm`}>
                <div>
                    <img src={logo} alt="logo_nike" className=" size-20 min-w-20" />
                </div>

                <div>
                    <ul className="flex gap-4 text-base ml-24">
                        <a href="#" className="underline-offset-8 hover:underline"><li>Destacados</li></a>
                        <a href="#" className="underline-offset-8 hover:underline"><li>Hombre</li></a>
                        <a href="#" className="underline-offset-8 hover:underline"><li>Mujer</li></a>
                        <a href="#" className="underline-offset-8 hover:underline"><li>Niño/a</li></a>
                        <a href="#" className="underline-offset-8 hover:underline"><li>Accesorios</li></a>
                        <a href="#" className="underline-offset-8 hover:underline"><li>Sale</li></a>
                    </ul>
                </div>

                <div className="flex justify-between items-center gap-8">
                    <div className="flex items-cente bg-gray py-2 pl-3 rounded-[50px] gap-1 bg-gris">
                        <SearchWidget />
                        <button type="button" className="pr-24">Buscar</button>
                    </div>
                    {/* div carrito pantalla grande para al hacer click desplegar informacion del carrito */}
                    <div onClick={() => setOpenCarrito(true)} className="cursor-pointer">
                        <CartWidget />
                    </div>
                </div>
            </div>
            {/* termina barra de navegacion desktop */}

            {/*empieza barra de navegacion mobile */}
            <div className={`flex laptop:hidden justify-between items-center px-4 bg-white border border-gray-200 fixed top-0 left-0 right-0`}>
                <button onClick={() => setOpen(true)}>
                    <MenuWidget />
                </button>

                <img src={logo} alt="Logo_nike" className="size-14" />

                <div className="flex gap-4">
                    <SearchWidget />

                    {/* div carrito pantalla chica para al hacer click desplegar informacion del carrito */}
                    <div onClick={() => setOpenCarrito(true)} className="cursor-pointer">
                        <CartWidget />
                    </div>
                </div>

                {/* Aca agrego un div que ocupa toda la pantalla para luego desplegar la Navbar lateral izquierda
                y que el resto de pantalla tenga menos opacidad */}
                <div className={`${!open && "hidden"} min-h-screen w-full
                 fixed top-0 left-0 right-0 bg-black opacity-30`} onClick={() => setOpen(false)} ></div>

                {/* Empieza sidebar izquierda */}
                <div className={`${!open && "hidden"} bg-white min-h-screen w-96 fixed top-0 left-0`}>
                    <div className="flex justify-between bg-whitete border border-gray-200">
                        <div></div>
                        <img src={logo} alt="Logo nike" className="size-16 ml-4" />
                        <button onClick={() => setOpen(false)} className="mr-4">
                            <CloseMenuWidget></CloseMenuWidget>
                        </button>
                    </div>
                    <ul className="ml-4">
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Destacados</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Hombre</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Mujer</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Niño/a</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Accesorios</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>
                        <div className="flex items-center justify-between mt-6 mr-4 cursor-pointer">
                            <a href="#" className="text-xl underline-offset-2 hover:underline"><li>Sale</li></a>
                            <ArrowRightWidget></ArrowRightWidget>
                        </div>

                    </ul>
                    <div className=" flex items-center gap-2 ml-4 mt-6">
                        <img src={JumpmanLogo} alt="jumpman logo" className="size-8" />
                        <a href="#"><p className=" font-bold">Jordan</p></a>
                    </div>

                    <div className="flex items-center ml-4 mt-6 gap-4 ">
                        <InfoWidget></InfoWidget>
                        <a href="#"><p className=" text-xs font-bold">Ayuda</p></a>
                    </div>
                    <div className="flex items-center ml-4 mt-6 gap-4">
                        <TiendasWidget></TiendasWidget>
                        <a href="#"><p className=" text-xs font-semibold">Buscar tiendas</p></a>
                    </div>
                </div>
                {/* termina sidebar izquierda */}
            </div>

            {/* empieza sidebar derecha (carrito) */}

            {/* Aca agrego un div que ocupa toda la pantalla para luego desplegar la sidebar lateral derecha que sería el carrito
                y que el resto de pantalla tenga menos opacidad */}
            <div className={`${!openCarrito && "hidden"} min-h-screen w-full 
            fixed top-0 right-0 left-0 bg-black opacity-30`} onClick={() => setOpenCarrito(false)}></div>

            <div className={`${!openCarrito && "hidden"} bg-white min-h-screen w-[420px] fixed top-0 right-0`}>
                <div className=" flex justify-between items-center mx-8 my-4">
                    <h1 className=" text-base font-medium">MI COMPRA</h1>
                    <button onClick={() => setOpenCarrito(false)}>
                        <CloseMenuWidget></CloseMenuWidget>
                    </button>
                </div>

                <div className="min-h-screen w-full flex justify-center items-center">
                    <CarritoVacio></CarritoVacio>
                </div>
            </div>

        </nav>
    )
}


export default NavBar