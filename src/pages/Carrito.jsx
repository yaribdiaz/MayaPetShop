import { useCart } from "../context/CartProvider"

const Carrito = () => {

  const {carrito, whatsapp} = useCart()

  return (
    <div className='flex justify-center'>
      <div className='bg-white flex mt-10 lg:mt-20 flex-col items-center p-10 border-2 border-black border-dashed'>
        
        <p className='uppercase text-xl font-bold border-b w-full text-center border-black border-dashed'>Enviar Pedido</p>
        <p className='border-gray-400 border border-dashed p-1 mt-10 lg:mt-5 lg:w-3/5 text-center'>Este pedido será enviado por whatsapp para completarlo, acordar el domicilio de entrega, método de pago, etc...</p>
        <a 
          href={`https://wa.me/7721066182?text=${whatsapp}`}
          className={`${carrito.length === 0 ? 'bg-gray-400 pointer-events-none' : 'bg-green-500 hover:bg-green-600 hover:scale-105'}  flex gap-3 mt-7 p-2 lg:p-4 font-bold rounded    text-white border-double transition-all duration-300`}
        >
          Enviar por Whatsapp 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
        </a>

      </div>
    </div>
  )
}

export default Carrito
