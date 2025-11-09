import React from 'react'
import './popular.scss'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img from '../../Assets/Popular/Azadi_Iran.jfif'
// so now we are going to use a high array method to display all the destination using map. to do so we need to list all the destination in one array "data" and larer we shall call each destination by index/id.

const Data = [ 
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Machu Picchu',
    location: 'Pakistan',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: 'Santorini',
    location: 'Iran',
    grade: 'ROMANTIC',
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: 'Kyoto',
    location: 'Dubai',
    grade: 'TRADITIONAL',
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: 'Istanbul',
    location: 'Turkey',
    grade: 'HISTORICAL',
  },
];

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From historical cities to natural spectaculars, come see the best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className="mainContent_p grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return(
            <div className="singleDestination">
              <div className="destImage">
                <img src={imgSrc} alt="image Title" />

                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>
                    {location}
                  </p>
                  <BsArrowRightShort className='icon'/>

                </div>

              </div>

              <div className="destFooter flex">
                <div className="number">
                  <span> {id < 10 ? `0${id}` : id} </span> 
                </div>

                <div className="destText flex"> 
                  <h6>{location}</h6>
                  <span className='flex'>
                    <span className='dot'>
                      <BsDot className='icon'/>
                  </span>
                  Dot
                  </span>
                </div>
              </div>

            </div>

          );
        })}
          
        </div>
      </div>
    </section>
  )
}

export default Popular
