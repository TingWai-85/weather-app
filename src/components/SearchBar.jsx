import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";


function SearchBar(prop) {
    const [hide, setHide] = useState(true);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    const api_key = import.meta.env.VITE_OPEN_WEATHER_API;

    function barOnChange(event){
        const value = event.target.value;
        if (value !== ""){
            setHide(false);
            setQuery(value);
        }else {
            setHide(true);
            setQuery("");
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim() !== ""){
                fetchLocation(query);
            } else {
                setResult([]);
            }
        }, 500); //500ms

        return () => clearTimeout(delayDebounce); //cleanup on type
    }, [query]);

    async function fetchLocation(queryText){
        try {
            const apiResult = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${queryText}&limit=5&appid=${api_key}`);
            setResult(apiResult.data);            
        } catch (error) {
            console.error("Error fetching the location from the API: ", error);
            setResult([]);            
        }
    }

    function onItemClick(item){
        prop.onItemClick(item);
        setQuery("");
        setResult([]);
        setHide(true);
    }

    return (
        <div className="search-bar">
            <img src={prop.menuIMG} alt="hamburger menu" />
            <input onChange={barOnChange} type="text" id="searchCity" name="searchCity" placeholder="Search for your city" value={query} />
            <button><img src={prop.searchIMG} alt="search icon" /></button>
            <SearchResult hide={hide} resultList={result} onItemClick={onItemClick}/>
        </div>
    )
}


export default SearchBar;