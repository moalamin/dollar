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
			<ReactCardFlip isFlipped={this.state.isFlipped}>
				<div key="front" className="card" style={{width: "100%"}}>
					<img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Onedolar2009series.jpg/1200px-Onedolar2009series.jpg" alt="Cute pup."/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" onClick={this.handleClick.bind(this)} className="btn btn-primary">Go somewhere</a>
					</div>
				</div>
				<div key="back" className="card" style={{width: "100%"}}>
					<img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Onedolar2009series.jpg/1200px-Onedolar2009series.jpg" alt="Cute pup."/>
					<div className="card-body">
						<h4 className="card-title">Card title</h4>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" onClick={this.handleClick.bind(this)} className="btn btn-danger">Go somewhere</a>
					</div>
				</div>
			</ReactCardFlip>
		);
	}
}