import React from "react";

function OtherSmallComponents(prop){
    return (
        <div className={`weather-information ${prop.selfClass}`}>
            <img src={prop.selfImage} alt={prop.selfDesc} />
            <span>
                <p className="title">{prop.selfTitle}</p>
                <p>{prop.selfData}</p>
            </span>
        </div>
    )
}

export default OtherSmallComponents;