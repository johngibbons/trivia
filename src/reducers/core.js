import {fromJS, toJS, mergeDeep} from 'immutable';

export function mergeStates(state, newState) {
  return fromJS(state).merge(fromJS(newState)).toJS();
}

export function addOrUpdateItem(state, action) {
  return {...state, [action.id]: {...state[action.id], ...action}};
}

export function addReferenceItem(state, action, actionKey, referenceName) {
  //get current list of reference item keys
  const refs = state[action[actionKey]][referenceName] || [];
  return {...state,
    [action[actionKey]]: {
      ...state[action[actionKey]],
      [referenceName]: [...refs, action.id]
    }
  };
}

export function removeItem(state, action) {
  let nextState = Object.assign({}, state);
  delete nextState[action.id];
  return nextState;
}

export function removeReferenceItem(state, action, actionKey, referenceName) {
  const refs = state[action[actionKey]][referenceName];
  return {...state,
    [action[actionKey]]: {
      ...state[action[actionKey]],
      [referenceName]: refs.filter(x => x !== action.id)
    }
  };
}

export function changeOrRemoveReferenceValue(
  state,
  action,
  actionKey,
  referenceName
) {
  if (state[action[actionKey]][referenceName] === action.id){
    const stateCopy = JSON.parse(JSON.stringify(state));
    delete stateCopy[action[actionKey]][referenceName];
    return stateCopy;
  }
  return {...state,
    [action[actionKey]]: {
      ...state[action[actionKey]],
      [referenceName]: action.id
    }
  };
}

export function addOrUpdateArrayElement(arr, value) {
  if (arr.indexOf(value) === -1) {
    return [...arr, value];
  } else {
    return arr;
  }
}

export function removeArrayElement(arr, value) {
  return arr.filter((val) => {
    return val !== value;
  });
}
