import React, { useState } from "react";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    const [isDelayed, setDelay] = useState(false);

    function handleClick() {
        setIsClicked(true);

        setTimeout(() => {
            setDelay(true);    
        }, 2000);
    }

    

    return (
        <main>
            <div className={`div div-after-before ${isClicked ? "div-hover" : ""}`}>
                <div className={`block ${isClicked ? "block-clicked block-border" : ""}`}></div>
                <p className={isClicked ? `paragraph` : ""}>С 8 Марта</p>
                <div className={`heart ${isClicked ? "heart-hover heart-hover-after-before" : ""}`}></div>
                <button onClick={handleClick} className={isClicked ? "button" : ""}>Click on me</button>
                <img src="./img.jpg" width={200} className={`img ${isClicked ? "img-display" : ""} ${isDelayed ? "img-clicked" : ""}`}/>
            </div>
        </main>
    )
}

export default App;