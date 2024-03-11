import EmployeesItem from "../employees-item/EmployeesItem"
import "./employeesList.css"

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesItem/>
        </ul>
    )
}

export default EmployeesList