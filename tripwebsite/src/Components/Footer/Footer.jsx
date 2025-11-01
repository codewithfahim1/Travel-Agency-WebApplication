import React from 'react'
import './footer.scss'
import { MdCardTravel } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footerContainer container grid">

        {/* Logo and Social Icons */}
        <div className="logoDiv">
          <div className="footerLogo flex">
            <MdCardTravel className="icon" />
            <span className="logoText">AtemadTravel</span>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitterX className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <ul className="linksList">
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footerContact">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+93 732354353</span>
          <span className="email">fahimnikseyar@gmail.com</span>
        </div>

      </div>
    </section>
  )
}

export default Footer
