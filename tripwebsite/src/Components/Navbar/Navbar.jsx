import React, { useState } from 'react'
import './navbar.scss'
import { MdTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

  // Code to toggle/show navBar
  const [active, setActive] = useState('navBar')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }
// code to remove Navbar
   const removeNavbar = () => {
    setActive('navBar')
  }

  // Code too add background color to the header...
  const[transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1 className='flex'>
              <MdTravelExplore className='icon' />
              Atemad
            </h1>
          </a>
        </div>

        {/* Navbar Menu */}
        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Popular</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Special Offer</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Contacts</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </li>

             <div className='headerBtns flex'>
            <button className='btn loginBtn'>
              <a href='#'>Login</a>
            </button>
            <button className='btn'>
              <a href='#'>Sign Up</a>
            </button>
          </div>
          
          </ul>

         

          <div onClick={removeNavbar} className='closeNavbar'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        {/* Open Menu Icon */}
        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar
