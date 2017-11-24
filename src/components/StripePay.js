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
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then( payload => {
      console.log(payload)
      axios.post(process.env.REACT_APP_ENDPOINT + '/api/charge', {
        'stripeToken': payload.token.id
      }).then(response => {
        console.log(response)
      }).catch( err => console.log(err) )
    });
  };
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div className="form-row d-flex justify-content-center">
          <div className="form-group col-sm-5">
            <label>
              Card number
            </label>
            <CardNumberElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </div>
          <div className="form-group col-sm-5">
            <label>
              Expiration date
            </label>
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
            <label>
              CVC
            </label>
            <CardCVCElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(this.props.fontSize)}
            />
          </div>
          <div className="form-group col-sm-5">
            <label>
              Postal code
            </label>
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
const SplitForm = injectStripe(_SplitForm);

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
            <SplitForm fontSize={elementFontSize} />
          </Elements>
        </div>
      </div>
    );
  }
}

export default Checkout;
