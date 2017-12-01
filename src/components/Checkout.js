import React from 'react';
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
import SplitForm from './StripePay';

class Checkout extends React.Component {
	constructor() {
		super();
		this.state = {
			elementFontSize: window.innerWidth < 450 ? '14px' : '18px'
		};
		window.addEventListener('resize', () => {
			if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
				this.setState({ elementFontSize: '14px' });
			} else if (window.innerWidth >= 450 && this.state.elementFontSize !== '18px') {
				this.setState({ elementFontSize: '18px' });
			}
		});
	}

	render() {
		const { elementFontSize } = this.state;
		return (
			<div className="container">
				<div className="col-sm-8 offset-2 form-background">
					<Elements>
						<SplitForm
							appState={this.props.appState}
							handleLoading={this.props.handleLoading}
							handleComplete={this.props.handleComplete}
							handleError={this.props.handleError}
							fontSize={elementFontSize}
						/>
					</Elements>
				</div>
			</div>
		);
	}
}

export default Checkout;
