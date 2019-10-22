import React from 'react';

class Carousel extends React.Component {
	render() {
		return (
			<div class='container'>
				<div class='carousel slide' id='featured' data-ride='carousel'>
					<div class='carousel-inner'>
						<div class='carousel-item'>
							<img class='d-block w-100' src='https://s5-images.ozstatic.by/producer/200/109/205/1/1205109_0.jpg' alt='Clever' />
						</div>
						<div class='carousel-item'>
							<img
								class='d-block w-100'
								src='http://sun9-43.userapi.com/c851528/v851528227/319b3/89_z-dIugaY.jpg?ava=1'
								alt='Melik-Pashaev'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Carousel;
