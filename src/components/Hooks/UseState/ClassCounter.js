import React, { Component } from 'react'

export default class ClassCounter extends Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h1>ClassCounter Component</h1>
                <button onClick={this.handleClick}>Count {this.state.count}</button>
            </div>
        )
    }
}
