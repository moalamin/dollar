import React from 'react';
import FlipCard from './FlipCard';
import axios from 'axios';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: null
		};
	}
	componentWillMount() {
		axios.get(process.env.REACT_APP_ENDPOINT + '/api/dollar_count').then(payload => {
			this.setState({ count: payload.data.count });
		});
	}
	render() {
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
								isLoading={this.props.isLoading}
								isComplete={this.props.isComplete}
								handleLoading={this.props.handleLoading}
								handleComplete={this.props.handleComplete}
							/>
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
				{this.state.count === null ? null : (
					<div className="row d-flex justify-content-center">
						<div className="col-12 d-flex justify-content-center">
							<h1>Dollars wasted: ${this.state.count}</h1>
						</div>
					</div>
				)}
			</div>
		);
	}
}
