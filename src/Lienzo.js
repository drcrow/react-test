import React, { Component } from 'react';
import Platillos from './Platillos';
import Pedidos from './Pedidos';

class Lienzo extends Component{
	render(){
		return(
			<div className="container">
				<div className="jumbotron"><h2>React App</h2></div>
				<Platillos/>
				<Pedidos/>
			</div>);
	}
}

export default Lienzo;