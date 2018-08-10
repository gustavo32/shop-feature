import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
	render() {
		return (
			<div>
				{this.props.counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						onDecrement={this.props.onDecrement}
						counter={counter}
					/>
				))}
				<button
					className="btn btn-outline-primary btn-sm m-5"
					onClick={this.props.onReset}
				>
					RESET
				</button>
			</div>
		);
	}
}

export default Counters;
