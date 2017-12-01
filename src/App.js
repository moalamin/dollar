import React, { Component } from 'react';
import HomePage from './components/HomePage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			isComplete: false,
			errors: false
		};
		this.handleLoading = this.handleLoading.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
		this.handleError = this.handleError.bind(this);
	}
	handleLoading(choice) {
		if (choice === true) {
			this.setState({ isLoading: true });
		} else {
			this.setState({ isLoading: false });
		}
	}
	handleComplete(choice) {
		if (choice === true) {
			this.setState({ isComplete: true });
		} else {
			this.setState({ isComplete: false });
		}
	}
	handleError(choice) {
		if (choice === true) {
			this.setState({ errors: true });
		} else {
			this.setState({ errors: false });
		}
	}
	render() {
		return (
			<HomePage
				appState={this.state}
				handleComplete={this.handleComplete}
				handleLoading={this.handleLoading}
				handleError={this.handleError}
			/>
		);
	}
}

export default App;
