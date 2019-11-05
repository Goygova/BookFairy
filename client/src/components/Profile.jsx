import React from 'react';

class Profile extends React.Component {
	render() {
		return (
			<div className='text-info'>
				<div className='row'>
					<div className='col-sm-10'>
						<h1>User Name</h1>
					</div>
				</div>
				<hr />
				<form className='form'>
					<div className='form-row'>
						<div className='form-group col-md-6'>
							<label htmlFor='firstName'>
								<h4>First Name</h4>
							</label>
							<input type='text' className='form-control' id='firstName' placeholder='First name' title='enter your first name' />
						</div>
						<div className='form-group col-md-6'>
							<label htmlFor='lastName'>
								<h4>Last Name</h4>
							</label>
							<input type='text' className='form-control' id='lasttName' placeholder='Last name' title='enter your last name' />
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='inputAddress'>Address</label>
						<input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' />
					</div>
					<div className='form-group'>
						<label htmlFor='inputAddress2'>Address 2</label>
						<input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' />
					</div>
					<div className='form-row'>
						<div className='form-group col-md-6'>
							<label htmlFor='inputCity'>City</label>
							<input type='text' className='form-control' id='inputCity' />
						</div>
						<div className='form-group col-md-6'>
							<label htmlFor='inputCoutry'>Country</label>
							<select type='inputCountry' className='form-control'>
								<option defaultValue>Choose...</option>
								<option>...</option>
							</select>
						</div>
					</div>
					<div className='form-row'>
						<div className='form-group col-md-4'>
							<label htmlFor='inputState'>State</label>
							<select id='inputState' className='form-control'>
								<option defaultValue>Choose...</option>
								<option>...</option>
							</select>
						</div>
						<div className='form-group col-md-2'>
							<label htmlFor='inputZip'>Zip</label>
							<input type='text' className='form-control' id='inputZip' />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Profile;
