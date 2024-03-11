import "./employeesAddForm.css";

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new employees</h3>
            <form className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="salary?" />

                <button type="submit"
                        className="btn btn-outline-light">Submit</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm