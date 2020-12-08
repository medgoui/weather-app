import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const textInputHandler = location => {
    setLocation(location);
  }

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}weather?q=${location}&APPID=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  }

  return (
    <div className="container-fluid bgcontainer" style={{ background: `url(${'img/w.jpg'})` }}>
      <Navbar />
      <Search
        change={(e) => textInputHandler(e.target.value)}
        location={location}
        click={handleClick}
      />
      { weather === null ? null : (
        <div className="container carte">
          <div className="row h-100">
            <div className="col-sm-12 my-auto">
              <h3 style={{ textAlign: 'center', marginBottom: 15 }}>{weather.sys.country}</h3>
              <h6>Temperature: <span>{weather.main.temp - 273.15}°C</span></h6>
              <h6>Humidity: <span>{weather.main.humidity}</span></h6>
              <h6>Description: <span>{weather.weather[0].description}</span></h6>
              <h6>Temperature Max: <span>{weather.main.temp_max - 273.15}°C</span></h6>
              <h6>Temperature Min: <span>{weather.main.temp_min - 273.15}°C</span></h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
