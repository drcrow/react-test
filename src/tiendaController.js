import {extendObservable} from 'mobx';

class TiendaController{

	constructor(){
		extendObservable(this, 
			{
				platillos: [
					{nombre:"Bife de Chorizo", descripcion:"esta es la descripcion", precio:100, cantidad:0},
					{nombre:"Tarta de Verduras", descripcion:"esta es la descripcion", precio:90, cantidad:0},
					{nombre:"Flan con Dulce de Leche", descripcion:"esta es la descripcion", precio:80, cantidad:0}
				],
				bebidas: [
					{nombre:"Mojito", descripcion:"esta es la descripcion", precio:10, cantidad:0},
					{nombre:"CocaCola", descripcion:"esta es la descripcion", precio:9, cantidad:0},
					{nombre:"Agua Mineral", descripcion:"esta es la descripcion", precio:8, cantidad:0}
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

	bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{

				if(indicePlatillo===index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}

			}
		);
	}
}

var VarTiendaController = new TiendaController;
export default VarTiendaController;