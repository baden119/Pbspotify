import React, { Component } from 'react'; 
import './App.css';
import Inspector from './components/listening/Inspector';
import Search from './components/listening/Search';
import axios from 'axios';

class App extends Component {

  state={
    songs:[],
    loading: false
  }


  searchShows = async show => {
    this.setState({ loading: true });
    const res = await axios
    .get('https://airnet.org.au/rest/stations/3pbs/programs/switched-on/episodes/2020-12-26+13%3A00%3A00/playlists');
    this.setState ({ songs: res.data, loading: false})
  };


  render() {
    return (
      <div className='App'>
        <div className="container">
          <Search searchShows={this.searchShows} />
          <Inspector loading={this.state.loading} songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default App;
