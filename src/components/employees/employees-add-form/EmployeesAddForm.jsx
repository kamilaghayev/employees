import { Component } from "react";
import "./employeesAddForm.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Add new employees</h3>
                <form className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="salary?"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Submit</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm