import React from 'react';
import FlipCard from './FlipCard';

export default (props) => {
	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="d-flex justify-content-center" >Just give a dollar:</h1>
				</div>
			</div>
			<FlipCard/>
		</div>
	);
};
