import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
			</header>
			<body>
				<Navbar />
			</body>
		</div>
	);
}

export default App;
