import React, { Component } from 'react';
import HomePage from './components/HomePage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.handleLoading = this.handleLoading.bind(this);
    }
    handleLoading(choice){
        if (choice === true) {
            this.setState({isLoading: true});
        } else {
            this.setState({isLoading: false});
        }
    }
	render () {
		return (
			<HomePage isLoading={this.state.isLoading} handleLoading={this.handleLoading} />
		);
	}
}

export default App;
