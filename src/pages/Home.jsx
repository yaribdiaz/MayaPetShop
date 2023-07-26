import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import UbicacionContent from '../components/UbicacionContent'
import ProductosHome from '../components/ProductosHome'

const Home = () => {
  return (
    <div className='p-10'>

      <div className='flex flex-col lg:flex-row lg:justify-center lg:gap-10 items-center'>
        <img 
          src={logo}
          alt="imagen-nosotros"  
          className='w-3/6 lg:w-1/6 shadow-lg shadow-black/[0.50] p-1 rounded-full bg-white'
        />
        <div className='mt-5 lg:w-2/5 text-center p-2 bg-white text rounded-lg'>
          <p>
            Contamos con repartidores propios en<span className='font-bold text-[#3E1924]'> Pachuca y Mineral de la Reforma</span>, lo que nos permite <span className='font-bold text-[#3E1924]'>entregar a domicilio los pedidos en el mismo día</span> para que la experiencia de usuario sea la mejor posible. 
          </p>
          <div className='flex flex-col lg:flex-row lg:justify-evenly mt-5'>
            <Link component={Link} to="/catalogo" className="justify-center mt-5 lg:mt-0 flex items-center font-bold p-3 bg-black rounded text-white text-sm hover:bg-gray-800"> 
            <p>¡Haz tu pedido aquí!</p>
            </Link>
          </div>
        </div>
        
      </div>

      <div className='mt-20'>
        <h2 className='text-center text-3xl text-white font-bold border-y-2'>Productos</h2>
          <ProductosHome/>
      </div>

      <div className='mt-20'>
        <h2 className='text-center text-3xl text-white font-bold border-y-2'>Ubicación</h2>
        <UbicacionContent/>
      </div>

    </div>
  )
}

export default Home
