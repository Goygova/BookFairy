import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Album from './components/Album';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/album' component={Album} />
			<Route path='/album2' component={Album} />
		</div>
	</Router>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
