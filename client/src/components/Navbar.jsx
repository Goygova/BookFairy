import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'>
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
							<a className='nav-item nav-link text-info' href='#'>
								Profile
							</a>
							<a className='nav-item nav-link text-info' href='#'>
								Order
							</a>
						</div>
						<div className='navbar-nav ml-auto'>
							<form className='form-inline'>
								<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
								<button className='btn btn-outline-info my-2 my-sm-0' type='submit'>
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

export default Navbar;
