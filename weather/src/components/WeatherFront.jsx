import React from "react";
import SearchBar from "./SearchBar";

function WeatherFront(prop) {

    function onItemClick(item) {
        prop.onItemClick(item)
    }

    return (
        <div className="weather-card-front">
            <SearchBar 
            menuIMG="/images/burger-bar.png" 
            searchIMG="/images/search.png" 
            onItemClick={onItemClick} />
        </div>
    )
}

export default WeatherFront;