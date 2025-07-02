import React from "react";
import OtherSmallComponents from "./OtherSmallComponent";
import FlipButton from "./FlipButton";

function WeatherBack(prop){
    return (
        <div className={`weather-card-back ${!prop.hide ? 'hide' : ''}`}>
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/clouds.png" selfDesc="Cloudiness" selfTitle="Cloudiness" selfData={`${prop.selfData1} %`} />
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/visibility.png" selfDesc="visibility" selfTitle="Visibility" selfData={`${prop.selfData2} m`} />
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/humidity.png" selfDesc="Humidity" selfTitle="Humidity" selfData={`${prop.selfData3} %`} />
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/airmosphere_pressure.png" selfDesc="Air Pressure" selfTitle="Air Pressure" selfData={`${prop.selfData4} hPa`} />
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/rain.png" selfDesc="Rain" selfTitle="Rain" selfData={`${prop.selfData5} mm/h`} />
            <OtherSmallComponents selfClass="weather-information-back" selfImage="/images/snowy.png" selfDesc="Snow" selfTitle="Snow" selfData={`${prop.selfData6} mm/h`} />
            <FlipButton click={prop.click} />
        </div>
    )
}

export default WeatherBack;