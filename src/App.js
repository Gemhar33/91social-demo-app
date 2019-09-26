import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Form from './components/Form';
import Details from './components/Details';

function App() {
	return (
		<div className="App">
			<Route path="/" exact component={Form} />
			<Route path="/details" component={Details} />
		</div>
	);
}

export default App;
