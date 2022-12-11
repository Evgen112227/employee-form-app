import './app-info.css';

const AppInfo = (props) => {
	return (
		<div className="app-info">
			<h1>Quantity of employee in company "Some company"</h1>
			<h2>Total quantity of employees: {props.quantityOfEmployees}</h2>
			<h2>Employees to rise: {props.quantityToIncrease}</h2>
		</div>
	);
};

export default AppInfo;
