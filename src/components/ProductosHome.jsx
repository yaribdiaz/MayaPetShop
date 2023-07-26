import { Link } from "react-router-dom"
import Productos from "../assets/productos.jpg"

const ProductosHome = () => {
  return (
    <div className="flex justify-center">
        <div className="mt-5 flex flex-col p-2 lg:w-7/12">
            <div className="flex flex-col md:flex-row shadow-lg">
                <img 
                    src={Productos} 
                    alt="Funny Pets" 
                    className=" md:w-2/5  md:rounded-l-lg "
                />
                <div className="bg-white p-5  md:rounded-r">
                    <p className="font-bold text-xl text-center">
                        ¡Maya Pet Shop es para todos! 
                    </p>
                    <p>
                        En nuestra tienda encontrarás productos desde la gama económica a la premium.
                    </p>
                    <p>
                        <span className="font-bold">La salud y bienestar de tu mascota es lo más importante.</span> Nos esforzamos día a día por dar la mejor experiencia y servicio a los pet lovers y para que a sus perrihijos nunca les falte nada. 

                    </p>
                    <p className="font-bold"> 
                        Contamos con una gran variedad de alimentos para cada necesidad y al alcance de todos.
                    </p>
                    <div className="py-3 flex justify-center">
                        <Link to='/catalogo' className="text-center uppercase w-3/5 p-2 bg-blue-500 font-bold text-white rounded-lg hover:bg-blue-600">
                            Ver Productos
                        </Link>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default ProductosHome
