import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		counters: [{ id: 0, value: 0 }, { id: 1, value: 1 }, { id: 2, value: 2 }]
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters: counters });
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleReset = counter => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<Navbar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container m-2">
					<Counters
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
