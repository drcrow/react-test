import React, { Component } from 'react';

class Ordenar extends Component{

	actualizarCantidad(evento){
		console.log(evento);
	}

	render(){

		return(
				<div>
					<br/>
					<label>Cantidad:</label>
					<input onChange={this.actualizarCantidad.bind(this)} type="number" min="0" max="20" />
					<label className="EspacioPlatillo">Precio: ${this.props.precio}</label>
				</div>
			);

	}

}

export default Ordenar;