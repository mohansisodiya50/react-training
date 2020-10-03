import React, { useState } from 'react'

export default function UseStateWithArray() {
    const [items, setItems] = useState([
        { id: 0, value: 0},
        { id: 1, value: 1},
    ]);

    const handleAddItem = () => {
        const newItem = { id: items.length, value: Math.floor(Math.random() * 10) + 1 };
        setItems([...items, newItem])
    }

    return (
        <div>
            <h1>UseStateWithArray Component</h1>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}
