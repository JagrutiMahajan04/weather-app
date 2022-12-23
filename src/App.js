import { useState, useEffect} from 'react';
import  axios  from 'axios';
import './App.css';

import ImgGoogleMap from "./google-maps.png"
import ImgWeather from "./weather-forecast.png"


function App() {

  const [city, setCity]= useState("Nagpur");
  const [temp, setTemp]= useState("23°C");
  const [description, setDescription]= useState("Cloudy");
  const [date,setDate] = useState("23/12/22")

  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id= ${city}&appid=ee62ca6a48d0d532275182468f8a6f2e`)
      if(response.status === 200){
        const temp = response.data.main.temp - 273.15
        setTemp(Math.round(temp));  

        const description = response.data.main.description
        setDescription(description); 
        
        const date = response.data.main.date
        setDate(date); 
      }
    }
    loadData();

  }, [city])

  return (
    <div className='row-md-12   weather-container'>
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

      <div className=' weather-card'>
      <h2>City: {city}</h2><br/>
      <h2>Temp: {temp}</h2><br/>
      <h2>Description: {description}</h2><br/>
      <h2>Date: {date}</h2>
      </div>

      

    </div>
  );
}

export default App;
