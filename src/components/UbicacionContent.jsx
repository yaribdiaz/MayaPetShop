
const UbicacionContent = () => {
  return (
    <div>
              <div className='mt-10 lg:flex justify-center'>
            <div className='lg:w-1/5 lg:rounded-l-2xl lg:justify-evenly lg:flex lg:flex-col lg:rounded-r-none rounded-t-xl items-center text-center p-3  bg-white'>
              <p className='uppercase font-bold text-[#3E1924] lg:text-xl'>
                ¡Maya Pet Shop es para todos! 
              </p>

              <p className='text-ellipsis p-5 text-gray-600 text-lg'>
                En nuestra tienda encontrarás productos desde la gama económica a la premium.
              </p>
            </div>

            <iframe 
              className='lg:rounded-r lg:rounded-l-none rounded-b-md shadow-lg w-full h-[300px] lg:h-[500px] lg:w-2/5'
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d312.6240301146013!2d-98.73350298074364!3d20.081636709531246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDA0JzU0LjIiTiA5OMKwNDQnMDAuMSJX!5e0!3m2!1ses!2smx!4v1689733726861!5m2!1ses!2smx" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </div>
  )
}

export default UbicacionContent
