import React, { Component } from 'react';
import Platillos from './Platillos';

class Lienzo extends Component{
	render(){
		return(
			<div className="container">
				<div className="jumbotron"><h2>Esto es algo</h2></div>
				<Platillos/>
				<h4>Pedidos</h4>
			</div>);
	}
}

export default Lienzo;