import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Ubicacion from './pages/Ubicacion'
import Nosotros from './pages/Nosotros'
import Tienda from './pages/Tienda'
import Resumen from './pages/Resumen'
import Carrito from './pages/Carrito'
import LayoutCompras from './layout/LayoutCompras'
import { CartProvider } from './context/CartProvider'
/* 
#3E1924
#E01C47
#AA0F28
#D94F05
#426A50
#0F151A
#1D1F14
#B5ABAD
#21FF91
#F01F4D
#BF1C24

https://www.facebook.com/110985314889068/posts/pfbid028c4kS4B1JFPQCVFZDtDGahHYaMMi7z7XPZjwurzpZBSppYcyRm8Gk1Qvc2r1zmfMl/?sfnsn=scwspwa&mibextid=RUbZ1f

https://instagram.com/maya_amigaps?igshid=MzRlODBiNWFlZA==
*/

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>

            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route  path='nosotros' element={<Nosotros/>}/>
              <Route  path='ubicacion' element={<Ubicacion/>}/>

              <Route path='/catalogo' element={<LayoutCompras/>}>
                <Route index element={<Tienda/>}/>
                <Route path='resumen' element={<Resumen/>}/>
                <Route path='carrito' element={<Carrito/>}/>
              </Route>

            </Route>

        </Routes>
      </CartProvider>

    </BrowserRouter>
  )
}

export default App
