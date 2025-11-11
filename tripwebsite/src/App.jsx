import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offer from './Components/Offers/offer'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import TicketResults from './Components/TicketResults/TicketResults';

const App = () => {


   fetch("http://localhost/backend/").then(res=>res.json()).then(data=>console.log(data));
   return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About/>
    <Blog/>
   <Footer/>
    </>
   )
}

export default App