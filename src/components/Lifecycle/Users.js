import React, { Component } from 'react';

import User from './User';

export default class Users extends Component {
	state = {
		name: 'Mohan'
	};

	changeName = () => {
		this.setState({ name: 'Ryo' });
	};

	render() {
		return (
			<div>
				<h1>Users component</h1>
				{this.state.name === 'Mohan' && <User name={this.state.name} />}

				<button onClick={this.changeName}>Change Name</button>
			</div>
		);
	}
}
