import { Link } from 'react-router-dom'
import facebookLogo from '../assets/facebookLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'
import logo from '../assets/logoHeader.jpg'

const Footer = () => {
  return (
    <footer className='bg-gray-100  p-2 md:items-center md:p-10 flex flex-col md:flex-row gap-5 justify-center items-center md:justify-around'>
      
      <img src={logo} alt="logo maya pet shop"  className='w-10 md:w-14 flex justify-center'/>

      <Link to="/catalogo" className="justify-center mt-5 lg:mt-0 flex items-center font-bold p-3 bg-black rounded text-white text-sm hover:bg-gray-800"> 
      <p>¡Haz tu pedido aquí!</p>
      </Link>

      {/* Social Networks */}
      <div className='flex justify-center'>
        <div className='flex-row flex px-8 items-center gap-5 border-y-2 border-slate-500 py-2 mt-5 md:mt-0'>
          <p className='text-xl lg:text-2xl font-medium md:font-extrabold'>Síguenos en</p>
          <div className='flex'>
            <a href='https://www.facebook.com/profile.php?id=100094643785089&mibextid=ZbWKwL'>
              <img 
                src={facebookLogo} 
                alt="facebook logo" 
                className='mr-3'
              />
            </a>
            <a href='https://instagram.com/pet.shopmaya?igshid=MzRlODBiNWFlZA=='>
              <img src={instagramLogo} alt="Instagram Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
