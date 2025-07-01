import React from "react";
import SearchBar from "./SearchBar";

function WeatherFront(prop) {
    return (
        <div className="weather-card-front">
            <SearchBar 
            menuIMG="/images/burger-bar.png" 
            searchIMG="/images/search.png" 
            resultList={prop.resultList} />
        </div>
    )
}

export default WeatherFront;