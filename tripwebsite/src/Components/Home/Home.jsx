import React from 'react'
import './home.scss'

const Home = () => {
 const [location,setLocation]=React.useState('');
 const [date,setDate]=React.useState('');
 const [price,setPrice]=React.useState('');

const handleclick = ()=>{
  axios.get(`http://localhost/backend/,{
    
    location: ${location},
    date: ${date},
    price: ${price  
    }`)
   
  .then(res=>console.log(res.data))
}
 
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
            <input type="text" onChange={(e)=>setLocation(e.target.value)} placeholder='Dream Destination'/>
             </div>

            <div className="distDiv">
            <label htmlFor="distance">Departure Date</label>
            <input type="date" onChange={(e)=>setDate(e.target.value)} placeholder='11/Meters'/>
            </div>

            <div className="personDiv">
            <label htmlFor="person">Traveller & Class</label>
            <input type="number" placeholder='1 adult - 0 children' min="0" onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <button className='btn' onClick={handleclick}>
            Search
            </button>
             
           </div>



          </div>
        </section>
    )
}

export default Home