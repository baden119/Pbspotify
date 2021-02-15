//Component which takes as input a single episode object and returns a card with some info.

import React from 'react'
import PropTypes from "prop-types";

const EpisodeItem = ({episodeData}) => {

    return (
        <div className="card text-center">
            <h1>Episode Item!</h1>
            {/* <h1>{this.props.episodeData}</h1> */}
        </div>
    )
}

// Useritem.propTypes = {
//     user: PropTypes.object.isRequired
// }

export default EpisodeItem


