import React, { Component } from "react";

class Counter extends React.Component {
	componentWillUnmount = props => {
		() => this.props.onReset(this.props.counter);
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
					onClick={() => this.props.onIncrement(this.props.counter)}
					style={circleStyle}
				>
					<p style={{ fontWeight: "bold" }}>+</p>
				</button>
				<button
					className="btn btn-secondary"
					onClick={() => this.props.onDecrement(this.props.counter)}
					style={circleStyle}
					disabled={!this.props.counter.value}
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
		classes += this.props.counter.value === 0 ? "secondary" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
