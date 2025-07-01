import React from "react";
import WeatherFront from "./WeatherFront";

const testing= [
    {
        "name": "London",
        "local_names": {
            "so": "London",
            "ko": "런던",
            "ms": "London"
        },
        "lat": 51.5073219,
        "lon": -0.1276474,
        "country": "GB",
        "state": "England"
    },
    {
        "name": "City of London",
        "local_names": {
            "lt": "Londono Sitis",
            "uk": "Лондонське Сіті",
            "zh": "倫敦市",
            "en": "City of London",
            "hi": "सिटी ऑफ़ लंदन"
        },
        "lat": 51.5156177,
        "lon": -0.0919983,
        "country": "GB",
        "state": "England"
    },
    {
        "name": "London",
        "local_names": {
            "ka": "ლონდონი",
            "fr": "London",
            "oj": "Baketigweyaang",
            "ar": "لندن",
            "lt": "Londonas"
        },
        "lat": 42.9832406,
        "lon": -81.243372,
        "country": "CA",
        "state": "Ontario"
    },
    {
        "name": "Chelsea",
        "local_names": {
            "id": "Chelsea, London",
            "sk": "Chelsea",
            "no": "Chelsea",
            "et": "Chelsea"
        },
        "lat": 51.4875167,
        "lon": -0.1687007,
        "country": "GB",
        "state": "England"
    },
    {
        "name": "London",
        "lat": 37.1289771,
        "lon": -84.0832646,
        "country": "US",
        "state": "Kentucky"
    }
]

function App() {
    return (
        <div className="container background">
            <div className="weather-card">
                <WeatherFront 
                    resultList={testing}/>
            </div>
        </div>
    )
}


export default App;