import React from 'react';
import './App.css';

import Movies from './components/Movies/Movies';

import Movie from './components/Movies/Movie';

import Users from './components/Lifecycle/Users';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Movies />
				{/* <Users /> */}
				{/* <Movie>Mohan Sisodiya</Movie> */}
			</div>
		);
	}
}

export default App;
