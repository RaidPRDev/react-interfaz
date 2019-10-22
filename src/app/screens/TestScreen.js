import React, { useState, useEffect } from "react"

function TestScreen()
{
    const [ count, setCount ] = useState(0) 
    const [ color, setColor ] = useState("#000000") 

    function reset()
    {
        setCount(prevCount => 0);
    }

    // [] - return replaces -> componentDidMount
    useEffect(() => 
    {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        // return replaces -> componentDidUnmount
        return (() => {
            clearInterval(intervalId)
        })

    }, []) // empty array means don't watch for any values

    // watch count value and set color
    useEffect(() => {
        setColor(prevColor => "#FF8800");
    }, [count])

    return (
        <div>
            <div style={{color: color}}>{count}</div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default TestScreen