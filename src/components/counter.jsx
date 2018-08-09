import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		value: this.props.value
	};

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					className="btn btn-outline-success btn-sm"
					onClick={this.handleIncrement}
				>
					Increment
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

	doIncrement() {
		return this.setState({ value: 1 });
	}
}

export default Counter;
