import {fromJS, toJS, mergeDeep} from 'immutable';

export function mergeStates(state, newState) {
  return fromJS(state).mergeDeep(fromJS(newState)).toJS();
}

export function updateItem(state, payload) {
  return {...state, [payload.id]: {...payload}};
}
