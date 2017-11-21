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
  injectStripe,
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

const createOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class _SplitForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => console.log(payload));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-md-6">
          <div className="form-group">
            <label>
              Card number
              <CardNumberElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(this.props.fontSize)}
              />
            </label>
          </div>
        </div>
        <label>
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          CVC
          <CardCVCElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <label>
          Postal code
          <PostalCodeElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}
const SplitForm = injectStripe(_SplitForm);

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const {elementFontSize} = this.state;
    return (
      <div className="container">
        <div className="checkout-wrapper">
          <h2 class="text-center">Go Ahead and Waste a Dollar</h2>
          <Elements>
            <SplitForm fontSize={elementFontSize} />
          </Elements>
        </div>
      </div>
    );
  }
}

export default Checkout;