import React, { Component } from 'react';
import HomePage from './components/HomePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isComplete: false
        };
        this.handleLoading = this.handleLoading.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
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
    render() {
        return (
            <HomePage
                isLoading={this.state.isLoading}
                isComplete={this.state.isComplete}
                handleComplete={this.handleComplete}
                handleLoading={this.handleLoading}
            />
        );
    }
}

export default App;
