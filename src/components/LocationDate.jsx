import React from "react";

function LocationDate(prop){

    function getFormatDate(){
        const today = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const day = today.getDay(); //output number
        const dayName = days[day];

        const date = today.getDate();
        const month = today.getMonth() + 1 //start with 0 index -> January = 0
        const year = today.getFullYear();

        return `${dayName}, ${date}/${month}/${year}`
    }

    return (
        <div className="locationDate">
            <div className="location">
                <p>{`📍${prop.country}, ${prop.city}`}</p>
            </div>
            <div className="timeDate">
                <p>{getFormatDate()}</p>
            </div>
        </div>
    )
}


export default LocationDate;