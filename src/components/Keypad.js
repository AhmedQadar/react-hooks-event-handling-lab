// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handleFocus = () => {
        console.log('Entering password...');
    }
    return (
        <div>
        <input
        placeholder="Password"
        type="password"
        onChange={handleFocus}
        ></input>
        </div>
    )
}

export default Keypad;