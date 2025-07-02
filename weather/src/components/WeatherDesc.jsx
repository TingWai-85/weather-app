import React from "react";

function WeatherDesc(prop){
    return (
        <div className="weather-desc">
            <div className="front-back-container">
                <div className="front weather-front">
                    <p>{Math.round(prop.temp * 10) / 10} °C</p>
                    <p>{prop.desc}</p>
                </div>
                <div className="back weather-back">
                    <p>{Math.round(prop.feelLike * 10) / 10} °C <span>FEELS LIKE</span></p>
                    <p>{Math.round(prop.minTemp * 10) / 10} °C <span>MIN</span></p>
                    <p>{Math.round(prop.maxTemp * 10) / 10} °C <span>MAX</span></p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDesc;