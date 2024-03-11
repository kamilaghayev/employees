import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees/employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees/employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';
import './app.css';

const App = () => {

    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 5000, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App