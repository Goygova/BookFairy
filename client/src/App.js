import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Carousel from './components/Carousel';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<Navbar />
				<Header />
			</div>
		</div>
	);
}

export default App;
