import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

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
			<ReactCardFlip flipSpeedBackToFront='1.5' flipSpeedFrontToBack='1.5' isFlipped={this.state.isFlipped}>
				<div key='front' class='d-flex justify-content-center' style={{width: '100%'}} onClick={this.handleClick.bind(this)}>
					<img className='card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Onedolar2009series.jpg/1200px-Onedolar2009series.jpg' alt='Cute pup.'/>
				</div>
				<div key='back' class='d-flex justify-content-center' style={{width: '100%'}} onClick={this.handleClick.bind(this)}>
					<img className='card-img-top' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Onedolar2009series.jpg/1200px-Onedolar2009series.jpg' alt='Cute pup.'/>
				</div>
			</ReactCardFlip>
		);
	}
}