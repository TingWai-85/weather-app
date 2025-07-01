import React, { useState } from "react";
import SearchResult from "./SearchResult";

function SearchBar(prop) {
    const [hide, setHide] = useState(true);

    function barOnChange(event){
        if (event.target.value !== ""){
            setHide(false);
        }else {
            setHide(true);
        }
    };

    return (
        <div className="search-bar">
            <img src={prop.menuIMG} alt="hamburger menu" />
            <input onChange={barOnChange} type="text" id="searchCity" name="searchCity" placeholder="Search for your city" />
            <button><img src={prop.searchIMG} alt="search icon" /></button>
            <SearchResult hide={hide} resultList={prop.resultList}/>
        </div>
    )
}


export default SearchBar;