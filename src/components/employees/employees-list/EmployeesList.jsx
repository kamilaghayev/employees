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

    return (
        <ul className="app-list list-group">
            {allEmployees}
        </ul>
    )
}

export default EmployeesList