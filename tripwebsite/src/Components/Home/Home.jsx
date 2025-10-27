import React from 'react'
import './home.scss'

const Home = () => {
    return (
        <section className='home'>
          <div className='secContainer contanier'>

           <div className='homeText'>

            <h1 className="title">
              Plan Your Trip With Atemd
            </h1>

            <p className="subTitle"> {/* import p and upper h1 */}
              Travel to your favourite city with respectful of the enviroment!  
            </p>

            <button className='btn'>
             <a href="#">Explore Now</a>
            </button>

           </div>

           <div className="homeCard grid">

             <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination'/>
             </div>

            <div className="distDiv">
            <label htmlFor="distance">Date</label>
            <input type="text" placeholder='11/Meters'/>
            </div>

            <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='$140-$500'/>
            </div>

            <button className='btn'>
            Search
            </button>
             
           </div>



          </div>
        </section>
    )
}

export default Home