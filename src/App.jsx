import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/pages/home/Home"
import { ThemeProvider } from "./components/ThemeContext"
import Wishlist from "./components/Wishlist"
import Category from "./components/pages/Products/Category"
import FurnitureHero from "./components/pages/Products/FurnitureHero"
import DecorHero from "./components/pages/Products/DecorHero"
import BathroomHero from "./components/pages/Products/BathroomHero"
import LightingHero from "./components/pages/Products/LightingHero"
import KitchenHero from "./components/pages/Products/KitchenHero"
import AboutUs from "./components/pages/about/AboutUs"
import ContactUs from "./components/pages/contact/ContactUs"
import FeedbackForm from "./components/pages/feedback/Feedback"


const App = () => {
  return (
    <>
    <ThemeProvider>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<Wishlist/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/furniture" element={<FurnitureHero/>} />
      <Route path="/decor" element={<DecorHero/>} />
      <Route path="/bathroom" element={<BathroomHero/>} />
      <Route path="/lighting" element={<LightingHero/>} />
      <Route path="/kitchen" element={<KitchenHero/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/feedback" element={<FeedbackForm/>} />
    </Routes>
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App