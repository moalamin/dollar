import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import dollarJPG from '../dollar.jpg';
import Checkout from './StripePay'
import {
  StripeProvider,
} from 'react-stripe-elements';
import ReactLoading from 'react-loading';


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
						{
							this.props.isLoading === false ? 
								<StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
									<Checkout isLoading={this.props.isLoading} handleLoading={this.props.handleLoading}/>
								</StripeProvider> 
								:
								<div className="container d-flex justify-content-center">
									<ReactLoading type="bars" color="#444" />
								</div>
						}
					</div>
				</div>
			</ReactCardFlip>
		);
	}
}
