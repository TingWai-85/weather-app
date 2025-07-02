import React from "react";

function WeatherImage(prop){
    return (
        <div className="weather">
            <img src={`https://openweathermap.org/img/wn/${prop.icon}@2x.png`} alt={prop.imgDesc} />
        </div>
    )
}

export default WeatherImage;