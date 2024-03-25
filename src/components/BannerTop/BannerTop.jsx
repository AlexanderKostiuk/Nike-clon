import { Link } from "react-router-dom"
import JumpmanLogo from "../../assets/Jumpman_logo.svg"

const BannerTop = () => {
    return (
        <div className="hidden laptop:bg-gris laptop:block">
            <div className="flex justify-between px-7 py-3">
                <Link to='/Nike-clon'>
                    <img className="size-5" src={JumpmanLogo} alt="jumpman logo" />
                </Link>
                <div className="flex gap-4">
                    <div className="border border-black h-4"></div>
                    <Link to='/Nike-clon/NotFound'>
                        <p className="text-xs font-semibold cursor-pointer">Buscar Tienda</p>
                    </Link>
                    <Link to='/Nike-clon/NotFound'>
                        <p className="text-xs font-semibold cursor-pointer">Ayuda</p>
                    </Link>
                    <div className="border border-black h-4"></div>
                </div>
            </div>
        </div>
    )
}

export default BannerTop