import React, { Component } from 'react';
import './Platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';

class Platillos extends Component{

	render(){

		let platillos_div = [];
		const llenar_array_platillos_div = VarTiendaController.platillos.forEach(
				(value, index)=>(
						platillos_div.push(
							<div key={index} className="list-group-item">
								<div className="panel-body">
									<img role="presentation" src={logo} className="ImagenPlatillo"/>
									<h2 className="TitlePlatillo">{value.nombre}</h2>
									<div className="DescripcionPlatillo">{value.descripcion}</div>
								</div>
							</div>
						)
					)
			);


		return(
			<div className="container col-md-6">
				<div>
					<div className="panel panel-primary">
						<div className="list-group Platillo-Menu">{platillos_div}</div>
					</div>
				</div>
			</div>
			);
	}

}

export default Platillos;