import CardItem from "../components/CardItem"
import { PRODUCTOS } from "../data/productos"

const Tienda = () => {



  return (
    <div className=''>
        <p className='border-white text-white border-2 bg-blue-400 border-dashed p-1 lg:w-3/5 text-center'>Este pedido será enviado por whatsapp para completarlo, acordar el domicilio de entrega, método de pago, etc...</p>
        <div className="mt-5 lg:mt-10 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {PRODUCTOS.map(articulo => (
          <CardItem articulo={articulo} key={articulo.id}/>
        ))}
        </div>
    </div>
  )
}

export default Tienda
