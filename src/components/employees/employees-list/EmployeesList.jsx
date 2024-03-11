import EmployeesItem from "../employees-item/EmployeesItem"
import "./employeesList.css"

const EmployeesList = ({data}) => {
    const allEmployees = data.map((item, index) => {
        const {id, ...itemPorps} = item;
        return <EmployeesItem key={id} {...itemPorps}/>
    });
    return (
        <ul className="app-list list-group">
            {allEmployees}
        </ul>
    )
}

export default EmployeesList