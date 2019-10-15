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
					<div class='container ml-auto'>
						<div class='collapse navbar-collapse nav-justified' id='navbar1'>
							<a class='nav-item nav-link text-info ' href='#'>
								Home
							</a>
							<a class='nav-item nav-link text-info' href='#'>
								Profile
							</a>
							<a class='nav-item nav-link text-info' href='#'>
								Order
							</a>

							<div class='navbar-nav ml-auto'>
								<form class='form-inline'>
									<input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
									<button class='btn btn-outline-info my-2 my-sm-0' type='submit'>
										Search
									</button>
								</form>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
