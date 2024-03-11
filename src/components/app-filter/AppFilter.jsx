import './appFilter.css';

const Appfilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button"
            >
                All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
            >
                up for promotion
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
            >
                salary more than 1000$
            </button>
        </div>
    )
}

export default Appfilter