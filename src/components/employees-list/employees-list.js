import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, updateLocalStorage, onToggleIncrease, onToggleRise, onInputChange }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				updateLocalStorage={updateLocalStorage}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
				onInputChange={onInputChange}
				id={id}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
