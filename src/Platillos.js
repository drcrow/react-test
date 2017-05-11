import React, { Component } from 'react';
import './Platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';

class Platillos extends Component{

	render(){
		return(
			<div className="container col-md-6">
				<div>
					<div className="panel panel-primary">
						<div className="list-group Platillo-Menu"></div>
					</div>
				</div>
			</div>
			);
	}

}

export default Platillos;