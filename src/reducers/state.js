import {mergeStates} from './core';

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE': {
      return mergeStates(state, action.state);
    }
  }
  return state;
}
