import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import dollarJPG from '../dollar.jpg';

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

	render() {
		return (
			<ReactCardFlip flipSpeedBackToFront={1.5} flipSpeedFrontToBack={1.5} isFlipped={this.state.isFlipped}>
				<div key='front' className='d-flex justify-content-center' style={{width: '100%'}} onClick={this.handleClick.bind(this)}>
					<img className='img-fluid' src={dollarJPG} alt='Dollar Bill'/>
				</div>
				<div key='back' className='d-flex justify-content-center' style={{width: '100%'}} onClick={this.handleClick.bind(this)}>
					<div className="dollar-form" style={{width: '1200px', height: '512px', display: 'block'}}></div>
				</div>
			</ReactCardFlip>
		);
	}
}