import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export class Search extends Component {
    state={
        show: ''
    };
    
    static propTypes = {
        searchShows: PropTypes.func.isRequired
    }

    onChange = e =>this.setState({ [e.target.name]: e.target.value })

    onSubmit = e =>{
        e.preventDefault();
        this.props.searchShows(this.state.text);
        this.setState({ text: '' })
    }
    
    async componentDidMount() {
        const res = await axios
        .get('https://airnet.org.au/rest/stations/3pbs/programs');
        
        res.data.map(show => (console.log(show.name)))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" 
                    name="text" 
                    placeholder="Search Shows..." 
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block" 
                    />
                </form>
            </div>
        )
    }
}

export default Search
