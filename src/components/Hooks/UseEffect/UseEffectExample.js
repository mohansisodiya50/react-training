import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function UseEffectExample() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data);
        })
    }, [])

    return (
        <div>
            <h1>UseEffectExample Component</h1>
                <ul>
                    {
                        posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </ul>
        </div>
    )
}
