import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees/employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees/employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';
import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App