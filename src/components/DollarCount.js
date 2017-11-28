import React from 'react';
import io from 'socket.io-client';

export default class DollarCount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: null
		};
		this.setSate = this.setState.bind(this);
	}

	componentWillMount() {
		let _this = this;
		let endPoint = process.env.REACT_APP_ENDPOINT;
		let socket = io.connect(endPoint);
		socket.emit('dollarCountRequest');
		socket.on('dollarCountTotal', function(data) {
			_this.setState({ count: data.count });
		});
	}

	render() {
		return this.state.count === null ? null : (
			<div className="row d-flex justify-content-center">
				<div className="col-12 d-flex justify-content-center">
					<h1>Dollars wasted: ${this.state.count}</h1>
				</div>
			</div>
		);
	}
}
