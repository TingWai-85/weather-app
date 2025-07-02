import React from "react";
import SearchBar from "./SearchBar";
import LocationDate from "./LocationDate";
import WeatherImage from "./WeatherImage";
import WeatherDesc from "./WeatherDesc";
import UV from "./UV";
import OtherSmallComponents from "./OtherSmallComponent";
import ForecastWeather from "./ForecastWeather";
import FlipButton from "./FlipButton";

function WeatherFront(prop) {

    function onItemClick(item) {
        prop.onItemClick(item)
    }

    return (
        <div className={`weather-card-front ${prop.hide ? 'hide' : ''}`}>
            <SearchBar 
            menuIMG="/images/burger-bar.png" 
            searchIMG="/images/search.png" 
            onItemClick={onItemClick} />
            
            <LocationDate country={prop.country} city={prop.city}/>
            <WeatherImage icon={prop.icon} imgDesc={prop.imgDesc}/>
            <WeatherDesc temp={prop.temp} desc={prop.desc} feelLike={prop.feelLike} minTemp={prop.minTemp} maxTemp={prop.maxTemp} />
            <UV currUV={prop.currUV} maxUV={prop.maxUV} />
            <OtherSmallComponents selfClass="wind-speed" selfImage="/images/wind.png" selfDesc="wind speed" selfTitle="Wind Speed" selfData={`${prop.selfData} m/s`} />
            <ForecastWeather forecastData={prop.forecastData} />
            <FlipButton click={prop.click} />
        </div>
    )
}

export default WeatherFront;