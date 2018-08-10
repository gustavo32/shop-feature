import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		value: this.props.counter.value
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
		if (this.state.value === 0) {
		}
	};

	render() {
		const circleStyle = {
			borderRadius: 18,
			textAlign: "center",
			padding: "6 0",
			margin: 1,
			lineHeight: 1.42,
			fontSize: 12,
			witdh: 30,
			height: 30
		};

		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					className="btn btn-outline-success"
					onClick={this.handleIncrement}
					style={circleStyle}
				>
					<p style={{ fontWeight: "bold" }}>+</p>
				</button>
				<button
					className="btn btn-secondary"
					onClick={this.handleDecrement}
					style={circleStyle}
					disabled={!this.state.value}
				>
					<p style={{ fontWeight: "bold" }}>-</p>
				</button>
				<button
					className="btn btn-danger ml-5"
					style={circleStyle}
					onClick={() => this.props.onDelete(this.props.counter.id)}
				>
					<p style={{ fontWeight: "bold" }}>&times;</p>
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "secondary" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.state;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
