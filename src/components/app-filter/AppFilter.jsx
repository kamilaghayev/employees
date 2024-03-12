
import './appFilter.css';

const Appfilter = ({filter, onUptadeFilter}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];


    const buttons = buttonsData.map(({name, label}, index) => {
        const active = name === filter
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                key={index}
                className={`btn ${clazz}`}
                type="button"
                onClick={() => onUptadeFilter(name)}
            >
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default Appfilter