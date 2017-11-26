import React from 'react';
import FlipCard from './FlipCard';

export default props => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center">
				<h1 className="display-1" style={{ textAlign: 'center' }}>
					Waste a Dollar
				</h1>
			</div>
			<div className="row d-none d-sm-block">
				<div className="col-md-12">
					<div className="dollar-bill" style={{ width: '100%' }}>
						<FlipCard 
							isLoading={props.isLoading}
							isComplete={props.isComplete}
							handleLoading={props.handleLoading}
							handleComplete={props.handleComplete} />
					</div>
				</div>
			</div>
			<div className="row d-block d-sm-none">
				<div className="col-md-12">
					<div className="dollar-bill" style={{ width: '100%' }}>
						<h1 className="display-3">Show only on small</h1>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-12 d-flex justify-content-center">
					<h1>
						Total dollars wasted: #
					</h1>
				</div>
			</div>
		</div>
	);
};
