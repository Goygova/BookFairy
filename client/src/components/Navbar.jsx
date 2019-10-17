import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<nav class='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'>
				<div class='container'>
					<a class='navbar-brand text-info d-none d-sm-inline-block' href='#'>
						Book Fairy
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbar1'
						aria-controls='navbar1'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>

					<div class='collapse navbar-collapse' id='navbar1'>
						<div class='navbar-nav nav-justified'>
							<a class='nav-item nav-link text-info ' href='#'>
								Home
							</a>
							<a class='nav-item nav-link text-info' href='#'>
								Profile
							</a>
							<a class='nav-item nav-link text-info' href='#'>
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
				</div>
			</nav>
		);
	}
}

export default Navbar;
