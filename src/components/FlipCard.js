import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import dollarJPG from '../dollar.jpg';

export default class Flipcard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFliped: false
		};
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ isFlipped: !this.state.isFlipped });
	}

	handleSubmit(e) {
		e.stopPropagation()
	}

	render() {
		return (
			<ReactCardFlip flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5} isFlipped={this.state.isFlipped}>
				<div
					key="front"
					className="d-flex justify-content-center"
					style={{ width: '100%' }}
					onClick={this.handleClick.bind(this)}>
					<img className="img-fluid" src={dollarJPG} alt="Dollar Bill" />
				</div>
				<div
					key="back"
					className="d-flex justify-content-center"
					style={{ width: '100%' }}>
					<div
						className="dollar-form"
						style={{
							width: '1200px',
							height: '512px',
							display: 'block'
						}}>
						<form>
							<div className="container">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="inputEmail4">Email</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail4"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="inputPassword4">Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPassword4"
												placeholder="Password"
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="inputEmail4">Email</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail4"
												placeholder="Email"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="inputPassword4">Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPassword4"
												placeholder="Password"
											/>
										</div>
									</div>
									<button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-primary">
										Sign in
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</ReactCardFlip>
		);
	}
}
