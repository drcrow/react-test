import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//import { HashRouter } from 'react-router-dom';

import Counter from './Counter';
//import App from './App';
import Lienzo from './Lienzo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const direcciones = (
	<Router history={browserHistory}>
		<Route path="/" component={Lienzo}></Route>
	</Router>
);

ReactDOM.render(
  direcciones,
  document.getElementById('root')
);
