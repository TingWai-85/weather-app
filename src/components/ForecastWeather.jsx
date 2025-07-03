import React from "react";

function Forecast(prop){
    return (
        <div className="forecast">
            <p className="title">{prop.forecastDate}</p>
            <img src={`https://openweathermap.org/img/wn/${prop.forecastImg}@2x.png`} alt="weather" />
            <p>{Math.round(prop.forecastTemp * 10) / 10} °C</p>
        </div>
    )
}

function ForecastWeather(prop) {
    return (
        <div className="forecast-container">
            {prop.forecastData.map((data, index) => {
                return (
                    <Forecast key={index} forecastDate={data.forecastDate} forecastImg={data.icon} forecastTemp={data.temp} />
                )
            })}
        </div>
    )
}

export default ForecastWeather;