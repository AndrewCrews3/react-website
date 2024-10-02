import React, { useState } from "react";

function ColorPicker() {


    const [color, setColor] = useState('#FFFFFF')

    function handleColorChange(e) {
        setColor(e.target.value)
    }

    return(
        <>
        <div className="entire-container">
        <h1>Color Picker</h1>
        <div className="color-container" style={{backgroundColor: color}}>
            <p>Select A color: {color}</p> 
         </div>  
            <label>Color Selected: &nbsp;</label>
            <input className="switcher" type="color" value={color} onChange={handleColorChange} />
        </div>
        </>
    );
}

export default ColorPicker