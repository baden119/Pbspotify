import React, { useReducer } from 'react';
import axios from 'axios';
import PbsContext from './pbsContext';
import PbsReducer from './pbsReducer';
// import {
// } from '../types';

const PbsState = props => {
    const initialState = null;

const [state, dispatch] = useReducer(PbsReducer, initialState);

// Get a list of Pbs Shows

return <PbsContext.Provider
value={{
}}
>
{props.children}
</PbsContext.Provider>
};

export default PbsState;