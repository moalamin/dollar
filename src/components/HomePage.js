import React from 'react';
import FlipCard from './FlipCard';

export default (props) => {
	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="d-flex justify-content-center" >Give me a damn dollar!</h1>
				</div>
			</div>
			<FlipCard/>
		</div>
	);
};