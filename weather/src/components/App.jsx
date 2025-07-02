import React, { useEffect, useState } from "react";
import WeatherFront from "./WeatherFront";

const testing = {
    "name": "Kuala Lumpur",
    "local_names": {
        "ka": "კუალა-ლუმპური",
        "az": "Kuala-Lumpur",
        "hy": "Կուալա Լումպուր"
    },
    "lat": 3.1516964,
    "lon": 101.6942371,
    "country": "MY"
}

function App() {

    const [location, setLocation] = useState({})

    function onItemClick(item) {
        setLocation(item);
    }

    useEffect(() => {
        console.log(location);
        
    },[location])

    return (
        <div className="container background">
            <div className="weather-card">
                <WeatherFront 
                    onItemClick={onItemClick} />
            </div>
        </div>
    )
}


export default App;