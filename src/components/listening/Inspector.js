import React, { Component } from 'react';
import axios from 'axios';

class Inspector extends Component {

    inspector_funk = () => {
        
        console.log("Inspector Funk reporting for duty!")
        const url = 'https://airnet.org.au/rest/stations/3pbs/programs/switched-on/episodes/2020-12-26+13%3A00%3A00/playlists';
        console.log("query sent")
        axios.get(url)
        .then(res => {
            console.log("query complete")
            console.log(res.data)
        })
        }
        render() {
            return (
                <div>
                     <h2>Inspector</h2>
                     <button onClick={ () => this.inspector_funk()} > Inspector Funk! </button>
                </div>
            );
        }
    
}

export default Inspector
