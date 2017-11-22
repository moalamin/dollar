import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import dollarJPG from '../dollar.jpg';
import Checkout from './StripePay'
import {
  StripeProvider,
} from 'react-stripe-elements';


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
				<div
					key="back"
					className="d-flex justify-content-center"
					style={{ width: '100%' }}>
					<div
						className="dollar-form d-flex align-items-center"
						style={{
							width: '1200px',
							height: '512px',
							display: 'block'
						}}>
						<StripeProvider apiKey="pk_test_3YFRSG3lL4x6XYABP4tsMop3">
							<Checkout/>
						</StripeProvider>
					</div>
				</div>
			</ReactCardFlip>
		);
	}
}
