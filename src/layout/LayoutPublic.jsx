import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import UseOrderContextProvider from "../context/UseOrderContext"

const LayoutPublic = () => {
  return (
      <UseOrderContextProvider>
        <Header/>
        <Outlet />
        <Footer/>
      </UseOrderContextProvider>
      

  )
}

export default LayoutPublic
