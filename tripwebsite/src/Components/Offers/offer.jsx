import React from 'react'
import './offer.scss'
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Assets/Special/HOTEL_ISTAQLAL.webp'
import img2 from '../../Assets/Special/Serena_Hotel.jpg'
import img3 from '../../Assets/Special/Suadhan Hotel.jpg'




const offers = [
   {
      id: 1,
      imgSrc: img,
      destTitle: 'Istaqlal Hotel',
      location: 'Iran - Tehran',
      price: 'Istaqlal Hotel',
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Serena Hotel',
      location: 'Pakistan - IslamAbad',
      price: 'Serena Hotel',
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Suadhan Hotel',
      location: 'Sk. No:8, Fatih, Istanbul',
      price: 'Suadhan Hotel',
    },
    
]
const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="h2 secTitle">Special Offers And Hotel Bookings</h2>
          <p>From historical cities to natural specteulars, come see the best of the world!</p>
        </div>



        <div className="mainContent grid">
          
          {
            offers.map(({id, imgSrc, destTitle, location, price}) => {
              return (
              <div className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle} />
              <span className="discount">30% Off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>
                {price}
                </h4>
                <span className="status">For Rent</span>
              </div>

              <div className="amenities">
                <div className="amenityRow flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className='icon'/>
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className='icon'/>
                    <small>1 Bath</small>
                  </div>
                </div>

                <div className="amenityRow flex">
                  <div className="singleAmenity flex">
                    <FaWifi className='icon'/>
                    <small>Wi-fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className='icon'/>
                    <small>Shuttle</small>
                  </div>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon'/>
                <small>{location}</small>
              </div>

              <button className='btn flex'>
                View Details
                <BsArrowRightShort className='icon'/>
              </button>
            </div>
              </div>
              )
            })
          }
        
      </div>  
      </div>
    </section>
  )
}

export default Offer
