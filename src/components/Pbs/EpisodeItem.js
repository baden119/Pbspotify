//Component which takes as input a single episode object and returns a card with some info.

import React from 'react'
// import PropTypes from "prop-types";

//Get this to work, maybe by changin it to a proper component.
// onCheckboxChange(id) {
//     //will sent the episode id back to the pbs component, which will toggle the isSelected value of the
//     //episode object.
//     //Then, by looping through the episodes it should be possible to get a list of selected episodes, with
//     //accompanying playlist URLS, in order to create a list of songs to pass back to the app.js for a hypothetical
//     //Spotify component.
    
//     console.log(id)

// };
const EpisodeItem = ({episode}) => {

    return (
        <div style={{border: '1px solid black'}}>
            
            <h4>{episode.episodeData.title}
            <input
                type="checkbox"
                name={episode.id}
                checked={episode.isSelected}
                // onChange={onCheckboxChange(episode.id)}
            /></h4>
            <a href={`${episode.episodeData.episodeRestUrl}/playlists`}>{episode.episodeData.start}</a>
        </div>
    )
}

// Useritem.propTypes = {
//     user: PropTypes.object.isRequired
// }

export default EpisodeItem


