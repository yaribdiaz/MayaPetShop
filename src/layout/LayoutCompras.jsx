import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"


const LayoutCompras = () => {
    const location = useLocation()
    const {pathname} = location


  return (
    <div>
        <div className="bg-black py-3 sticky top-0 z-10">
            <div className="text-white flex justify-between px-4">
                <Link to={'/catalogo'} className={`${pathname === "/catalogo" ? 'bg-blue-500' : ''} py-1 px-2 rounded`}>
                    Productos 
                </Link>
                
                <Link to={'resumen'} className={`${pathname === "/catalogo/resumen" ? 'bg-blue-500' : ''} py-1 px-2 rounded`}>
                    Resumen
                </Link>
                
                <Link to={'carrito'} className={`${pathname === "/catalogo/carrito" ? 'bg-blue-500' : ''} py-1 px-2 rounded`}>
                    Realizar Pedido
                </Link>
            </div>
            {/* <div className={`bg-[#D94F05] w-[${bar}%] py-1 transition-all duration-500 rounded-r-xl`}></div> */}
        </div>

        <div className="p-5 lg:p-10 mt-5 lg:mt-10 ">
            <Outlet/>
        </div>
    </div>
  )
}

export default LayoutCompras