import { useState, useEffect} from 'react';
import  axios  from 'axios';
import './App.css';

import ImgGoogleMap from "./google-maps.png"
import ImgWeather from "./weather-forecast.png"


function App() {

  const [city, setCity]= useState("Nagpur");
  const [temp, setTemp]= useState("0");
  const [description, setDescription]= useState("");

  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id= ${city}&appid=d5511abf7a9efe13e05e7389dd6c4690`)
      if(response.status === 200){
        const temp = response.data.main.temp - 273.15
        setTemp(Math.round(temp));  
      }
    }
    loadData();

  }, [city])

  return (
    <>
      <div className='weather-title'>
        <div>
        <img src={ImgWeather} className="img-weather"/>
        </div>
        <div>
        <h1 className='app-title'> Weather App</h1>
        </div>
        
      </div>
     
      <div className='search-container'> 
        <img src={ImgGoogleMap} className="img-location"/>
        <input type="text" placeholder='Enter Your City'
         className='input-city'
         value={city}
         onChange={(e)=>setCity(e.target.value)} />
      </div>

      <div className='app-design'>
      <h2>City: {city}</h2><br/>
      <h2>Temp: {temp}</h2><br/>
      <h2>Temp: {temp}</h2><br/>
      <h2>Temp: {temp}</h2>
      </div>

      

    </>
  );
}

export default App;
