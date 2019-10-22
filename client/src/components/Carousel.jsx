import React from 'react';

class Carousel extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='carousel slide' id='featured' data-ride='carousel'>
							<div className='carousel-inner' role='listbox'>
								<div className='carousel-item'>
									<img className='d-block w-100' src='https://s5-images.ozstatic.by/producer/200/109/205/1/1205109_0.jpg' alt='Clever' />
								</div>
								<div className='carousel-item'>
									<img
										className='d-block w-100'
										src='http://sun9-43.userapi.com/c851528/v851528227/319b3/89_z-dIugaY.jpg?ava=1'
										alt='Melik-Pashaev'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Carousel;
