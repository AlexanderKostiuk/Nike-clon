import { useState } from "react"
import logo from "../../assets/Logo_NIKE.svg"
import JumpmanLogo from "../../assets/Jumpman_logo.svg"
import CartWidget from "../Widgets/CartWidget/CartWidget"
import MenuWidget from "../Widgets/MenuWidget/MenuWidget"
import SearchWidget from "../Widgets/SearchWidget/SearchWidget"
import CloseMenuWidget from "../Widgets//CloseMenuWidget/CloseMenuWidget"
import InfoWidget from "../Widgets/InfoWidget/InfoWidget"
import ArrowRightWidget from "../Widgets/ArrowRightWidget/ArrowRight"


const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav>
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
                    <CartWidget />
                </div>
            </div>
            {/* termina barra de navegacion desktop */}

            {/*             empieza barra de navegacion mobile */}
            <div className={`flex laptop:hidden justify-between items-center px-4 bg-white border border-gray-200 fixed top-0 left-0 right-0`}>
                <button onClick={() => setOpen(true)}>
                    <MenuWidget />
                </button>

                <img src={logo} alt="Logo_nike" className="size-14" />

                <div className="flex gap-4">
                    <SearchWidget />
                    <CartWidget />
                </div>

                {/*                 Aca agrego un div que ocupa toda la pantalla para luego desplegar la Navbar lateral
                y que el resto de pantalla tenga menos opacidad */}
                <div className={`${!open && "hidden"} min-h-screen w-full fixed top-0 left-0 right-0 bg-black opacity-30`} onClick={() => setOpen(false)} ></div>

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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>

                        <a href="#"><p className=" text-xs font-semibold">Buscar tiendas</p></a>
                    </div>
                </div>

            </div>
        </nav>
    )
}


export default NavBar