import React from "react";

function UV(prop){

    function uvSuggestion(maximumUV){
        let message;

        if (maximumUV < 3){
            message = "No sunscreen needed today.";
        } else if (maximumUV < 6){
            message = "Apply sunscreen if you're staying outside.";
        } else if (maximumUV < 8){
            message = "High UV: Apply sunscreen and avoid long sun exposure.";
        } else {
            message = "Very high/extreme UV: Wear sunscreen, hat, sunglasses. Minimize sun exposure!";
        }

        return message;
    }

    return (
        <div className="uv">
            <div className="front-back-container">
                <div className="front weather-information">
                    <img src="./images/uv-protection.png" alt="uv-protection" />
                    <span>
                        <p className="title">UV Index</p>
                        <p>{prop.currUV}</p>
                    </span>
                </div>
                <div className="back uv-back">
                    <p><strong>Max UV: {prop.maxUV}</strong></p>
                    <p>{uvSuggestion(prop.maxUV)}</p>
                </div>
            </div>
        </div>
    )
}

export default UV;