import React from 'react';
import FlipCard from './FlipCard';

export default (props) => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1 className="display-1" style={{textAlign: 'center'}}>Give a Dollar</h1>
			</div>
			<div className="row d-none d-sm-block">
				<div className="col-md-12 d-sm-none d-md-block">
					<div className="dollar-bill" style={{width: '100%'}}>
						<FlipCard/>
					</div>
				</div>
			</div>
		</div>
	);
};
