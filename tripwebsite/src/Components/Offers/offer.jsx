import React from 'react'
import './offer.scss'
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Assets/istambul.jpg'

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div className="secIntro">
          <h2 className="h2 secTitle">Special Offers</h2>
          <p>From historical cities to natural specteulars, come see the best of the world!</p>
        </div>

        <div className="mainContent grid">
          <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />
              <span className="discount">30% Off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
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
                <small>450 Vine #310, London</small>
              </div>

              <button className='btn flex'>
                View Details
                <BsArrowRightShort className='icon'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
