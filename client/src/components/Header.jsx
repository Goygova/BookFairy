import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div class='container'>
				<header class='jumbotron bg-dark'>
					<div class='display-2 mp-4 text-info'>Our mission</div>
					<p class='lead text-info'>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
				</header>
			</div>
		);
	}
}

export default Header;
