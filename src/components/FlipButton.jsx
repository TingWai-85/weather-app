import React from "react";

function FlipButton(prop){
    return (
        <div className="flip-card">
            <button onClick={prop.click}>Flip The Card</button>
        </div>
    )
}

export default FlipButton;