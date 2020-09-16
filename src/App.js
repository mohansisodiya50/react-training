import React from 'react';
import './App.css';

import Movies from './components/Movies/Movies';

import Users from './components/Lifecycle/Users';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Movies />
				{/* <Users /> */}
			</div>
		);
	}
}

export default App;
