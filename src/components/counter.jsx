import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		count: 0,
		items: ["item0", "item1", "item2"]
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button className="btn btn-outline-success btn-sm">Increment</button>
				<ul>{this.state.items.map(item => <li key={item}>{item}</li>)}</ul>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "secondary" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}

	doIncrement() {
		return this.setState({ count: 1 });
	}
}

export default Counter;
