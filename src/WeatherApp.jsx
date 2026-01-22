import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';




export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo] = useState({
        city:"",
        feelslike:25.69,
        temp:24.97,
        tempMin:24.97,
        tempMax:24.97,
        humidity: 83,
        weather: "mist",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/> 
        </div>
    );  
}