import React from 'react';
import './App.css';

import Movies from './components/Movies/Movies';

class App extends React.Component {
	render() {
		return (
		  <div className="App">
			  <Movies />
		  </div>
		);
	}
}

export default App;
