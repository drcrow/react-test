import {extendObservable} from 'mobx';

class TiendaController{

	constructor(){
		extendObservable(this, 
			{
				platillos: [
					{nombre:"este es el nombre", descripcion:"esta es la descripcion", precio:100, cantidad:0},
					{nombre:"este es el otro", descripcion:"esta es la descripcion", precio:90, cantidad:0},
					{nombre:"este es el algo", descripcion:"esta es la descripcion", precio:80, cantidad:0}
				]
			}
		);
	}

	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{

				if(indicePlatillo===index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}

			}
		);
	}
}

var VarTiendaController = new TiendaController;
export default VarTiendaController;