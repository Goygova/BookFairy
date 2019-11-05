import React from 'react';
import Images from './Images';
import { withRouter } from 'react-router-dom';

class Cards extends React.Component {
	handleClick = path => {
		this.props.history.push(path);
	};
	render() {
		return (
			<div className='row justify-content-center'>
				<div className='cards text-info mr-3 col-sm-3'>
					<img className='card-img-top' src={Images[0].url} alt='Clever'></img>
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<button className='btn btn-info' onClick={() => this.handleClick('/album')}>
							Go to album
						</button>
					</div>
				</div>
				<div className='cards text-info col-sm-3'>
					<img className='card-img-top' src={Images[1].url} alt='Melik-Pashaev'></img>
					<div className='card-body'>
						<h5 className='card-title'>Card title</h5>
						<p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<button className='btn btn-info' onClick={() => this.handleClick('/album2')}>
							Go to album
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Cards);
