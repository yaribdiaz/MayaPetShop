import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Layout = () => {
  return (
    <div className="font-nunito">
    <div>
        <Header/>

    </div>

    <div className=" bg-gradient-to-br from-cyan-300 via-violet-300 to-fuchsia-400 min-h-screen">
    <Outlet/>
    </div>

    <Footer/>
      
    </div>
  )
}

export default Layout
