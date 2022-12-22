import { useState, useEffect} from 'react';
import  axios  from 'axios';
import './App.css';

import ImgGoogleMap from "./google-maps.png"


function App() {

  const [city, setCity]= useState("Nagpur");
  const [temp, setTemp]= useState("0");
  const [description, setDescription]= useState("");

  useEffect(()=>{
    async function loadData(){
      const response = await axios.get('')
      if(response.status === 200){
        const temp = response.data.main.temp - 273.15
        setTemp(Math.round(temp));  
      }
    }
    loadData();

  }, [city])

  return (
    <>
      <h1 className='app-title'>Weather App</h1>
      <div className='search-container'> 
        <img src={ImgGoogleMap} className="img-location"/>
        <input type="text" placeholder='Enter Your City'
         className='input-city'
         value={city}
         onChange={(e)=>setCity(e.target.value)} />
      </div>

      <h2>City:{city}</h2>
      <h2>Temp:{temp}</h2>
    </>
  );
}

export default App;
