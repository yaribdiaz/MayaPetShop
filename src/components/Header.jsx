import { useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import logo from '../assets/logoHeader.jpg'
import titleStore from '../assets/nameHeader.jpg'

const Header = () => {

    const location = useLocation()
    const {pathname} = location
    const [navbar, setNavbar] = useState(false)
    const handleMenu = () => setNavbar(!navbar)

    return (
        <div>
            <div  className={`items-center justify-between  bg-gray-100 flex p-5 border-b`}>
            
                <div className="">
                <Link to={'/'} className="flex flex-row">
                    <img src={logo} className="w-10 mr-3"/>
                    <img src={titleStore} className="w-16"/>
                </Link>
                </div>

                <div className='hidden lg:flex gap-10'>
                    <Link to={'/'} className={` ${pathname === '/' ? 'bg-gray-700 text-white ' : ' '}' px-2 border-b rounded flex justify-center '  `}>Inicio  </Link>
                    <Link to={'nosotros'} className={` ${pathname === '/nosotros' ? 'bg-gray-700 text-white ' : ' '}' px-2 rounded border-b  flex justify-center '`}>Nosotros</Link>
                    <Link to={'ubicacion'} className={` ${pathname === '/ubicacion' ? `bg-gray-700 text-white ` : ' '}' px-2 border-b rounded flex justify-center '`}>Ubicación </Link>
                    <Link to={'catalogo'} className={` ${pathname.includes('/catalogo') ? 'bg-gray-700 text-white ' : ' '}' px-2 border-b rounded flex justify-center'`}>Productos</Link>
                </div>
        
                <div className={`flex  flex-col text-center lg:hidden`}>
                                <div onClick={handleMenu} className={`hover:cursor-pointer`}> 
                    {navbar ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> 
                        
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                    </div>
                </div>
                
            </div>
            <div className={`${!navbar ? 'opacity-0'  : 'opacity-100' } absolute z-20 opacity-100 bg-gray-100 rounded-b-2xl  w-full transition-all duration-700`}>
                    <div className={`${!navbar ? 'hidden'  : 'visible '}  transition-all `}>
                    <Link to={'/'} onClick={handleMenu} className={` ${pathname === '/' ? 'bg-gray-700 text-white ' : ' '}' border-b flex justify-center py-2 '  `}>Inicio  </Link>
                    <Link to={'nosotros'} onClick={handleMenu} className={` ${pathname === '/nosotros' ? 'bg-gray-700 text-white ' : ' '}' border-b  flex justify-center py-2 '  `}>Nosotros</Link>
                    <Link to={'ubicacion'} onClick={handleMenu} className={` ${pathname === '/ubicacion' ? `bg-gray-700 text-white ` : ' '}' border-b  flex justify-center py-2 '  `}>Ubicación </Link>
                    <Link to={'catalogo'} onClick={handleMenu} className={` ${pathname.includes('/catalogo') ? 'bg-gray-700 text-white ' : ' '}'  flex justify-center py-2 '`}>Productos</Link>
                    </div>
            </div>
             
        </div>
      )
    }

export default Header
