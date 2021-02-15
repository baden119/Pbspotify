import React, { Component } from 'react'; 
import './App.css';
import Pbs from './components/listening/Pbs';
import axios from 'axios';

class App extends Component {

  state={
    programs:[{id:0, name: 'none selected', url: null}]
  }

//Gets list of PBS shows.
  async componentDidMount() {
    const res = await axios
    .get('https://airnet.org.au/rest/stations/3pbs/programs');
    // console.log(res.data)
    res.data.forEach((program, index) => {
      if(program.programRestUrl !== "https://airnet.org.au/rest/stations/3pbs/programs/"){
        this.setState({programs: [...this.state.programs, {id: index, name: program.name, url: program.programRestUrl}]});
      }
    })
  };


  render() {
    return (
      <div className='App'>
        <div className="container">
          <Pbs programs={this.state.programs} />
        </div>
      </div>
    );
  }
}

export default App;
