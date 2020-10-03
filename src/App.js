import React from 'react';
import './App.css';
import UseStateWithArray from './components/Hooks/UseState/UseStateWithArray';

import ClassExample from './components/Hooks/UseEffect/ClassExample';
import UseEffectExample from './components/Hooks/UseEffect/UseEffectExample';

class App extends React.Component {
	render() {
		return (
			<div className="App">
                <UseEffectExample />
			</div>
		);
	}
}

export default App;
