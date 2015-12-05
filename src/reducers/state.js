import {mergeStates} from './core';

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE': {
      console.log('setting state');
      return mergeStates(state, action.state);
    }
  }
  return state;
}
