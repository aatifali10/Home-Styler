import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/pages/home/Home"
import { ThemeProvider } from "./components/ThemeContext"
import Wishlist from "./components/Wishlist"


const App = () => {
  return (
    <>
    <ThemeProvider>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App