import React, { Component } from 'react';

// importing component
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		);
	}
}

export default App;
