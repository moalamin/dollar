/* globals process */

import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import dollarJPG from '../dollar.jpg';
import Checkout from './Checkout';
import ReactLoading from 'react-loading';
import { StripeProvider } from 'react-stripe-elements';

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
		e.preventDefault();
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
				<div key="back" className="d-flex justify-content-center" style={{ width: '100%' }}>
					<div
						className="dollar-form d-flex align-items-center"
						style={{
							width: '1200px',
							height: '512px',
							display: 'block'
						}}>
						{this.props.appState.isComplete ? (
							<div className="container d-flex justify-content-center">
								<h1 className="display1">Great, you wasted a dollar.</h1>
							</div>
						) : (
							<div>
								<div className={this.props.appState.isLoading === true ? 'd-none' : 'd-block'}>
									<StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
										<Checkout
											appState={this.props.appState}
											handleLoading={this.props.handleLoading}
											handleComplete={this.props.handleComplete}
										/>
									</StripeProvider>
								</div>
								<div className={this.props.appState.isLoading === true ? 'd-block' : 'd-none'}>
									<div className="container d-flex justify-content-center">
										<ReactLoading type="bars" color="#444" />
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</ReactCardFlip>
		);
	}
}
