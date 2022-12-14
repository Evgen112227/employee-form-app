import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateSearchLocal = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};

	render() {
		return (
			<input
				onChange={this.onUpdateSearchLocal}
				type="text"
				className="form-control search-input"
				placeholder="Find employee"
				value={this.state.term}
			/>
		);
	}
}

export default SearchPanel;
