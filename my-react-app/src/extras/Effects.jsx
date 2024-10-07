import React, { useEffect, useState } from 'react'

// useEffect(() => {}) runs after ever re-render
// useEffect(() => {}, []) runs only on mount
// useEffect(() => {}, [value]] runs on mount + when value changes


function Effects() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green')

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() =>{
            document.title = `count: ${count} ${color}`; 
    }, [count, color])

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    
    
    } , []) 

    function addCount() {
        setCount(c => c + 1)
    }

    function subtractCount() {
        setCount(c => c - 1)
    }


    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');

    }

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
  return (

    <>
    
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={subtractCount}>subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </div>


    <p>Width: {width}</p>
    <p>Height: {height}</p>
    </>

  )
}

export default Effects