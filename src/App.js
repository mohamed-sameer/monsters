import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
		console.log('constructor');
	}
	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((data) =>
				this.setState(
					() => {
						return { monsters: data.data };
					},
					() => console.log(this.state)
				)
			);
	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						const searchString = event.target.value.toLocaleLowerCase();
						const filteredMonsters = this.state.monsters.filter((monster) => {
							return monster.first_name
								.toLocaleLowerCase()
								.includes(searchString);
						});
						this.setState(() => {
							return { monsters: filteredMonsters };
						});
					}}
				/>
				{this.state.monsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.first_name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
