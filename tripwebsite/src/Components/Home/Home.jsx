import React, { useState } from 'react';
import './home.scss';
import TravellerAndClass from '../TravellerAndClass/TravellerAndClass';
import axios from 'axios';

const Home = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState({ adults: 1, children: 0, infants: 0 });
  const [travelClass, setTravelClass] = useState('Economy');

  const handleSearch = () => {
    axios.get('http://localhost/backend', {
      params: {
        location,
        date,
        travellers,
        travelClass
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  };

  return (
    <section className='home'>
      <div className='secContainer container'>

        <div className='homeText'>
          <h1 className="title">Plan Your Trip With Atemd</h1>
          <p className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
          <button className='btn'><a href="#">Explore Now</a></button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Where are you going?' />
          </div>

          <div className="distDiv">
            <label htmlFor="date">Departure Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className="personDiv">
            <label htmlFor="person">Traveller & Class</label>
            <TravellerAndClass
              travellers={travellers}
              setTravellers={setTravellers}
              travelClass={travelClass}
              setTravelClass={setTravelClass}
            />
          </div>

          <button className='btn' onClick={handleSearch}>Search</button>
        </div>

      </div>
    </section>
  );
};

export default Home;
