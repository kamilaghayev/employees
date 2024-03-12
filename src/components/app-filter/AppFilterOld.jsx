import { Component } from 'react';
import './appFilter.css';

class Appfilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 1
        }
    }

    btnClass = (id) => {
        let className = "btn "
        if (this.state.activeBtn === id) {
            className += "btn-light";
        } else {
            className += "btn-outline-light"
        }
        return className;
    }

    handleFilter = (e, id) => {
        const filterAttr = e.currentTarget.getAttribute("data-filter");
        this.setState({
            activeBtn: id
        });

        this.props.filter(filterAttr)
    }

    render() {

        return (
            <div className="btn-group">
                <button 
                    className={this.btnClass(1)}
                    type="button"
                    onClick={(e) => this.handleFilter(e,1)}
                    data-filter="all"
                >
                    All employees
                </button>
                <button 
                    className={this.btnClass(2)}
                    type="button"
                    onClick={(e) => this.handleFilter(e,2)}
                    data-filter="rise"
                >
                   increase employees
                </button>
                <button 
                    className={this.btnClass(3)}
                    type="button"
                    onClick={(e) => this.handleFilter(e,3)}
                    data-filter="moreThan1000"
                >
                    salary more than 1000$
                </button>
            </div>
        )
    }
}

export default Appfilter