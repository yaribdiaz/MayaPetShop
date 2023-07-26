import React from 'react'
import UbicacionContent from '../components/UbicacionContent'

const Ubicacion = () => {
  return (
    <div className='p-10'>
      <UbicacionContent/>
      <div className='flex flex-col items-center mt-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>


        <p className='text-center mt-5 bg-white lg:w-2/5 rounded-lg font-bold border-dashed border-2 border-black'>
          <span className='text-[#3E1924]'>
            San Cristóbal 37, PRI Chacón 
          </span>
            , 42186 Pachuca de Soto, Hgo.
        </p>
      </div>
    </div>
  )
}

export default Ubicacion
