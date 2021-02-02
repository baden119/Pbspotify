import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

export class Search extends Component {
    state={
        data: [],
        show: '',
        show_url:'',
        episode: '',
        shows:[],
        episodes:[]
    };
    
    static propTypes = {
        searchShows: PropTypes.func.isRequired
    }

    onChange = e =>this.setState({ [e.target.name]: e.target.value })

    showChange = e =>{
        this.setState({ [e.target.name]: e.target.value })
        this.state.data.map((show) => {
            if(show.name == e.target.value){this.setState({show_url: show.programRestUrl})}
        })
        //HOW DO I GET THIS TO WORK???
        getEpisodes = async => {
            const res = await axios
            .get(this.state.show_url);
            console.log(res.data);
          };
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.searchShows(this.state.text);
        this.setState({ text: '' })
    }
    
    async componentDidMount() {
        const res = await axios
        .get('https://airnet.org.au/rest/stations/3pbs/programs');
        this.setState({data: res.data})
        res.data.map((show, index) => {
            if(show.programRestUrl !== "https://airnet.org.au/rest/stations/3pbs/programs/"){
                this.setState({shows: [...this.state.shows, show.name]});
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <select value={this.state.show} name="show" onChange={this.showChange} id="show_dropdown">
                        {this.state.shows.map(show => (<option value={show}>{show}</option>))}
                    </select>
                    <select id="episode_dropdown">
                        {this.state.episodes.map(episode => (<option value={episode}>{episode}</option>))}
                    </select>
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
