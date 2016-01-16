import {mergeStates} from './core';
import {COMBINE_STATES} from '../constants';

export default function(state = {}, action) {
  switch (action.type) {

  case COMBINE_STATES: {
    const mergedRemote = mergeStates(state.remote, action.state.remote);
    const mergedClient = mergeStates(state.client, action.state.client);
    const newState = {client: mergedClient, remote: mergedRemote};
    return mergeStates(state, newState);
  }

  }
  return state;
}
