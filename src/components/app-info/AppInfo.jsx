import './appInfo.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>List of employees in company</h1>
            <h2>The total number of employees in the company is {employees}</h2>
            <h2>bonus to receive: {increased.length}</h2>
        </div>
    )
}

export default AppInfo