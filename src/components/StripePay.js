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

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

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
        })
        .catch(err => console.log(err));
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row d-flex justify-content-center">
          <div className="form-group col-sm-5">
            <label>Card number</label>
            <CardNumberElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </div>
          <div className="form-group col-sm-5">
            <label>Expiration date</label>
            <CardExpiryElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </div>
        </div>
        <div className="form-row d-flex justify-content-center">
          <div className="form-group col-sm-5">
            <label>CVC</label>
            <CardCVCElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </div>
          <div className="form-group col-sm-5">
            <label>Postal code</label>
            <PostalCodeElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
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