import { Component } from 'react';
import { nanoid } from 'nanoid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem('data')) || [
				{ name: 'Alex M.', salary: 3000, increase: false, rise: true, id: nanoid() },
				{ name: 'John S.', salary: 1000, increase: true, rise: false, id: nanoid() },
				{ name: 'Max P.', salary: 5000, increase: false, rise: false, id: nanoid() },
			],
			term: '',
			selectedFilter: 'all',
		};
	}

	updateLocalStorage = () => {
		const dataInLocalStorage = JSON.parse(localStorage.getItem('data'));
		if (JSON.stringify(dataInLocalStorage) === JSON.stringify(this.state.data)) {
			return;
		}
		localStorage.clear();
		localStorage.setItem('data', JSON.stringify(this.state.data));
	};

	onDelete = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	onAdd = (name, salary) => {
		if (!name || !salary) return;
		const newEmployee = {
			name,
			salary,
			increase: false,
			rise: false,
			id: nanoid(),
		};
		this.setState(({ data }) => {
			const newArr = [...data, newEmployee];
			return {
				data: newArr,
			};
		});
	};

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, increase: !item.increase };
				}
				return item;
			}),
		}));
	};

	onToggleRise = (id) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}
				return item;
			}),
		}));
	};

	searchEmployee = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter((item) => item.rise);
			case 'moreThan1000':
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	onFilterSelect = (selectedFilter) => {
		this.setState({ selectedFilter });
	};

	onInputChange = (id, salary) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary };
				}
				return item;
			}),
		}));
	};

	render() {
		const { data, term, selectedFilter } = this.state;
		const quantityOfEmployees = data.length;
		const quantityToIncrease = data.filter((i) => i.increase).length;
		const visibleData = this.filterPost(this.searchEmployee(data, term), selectedFilter);
		return (
			<div className="app">
				<AppInfo quantityOfEmployees={quantityOfEmployees} quantityToIncrease={quantityToIncrease} />
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter selectedFilter={selectedFilter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					onInputChange={this.onInputChange}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
					data={visibleData}
					onDelete={this.onDelete}
					updateLocalStorage={this.updateLocalStorage}
				/>
				<EmployeesAddForm onAdd={this.onAdd} updateLocalStorage={this.updateLocalStorage} />
			</div>
		);
	}
}

export default App;
