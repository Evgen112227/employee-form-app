import { Component } from 'react/';

class SalaryInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			salary: this.props.salary,
		};
	}

	onUpdateInput = (e) => {
		const salary = e.target.value;
		this.setState({ salary }, () => this.props.onInputChange(this.props.id, this.state.salary));
		this.props.onInputChange(this.props.id, this.state.salary);
	};

	render() {
		return (
			<input
				style={{ border: '1px solid black', borderRadius: '10px' }}
				onInput={this.onUpdateInput}
				type="number"
				defaultValue={this.state.salary}
				value={this.state.value}
				className="list-group-item-input"
			/>
		);
	}
}

export default SalaryInput;
