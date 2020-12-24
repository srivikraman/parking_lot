import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import FreeLots from './component/free_lots'; 
import Park from './component/park'; 
import Unpark from './component/unpark'; 
import './App.css'; 

class App extends Component { 
render() { 
	return ( 
	<Router> 
		<div className="App"> 
			<ul className="App-header"> 
			<li> 
				<Link to="/">Available lots</Link> 
			</li> 
			<li> 
				<Link to="/park_vehicle">Park Vehicle</Link> 
			</li> 
			<li> 
				<Link to="/unpark_vehicle">Unpark Vehicle</Link> 
			</li> 
			</ul> 
			<Switch> 
			<Route exact path='/' component={FreeLots}></Route> 
			<Route exact path='/park_vehicle' component={Park}></Route> 
			<Route exact path='/unpark_vehicle' component={Unpark}></Route> 
			</Switch> 
		</div> 
	</Router> 
); 
} 
} 

export default App; 