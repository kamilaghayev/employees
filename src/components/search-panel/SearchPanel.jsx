import { Component } from 'react';
import './searchPanel.css'

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        this.setState({value})
        this.props.onUptadeSearch(value)
    }

    render() {
        
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="search employeer"
                value={this.state.value}
                onChange={this.handleChange}
            />
        )
    }
}

export default SearchPanel