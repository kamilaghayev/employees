import { Component } from 'react';

import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees/employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees/employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';
import './app.css';

const DATA = [
    {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
    {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
    {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            data: DATA,
            searchInp: '',
            filter: 'all',
        }
    }

    // delete current employees
    deleteEmployees = (employeesId) => {

        this.setState(prevstate => ({
            data: prevstate.data.filter(item => item.id !== employeesId)
        }))
    }

    //add new Employees
    addEmployees = (newEmployees) => {
        console.log(newEmployees);
        this.setState(prevstate => ({
            data: [newEmployees, ...prevstate.data]
        }))
    }

    /* toggleIncrease = (id) => {
        this.setState(({data}) => {
            const indexItem = data.findIndex(item => item.id === id);
            const oldArr = data[indexItem]
            const newItem = {...oldArr, increase: !oldArr.increase};
            const newArr = [...data.slice(0, indexItem), newItem , ...data.slice(indexItem +1)]
            return {
                data: newArr
            }
        })
    } */


    /* toggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }
    
    toggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    } */
    //toggle increase or rise on employees
    onToggleProp = (id, prop) => {
        
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop] : !item[prop]}
                }
                return item;
            })
        }))
    }

    //Search
    onSearch = (value, datas) => {

        if (!value || value.trim() === '') {
            return datas;
        }

        return datas.filter(item => item.name.toLowerCase().includes(value))
    }

    onUptadeSearch = (input) => {
        this.setState({searchInp: input});
    }

    //filter items
    filterEmp = (filterType, datas) => {
        
        switch (filterType) {
            case "rise":
                return datas.filter(item => item.increase)
            case "moreThan1000":
                return datas.filter(item => item.salary > 1000);
            default:
                return datas;
        }

    }
    onUptadeFilter = (filterType) => {
        this.setState({
            filter: filterType
        })
    }

    render() {
        const {data, searchInp, filter} = this.state;

        const allEmployees = data.length;
        const increased = data.filter(item => item.increase === true);

        const visibleData = this.filterEmp(filter, this.onSearch(searchInp, data));

        return (
            <div className="app">
                <AppInfo 
                    employees={allEmployees}
                    increased={increased}
                />
    
                <div className="search-panel">
                    <SearchPanel onUptadeSearch={this.onUptadeSearch}/>
                    <AppFilter filter={filter} onUptadeFilter={this.onUptadeFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteEmployees} 
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm addEmployees={this.addEmployees}/>
            </div>
        )
    }
}

export default App