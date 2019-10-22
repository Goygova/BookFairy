import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Carousel from './components/Carousel';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route path='/' component={App} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
