import CardItem from "../components/CardItem"
import SearchBar from "../components/SearchBar"
import { PRODUCTOS } from "../data/productos"
import useCart from "../hooks/useCart"

const Tienda = () => {

  const {search} = useCart()
  const products=PRODUCTOS.map(articulo => {
    if(articulo.nombre.toLowerCase().includes(search.toLowerCase().trim())){
    return <CardItem articulo={articulo} key={articulo.id}/>
    }else{
      return null
    }
  })
  const results =products.every(producto => producto === null)

  return (
    <div className=''>
        <SearchBar/>
        <p className='border-white text-white border-2 bg-blue-400 border-dashed p-1 lg:w-3/5 text-center'>Este pedido será enviado por whatsapp para completarlo, acordar el domicilio de entrega, método de pago, etc...</p>
        <p className="text-2xl font-bold"></p>
        <div className="mt-5 lg:mt-10 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {
          !results && products 
        }
        </div>
        {
          results && 
          <div className="flex justify-center items-center mt-10">
            <p className="font-bold bg-white px-5 py-1 rounded-full shadow-xl">
              {`No se encontraron resultados para "${search}"`}
            </p>
          </div>
        }
    </div>
  )
}

export default Tienda
