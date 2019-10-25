import React from 'react';
import Images from './Images';

class Cards extends React.Component {
	render() {
		return (
			<div className='row col-sm-6'>
				<div className='cards text-info mr-3' style={{ width: 15 + 'rem' }}>
					<img className='card-img-top' src={Images.clever} alt='Card image cap'></img>
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href='#' className='btn btn-info'>
							Go somewhere
						</a>
					</div>
				</div>
				<div className='cards text-info' style={{ width: 15 + 'rem' }}>
					<img className='card-img-top' src={Images.melik} alt='Card image cap'></img>
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href='#' className='btn btn-info'>
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Cards;
