import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<div class='container-fluid'>
				<nav class='navbar navbar-expand-md fixed-top navbar-dark bg-dark'>
					<a class='navbar-brand display-8 text-info' href='#'>
						Book Fairy
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbar1'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse justify-content-between' id='navbar1'>
						<div class='navbar-nav'>
							<a class='nav-item text-info nav-link' href='#'>
								Home
							</a>
							<a class='nav-item text-info nav-link' href='#'>
								Profile
							</a>
							<a class='nav-item text-info nav-link' href='#'>
								Order
							</a>
						</div>
						<div class='navbar-nav ml-auto'>
							<form class='form-inline'>
								<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
								<button class='btn btn-outline-info my-2 my-sm-0' type='submit'>
									Search
								</button>
							</form>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
