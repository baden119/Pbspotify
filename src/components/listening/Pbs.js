import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import EpisodeItem from './EpisodeItem';

export class Pbs extends Component {
    state={
        episodes:[]
    };
    
    // static propTypes = {
    //     searchPrograms: PropTypes.array.isRequired
    // }

   getURL = (e) => {
        this.props.programs.forEach(program => {
            if (program.id == e.target.value){
                this.getEpisodes(program.url)
            }
        });
    };

    async getEpisodes(url) {
        const res = await axios
        .get(`${url}/episodes?numAfter=100&numBefore=100`)
        res.data.sort((a, b) => a.start < b.start ? 1: -1);

        res.data.forEach((episode, index) => {
            if (!episode.title){
                episode.title = '(No Episode Title Found)'
            };
            this.setState({episodes: [...this.state.episodes, {id: index, isSelected: false, episodeData: episode}]});
          })

        // this.setState({episodes: res.data});
    }

    render() {
        return (
            <div>
                <div>
                    <select value={this.state.selected_program} name="selected_program" onChange={e => this.getURL(e)} id="program_select_dropdown">
                        {this.props.programs.map(program => (
                            <option key={program.id} value={program.id}>{program.name}</option>))}
                    </select>
                </div>
                <div style={episodeStyle}>
                     {this.state.episodes.map(episode => (
                         <EpisodeItem key={episode.id} episode={episode} />
                     ))}
                </div>
            </div>
        )
    }
}
const episodeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Pbs
    
