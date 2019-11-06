import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
	handleClick = path => {
		this.props.history.push(path);
	};

	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-dark shadow-lg p-3 mb-5 rounded'>
				<div className='container'>
					<a className='navbar-brand text-info d-none d-sm-inline-block' href='#'>
						Book Fairy
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbar1'
						aria-controls='navbar1'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='collapse navbar-collapse' id='navbar1'>
						<div className='navbar-nav nav-justified'>
							<a className='nav-item nav-link text-info ' href='#'>
								Home
							</a>
							<a className='nav-item nav-link text-info' onClick={() => this.handleClick('/profile')}>
								Profile
							</a>
							<a className='nav-item nav-link text-info' href='#'>
								Order
							</a>
						</div>
						<div className='navbar-nav ml-auto'>
							<form className='form-inline'>
								<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
								<button className='btn btn-outline-info' type='submit'>
									Search
								</button>
							</form>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar);
