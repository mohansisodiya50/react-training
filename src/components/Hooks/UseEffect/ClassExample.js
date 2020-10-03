import React, { Component } from 'react'
import axios from 'axios';

export default class ClassExample extends Component {
    state = {
        posts: []
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data});
            })
    }

    render() {
        return (
            <div>
                <h1>ClassExample Component</h1>
                <ul>
                    {
                        this.state.posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
                </ul>
            </div>
        )
    }
}
