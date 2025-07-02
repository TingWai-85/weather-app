import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherFront from "./WeatherFront";
import WeatherBack from "./WeatherBack";

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

    const [location, setLocation] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [uvIndex, setUVIndex] = useState({});
    const [forecast, setForecast] = useState([]);
    const [hide, setHide] = useState(false);
    const [background, setBackground] = useState("clear-sky");
    const api_key = import.meta.env.VITE_OPEN_WEATHER_API;
    const uv_api_key = import.meta.env.VITE_OPEN_UV_API;
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function onItemClick(item) {
        setLocation(item);
    }

    function flipClick() {
        setHide(!hide);
    }

    useEffect(() => {
        if (location.lat && location.lon){
            getWeather(location.lat, location.lon);
            getUV(location.lat,location.lon);
            getForecastWeather(location.lat,location.lon);
        } 
    },[location])

    async function getWeather(lat,lon){
        try {
            const weatherResult = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
            const { weather, main, visibility , wind, clouds, rain = { '1h': "NA" }, snow = { '1h': "NA" }} = weatherResult.data;
            const formattedWeather = {
                weather,
                main,
                visibility,
                wind,
                clouds,
                rain,
                snow
            }
            setWeatherData(formattedWeather);
            const mainWeather =  weather[0].main;

            if (mainWeather === "Clear") {

                setBackground("clear-sky");

            }else if (mainWeather === "Clouds" || mainWeather === "Atmosphere") {

                setBackground("overcast-cloud");

            }else if (mainWeather === "Rain" || mainWeather === "Drizzle") {

                setBackground("raining");

            }else if (mainWeather === "Snow") {

                setBackground("snowing");

            }else {

                setBackground("thunderstorm");
            }
                      
        } catch (error) {
            console.error("Error for fetching the weather date: ", error);
            setWeatherData({});
        }
    }

    async function getUV(lat,lon){
        try {
            const uvResult = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}`, {
                headers: {
                    'x-access-token': uv_api_key,
                    "Content-Type": "application/json"
                },
            })
            const uvIndexResult = uvResult.data;
            const { result: {uv, uv_max} } = uvIndexResult;
            const newUVIndex = {
                uv,
                uv_max
            }
            setUVIndex(newUVIndex);            
        } catch (error) {
            console.error("Error to fetch the UV index: ", error);
            setUVIndex({});
        }
    }

    async function getForecastWeather(lat,lon){
        try {
            const myForecastWeather = [];
            const forecastResult = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`);
            const { list } = forecastResult.data;
            const forecastList = list.filter((item) => {
                return item.dt_txt.slice(11) === "00:00:00";
            })

            forecastList.map((item) => {
                const date = item.dt_txt;
                const dateObject = new Date(date.slice(0,10));
                const day = dateObject.getDate();
                const month = dateObject.getMonth();

                const forecastDate = `${day} ${months[month]}`;
                const icon = item.weather[0].icon;
                const temp = item.main.temp;

                const formattedDate = {
                    forecastDate,
                    icon,
                    temp
                }

                myForecastWeather.push(formattedDate)
            });

            setForecast(myForecastWeather);
            
        } catch (error) {
            console.error("Error for fetching forecast weather data: ", error);
            setForecast([]);
        }
    }

    return (
        <div className={`container ${background}`}>
            <div className="weather-card">
                <WeatherFront
                    hide={hide} 
                    onItemClick={onItemClick}
                    country={location.country}
                    city={location.name}
                    icon={weatherData.weather?.[0]?.icon}
                    imgDesc={weatherData.weather?.[0]?.description}
                    temp={weatherData.main?.temp}
                    desc={weatherData.weather?.[0]?.description}
                    feelLike={weatherData.main?.feels_like}
                    minTemp={weatherData.main?.temp_min}
                    maxTemp={weatherData.main?.temp_max}
                    currUV={uvIndex?.uv}
                    maxUV={uvIndex?.uv_max}
                    selfData={weatherData.wind?.speed}
                    forecastData={forecast}
                    click={flipClick} />
                
                <WeatherBack
                    hide={hide}
                    selfData1={weatherData.clouds?.all}
                    selfData2={weatherData?.visibility}
                    selfData3={weatherData.main?.humidity}
                    selfData4={weatherData.main?.pressure}
                    selfData5={weatherData.rain?.['1h'] ?? 0}
                    selfData6={weatherData.snow?.['1h'] ?? 0}
                    click={flipClick} />
            </div>
        </div>
    )
}


export default App;