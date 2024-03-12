import EmployeesItem from "../employees-item/EmployeesItem"
import "./employeesList.css"

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const allEmployees = data.map((item, index) => {
        const {id, ...itemPorps} = item;
        return (
            <EmployeesItem 
                key={id} 
                {...itemPorps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });
    const employeesEmpty = () => {
        return (
            <div className="w-100 text-center py-4 bg-light text-primary fs-3">
                There are no employees
            </div>
        )
    }
    return (
        <ul className="app-list list-group">
            {data.length ? allEmployees: employeesEmpty()}
        </ul>
    )
}

export default EmployeesList