import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<div className='App'>
			<div className='App-container'>
				<Navbar />
				<LandingPage />
			</div>
		</div>
	);
}

export default App;
