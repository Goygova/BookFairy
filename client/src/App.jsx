import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Cards from './components/Cards';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Navbar />
				<LandingPage />
				<Cards />
			</div>
		</div>
	);
}

export default App;
