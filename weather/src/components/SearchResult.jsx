import React from "react";

function Result(prop){
    return (
        <div onClick={prop.getLocation} className="result">
            <p>📌 {prop.city}</p>
            <p>🌍 {prop.country}</p>
            <p>🗺️ Lat: {prop.lat} Lon: {prop.lon}</p>
        </div>
    )
}

function SearchResult(prop) {

    return (
        <div className={`search-result-container ${prop.hide ? 'hide' : ''}`} id="search-result">
            {prop.resultList.map((result, index) =>{
                return <Result 
                key={index}
                getLocation={() => {
                    console.log(result)
                }}
                city={result.name} 
                country={result.country} 
                lat={result.lat} 
                lon={result.lon} />
            })}
        </div>
    )
}

export default SearchResult;