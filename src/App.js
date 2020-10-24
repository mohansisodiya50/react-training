import React from 'react';
import './App.css';
import UseStateWithArray from './components/Hooks/UseState/UseStateWithArray';

import ClassExample from './components/Hooks/UseEffect/ClassExample';
import UseEffectExample from './components/Hooks/UseEffect/UseEffectExample';

import UseEffectComponentDidiUpdate from './components/Hooks/UseEffect/UseEffectComponentDidiUpdate';
import UseEffectButton from './components/Hooks/UseEffect/UseEffectButton'

import ComponentA from './components/Context/ComponentA';
import ComponentB from './components/Context/ComponentB';

export const UserContext = React.createContext();
export const CompanyContext = React.createContext();

class App extends React.Component {
  state = {
    userInfo: {
      name: 'Mohan',
      age: 29
    },
    companyInfo: {
      companyName: 'Vestmark',
    }
  }

	render() {
		return (
			<div className="App">
        <UserContext.Provider value='Mohan'>
          <h1>App Component: UserName is Mohan</h1>
          <ComponentA />
          <ComponentB />
        </UserContext.Provider>
			</div>
		);
	}
}

export default App;
