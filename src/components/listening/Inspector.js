import React from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Inspector = ({songs, loading}) => {
    if(loading){
        return <Spinner />
    } else{
        return (
            <div>
                {songs.map(song => (
                    <h3>{song.title}, {song.artist}</h3>
                ))}
            </div>
        )
    }
}


Inspector.propTypes = {
    songs: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Inspector
