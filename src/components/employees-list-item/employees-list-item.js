import './employees-list-item.css';
import SalaryInput from '../salary-input/salary-input';

function EmployeesListItem(props) {
	const {
		name,
		salary,
		id,
		onDelete,
		updateLocalStorage,
		onToggleIncrease,
		onToggleRise,
		onInputChange,
		increase,
		rise,
	} = props;
	updateLocalStorage();
	const defaultLiClass = 'list-group-item d-flex justify-content-between';
	let computedClass = increase ? defaultLiClass + ' increase' : defaultLiClass;
	computedClass = rise ? computedClass + ' like' : computedClass;

	return (
		<li className={computedClass}>
			<span className="list-group-item-label" onClick={onToggleRise}>
				{name}
			</span>
			<SalaryInput salary={salary} onInputChange={onInputChange} id={id} updateLocalStorage={updateLocalStorage} />
			{/* <input
				onInput={() => onInputChange(salary)}
				type="number"
				className="list-group-item-input"
				defaultValue={salary}
			/> */}
			<div className="d-flex justify-content-center align-items-center">
				<button type="button" className="btn-cookie btn-sm " onClick={onToggleIncrease}>
					<i className="fas fa-cookie"></i>
				</button>
				<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
}

export default EmployeesListItem;
