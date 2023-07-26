import { useCart } from "../context/CartProvider"

const Resumen = () => {

  const {carrito, actualizarCantidad, eliminarProducto} = useCart()

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 lg:p-10 lg:w-[50%] border-dashed border-2 border-black">
        <p className="uppercase font-bold text-xl text-center border-b-2 border-dashed">Resumen del Pedido</p>
        
        {
          carrito.length === 0
          ?
          <p className="text-black mt-10 text-center font-bold">
            Los artículos de tu pedido se mostrarán aquí.
          </p>
          :(
          <div className="mt-10">
            {carrito.map(producto => (
              <div key={producto.id} className="flex flex-col md:flex-row lg:justify-between items-center gap-3 border-b-2 border-dashed border-gray-400 last-of-type:border-none py-2 p-1">
                  <div className="flex">
                  <div className="w-2/6 md:w-1/6">
                      <img src={`../../src/assets/${producto.imagen}`} alt={producto.nombre}/>
                  </div>
                  <div className="w-5/6 lg:w-4/6 flex items-center font-bold text-md lg:text-lg ">
                      <p>{producto.nombre}</p>
                  </div>
                  </div>
                  <div className="flex flex-row gap-10 justify-evenly h-min items-center ">
                      <button onClick={() => eliminarProducto(producto.id)} className="px-2 py-1 bg-rose-500 text-white font-bold rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                      <div className="flex gap-2">
                        <button onClick={() => actualizarCantidad(producto.cantidad--)} disabled={producto.cantidad === 1 ? true : false} className={`${producto.cantidad === 1 && 'text-gray-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <p className=" ">
                          {producto.cantidad}
                        </p>
                        <button onClick={() => actualizarCantidad(producto.cantidad++)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                  </div>
              </div>
            ))}
          </div>

          )}
      </div>
    </div>
  )
}

export default Resumen