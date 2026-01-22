import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import  ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';




export default function InfoBox({info})  {
const INIT_URL = 
"https://images.unsplash.com/photo-1641970304222-b2b332808a4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700";


let  HOT_URL ="https://media.istockphoto.com/id/453477435/photo/hot.webp?a=1&b=1&s=612x612&w=0&k=20&c=npTWFHlgMQW_VdZ35cszLa3-DIe0gmwtEaIYWpWq-fU=";
let  COLD_URL = "https://images.unsplash.com/photo-1642490128727-e6c95a694ff2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29sZCUyMHdoZXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700";
let RAIN_URL = "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMCUyMHdoZXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700";





    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo -{info.weather}</h1> */}
            <div className="cardContainer"> 

            
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity >80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity >80 ?  <ThunderstormIcon/> : info.temp>15 ? < WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>tempMax = {info.tempMax}&deg;C</p>
            <p>tempMin = {info.tempMin}&deg;C</p>
            <p>humidity = {info.humidity}</p>
            <p>The wather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
        </Typography>
        </CardContent>
        
    </Card>
    </div>
    </div>
        
    );
}