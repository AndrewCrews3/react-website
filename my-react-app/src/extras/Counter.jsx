import React, { useState } from "react"

function Counter() {

    const [count,setCount] = useState(0);

    function increment() {
        //example of updater functions
         setCount(c => c + 1); 
         setCount(c => c + 1); 
         setCount(c => c + 1);  
    }
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return(
            <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={increment}>Incecrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
            </div>
    );

}
export default Counter