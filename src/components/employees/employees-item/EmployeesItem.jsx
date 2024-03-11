import { Component } from 'react';
import './employeesItem.css'

class EmployeesItem extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({increase: !increase}))
    };

    setLike = () => {
        this.setState((prevstate) => ({like: !prevstate.like}))
    }
    render() {
        const {name, salary} = this.props;
        const {increase} = this.state;
        const {like} = this.state;

        let className = "list-group-item d-flex justify-content-between";
        if(increase) className += " increase";
        if (like) className += " like";

        return (
            <li className={className}>
                <span 
                    onClick={this.setLike}
                    className="list-group-item-label">
                    {name}
                </span>
                <input type="text" className="list-group-item-input" 
                    defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }
}

export default EmployeesItem