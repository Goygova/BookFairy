import React from 'react';

class Album extends React.Component {
	render() {
		return (
			<div className='bg-dark'>
				<div className='container bg-dark margin-auto'>
					<div className='card bg-dark' style={{ width: 15 + 'rem' }}>
						<img
							class='card-img-top mt-3'
							src='https://www.clever-media.ru/upload/resize_cache/iblock/eb2/358_358_090cf9bfc02c81ba0a02cc940d6445018/eb2eb82f10c7599c2c45dba2ab66492c.jpg'
							alt='Card cap'
						/>
						<div class='card-body text-white'>
							<h5 class='card-title'>Развиваем внимание. Занимательная тетрадка. 4 года</h5>
							<p class='card-text'>
								Пособие научит вашего ребёнка самостоятельно находить решения; выделять важную информацию; позитивно настраивать себя на
								учёбу.​​
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Album;
