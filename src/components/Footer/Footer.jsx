import LocationWidget from "../Widgets/LocationWidget/LocationWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import {} from "@fortawesome/free-solid-svg-icons" */
/* import {} from "@fortawesome/free-regular-svg-icons" */
import { faXTwitter, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import ScrollToTop from "../ScrollToTop/ScrollToTop"


const Footer = () => {
  return (
    <div className=" bg-negroNike w-full laptop:h-[420px] relative z-20">
      <div className="laptop:flex p-8 justify-between">
        {/* Buscar tienda */}
        <div >
          <Link to='/Nike-clon/NotFound'>
            <h1 className="pt-2 laptop:pt-0 text-white text-sm font-bold cursor-pointer">BUSCAR TIENDA</h1>
          </Link>
        </div>
        {/* Ayuda */}
        <div>
          <h1 className="pt-8 laptop:pt-0 text-white text-sm mb-2 font-bold">AYUDA</h1>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Envíos y entregas</p>
          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Devoluciones</p>

          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Cambios</p>

          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Autogestionar mi devolución</p>
          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Opciones de pago</p>

          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Contactate</p>

          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Defensa al consumidor</p>

          </Link>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Libro de quejas online</p>

          </Link>
          <h2 className="text-white text-xs font-bold py-1 cursor-text">Boton de arrepentimiento</h2>
          <Link to='/Nike-clon/NotFound' onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer underline transition-all hover:text-white">Ver todos</p>
          </Link>

        </div>

        {/* Acerca de Nike */}
        <div>
          <h1 className=" pt-8 laptop:pt-0 text-white text-sm font-bold mb-2">ACERCA DE NIKE</h1>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Noticias</p>
          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Inversionistas</p>
          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Sustentabilidad</p>
          </Link>
        </div>

        {/* Novedades nike */}
        <div>
          <h1 className=" pt-8 laptop:pt-0 text-white text-sm font-bold mb-2">NOVEDADES NIKE</h1>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Encontrá tu calzado</p>
          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">¿Como elegir tú top?</p>

          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Tips saludables</p>

          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">Promociónes</p>

          </Link>
          <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
            <p className="text-zinc-500 text-xs py-1 cursor-pointer transition-all hover:text-white">¿Como sigo mi pedido?</p>

          </Link>
        </div>

        <div className=" pt-8 flex justify-between laptop:pt-0 laptop:flex-col laptop:justify-normal">
          <img className=" w-32" src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.77/logos/Renaper-logo___2cfbcdca6b0b070808af1c579ff76dd9.png" alt="" />
          <img className="w-8" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/3b08c03e-be05-49c1-9579-193190c40b2e___d5b5ce1ab2c443765cd3beb7183e1cae.jpg" alt="" />
        </div>

        <div className=" pt-8 laptop:pt-0 flex gap-6 justify-center items-start">
          <FontAwesomeIcon className="text-zinc-500 w-6 h-7 cursor-pointer transition-all hover:text-white" icon={faXTwitter} />
          <FontAwesomeIcon className="text-zinc-500 w-6 h-7 cursor-pointer transition-all hover:text-white" icon={faFacebook} />
          <FontAwesomeIcon className="text-zinc-500 w-7 h-7 cursor-pointer transition-all hover:text-white" icon={faYoutube} />
          <FontAwesomeIcon className="text-zinc-500 w-7 h-7 cursor-pointer transition-all hover:text-white" icon={faInstagram} />
        </div>

      </div>

      {/* sub-footer */}
      <div className="bg-negroNike absolute border-y-[1px] border-zinc-800 laptop:top-full w-full p-4">
        <div className="tablet:flex justify-between items-center">
          <div className="text-center laptop:flex items-center gap-1">
            <div className="flex justify-center">
              <LocationWidget></LocationWidget>
              <h1 className="text-white font-semibold text-[10px]">Argentina</h1>

            </div>
            <p className=" text-[10px] text-zinc-500 ml-2 hover:text-white">© 2023 Southbay S.R.L. Todos los derechos reservados.</p>
          </div>

          <div className="flex justify-center gap-4">
            <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
              <p className="text-[10px] text-zinc-500 cursor-pointer hover:text-white">Términos y condiciones</p>

            </Link>
            <Link to='/Nike-clon/NotFound'onClick={<ScrollToTop></ScrollToTop>}>
              <p className="text-[10px] text-zinc-500 cursor-pointer hover:text-white">Política de privacidad y cookies</p>

            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer