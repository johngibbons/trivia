import {fromJS, toJS, mergeDeep} from 'immutable';

function setState(state, newState) {
  return fromJS(state).mergeDeep(fromJS(newState)).toJS();
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE': {
      return setState(state, action.state);
    }
  }
  return state;
}
