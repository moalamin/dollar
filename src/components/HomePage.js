import React from 'react';
import FlipCard from './FlipCard';

export default (props) => {
	return (
		<div className="container-fluid">
			<div className="container d-flex justify-content-center">
				<div className="row">
					<h1>Give a Dollar</h1>
				</div>
			</div>
			<div className="row">
				<div className="container-fluid dollar-img">
					<FlipCard/>
				</div>
			</div>
		</div>
	);
};
