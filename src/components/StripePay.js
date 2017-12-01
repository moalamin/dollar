import React from 'react';
import axios from 'axios';
import {
	CardElement,
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	PostalCodeElement,
	PaymentRequestButtonElement,
	StripeProvider,
	Elements,
	injectStripe
} from 'react-stripe-elements';

const createOptions = fontSize => {
	return {
		style: {
			base: {
				fontSize,
				color: '#424770',
				letterSpacing: '0.025em',
				fontFamily: 'Source Code Pro, Menlo, monospace',
				'::placeholder': {
					color: '#aab7c4'
				}
			},
			invalid: {
				color: '#9e2146'
			}
		}
	};
};

class _SplitForm extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = ev => {
		ev.preventDefault();
		this.props.handleLoading(true);
		this.props.stripe.createToken().then(payload => {
			axios
				.post(process.env.REACT_APP_ENDPOINT + '/api/charge', {
					stripeToken: payload.token.id
				})
				.then(response => {
					this.props.handleLoading(false);
					this.props.handleComplete(true);
					this.props.handleError(false);
				})
				.catch(err => console.log(err));
		}).catch(err => {
			console.dir(err)
			this.props.handleLoading(false);
			this.props.handleError(true);
			console.log(this.props.errors);
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-row d-flex justify-content-center">
					<div className="form-group col-sm-5">
						<label>Card number</label>
						<CardNumberElement
							{...createOptions(this.props.fontSize)}
						/>
					</div>
					<div className="form-group col-sm-5">
						<label>Expiration date</label>
						<CardExpiryElement
							{...createOptions(this.props.fontSize)}
						/>
					</div>
				</div>
				<div className="form-row d-flex justify-content-center">
					<div className="form-group col-sm-5">
						<label>CVC</label>
						<CardCVCElement
							{...createOptions(this.props.fontSize)}
						/>
					</div>
					<div className="form-group col-sm-5">
						<label>Postal code</label>
						<PostalCodeElement
							{...createOptions(this.props.fontSize)}
						/>
					</div>
				</div>
				<div className="form-row d-flex justify-content-center">
					<button className="col-sm-3 btn btn-success">Waste it</button>
				</div>
			</form>
		);
	}
}
export default injectStripe(_SplitForm);
