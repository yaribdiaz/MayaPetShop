import logo from '../assets/logo.jpg'

const Nosotros = () => {
  return (
    <div className='p-10'>
      <div>
        <div className='p-8 md:flex md:flex-row md:gap-5 text-white md:items-center lg:items-start'>
          
          <img 
            src={logo}
            alt="imagen-nosotros"  
            className='shadow-lg shadow-black/[0.50] p-5 rounded-md md:h-max lg:h-auto md:w-2/6 lg:w-2/6 bg-white'/>
          
          <div className='md:4/6 mt-10 md:mt-0 md:p-10 md:border-l border-white/[0.40]'>
          <h2 className='font-bold text-2xl md:text-3xl text-[white]'>DISTRIBUIDORA MAYA</h2>
            <div className=' md:text-xl break-words tracking-wide space-y-4'>
              <p className='mt-5 '>
                Para Maya Pet Shop, la salud y bienestar de tu mascota es lo más importante. Nos esforzamos día a día por dar la mejor experiencia y servicio a los pet lovers y para que a sus perrihijos nunca les falte nada, contamos con una gran variedad de alimentos para cada necesidad y al alcance de todos. 
              </p>
              <p>
                Contamos con repartidores propios en Pachuca y Mineral de la Reforma, lo que nos permite entregar a domicilio los pedidos en el mismo día para que la experiencia de usuario sea la mejor posible. 
              </p>
              <p>
                Además, te facilitamos el pago: puedes pagar en línea o contra entrega. Tú eliges si quieres hacerlo en efectivo o con transferencia.
              </p>
              <p> 
                ¡Maya Pet Shop es para todos! En nuestra tienda encontrarás productos desde la gama económica a la premium.
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Nosotros
