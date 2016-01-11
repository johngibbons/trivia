import {mergeStates} from './core';
import {COMBINE_STATES} from '../constants';

export default function(state = {}, action) {
  switch (action.type) {

  case COMBINE_STATES: {
    return mergeStates(state, action.state);
  }

  }
  return state;
}
