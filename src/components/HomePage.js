import React from 'react';
import FlipCard from './FlipCard';

export default (props) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="container">
					<h1 className="d-flex justify-content-center" >Give a dollar</h1>
				</div>
			</div>
			<div className="row">
				<div className="container">
					<FlipCard/>
				</div>
			</div>
		</div>
	);
};
