import { useState, useEffect} from 'react';
import  axios  from 'axios';
import './App.css';

import ImgGoogleMap from "./google-maps.png"
import ImgWeather from "./weather-forecast.png"


function App() {

  const [city, setCity]= useState("Nagpur");
  const [temp, setTemp]= useState("23°C");
  const [country, setCountry]= useState("Cloudy");
  const [humidity,setHumidity] = useState("")

  useEffect(()=>{
    async function loadData(){
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=ee62ca6a48d0d532275182468f8a6f2e`)
      if(response.status === 200){
        const temp = response.data.main.temp - 273.15
        setTemp(Math.round(temp));  

        const country = response.data.main.country
        setCountry(country); 
        
        const humidity = response.data.main.humidity
        setHumidity(humidity); 
      }
    }
    loadData();

  }, [city])

  return (
    <div className=' row weather-container'>
      <div className=' col-md-3 weather-title'>
        <div>
        <img src={ImgWeather} className="img-weather"/>
        </div>
        <div>
        <h1 className='app-title'> Weather App</h1>
        </div>    
      </div>
     
      <div className=' col-md-3 search-container'> 
        <img src={ImgGoogleMap} className="img-location"/>
        <input type="text" placeholder='Enter Your City'
         className='input-city'
         value={city}
         onChange={(e)=>setCity(e.target.value)} />
      </div>

      <div className=' col-md-3 weather-card'>
      <h2>City: {city}</h2><br/>
      <h2>Temp: {temp}</h2><br/>
      <h2>Humidity: {humidity}</h2><br/>
      </div>

      

    </div>
  );
}

export default App;
