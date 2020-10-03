import React, { useState } from 'react'

export default function HooksCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>HooksCounter Component</h1>
            <button onClick={handleClick}>Count {count}</button>
        </div>
    )
}
