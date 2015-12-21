import {mergeStates} from './core';

const initialState = {
  gamesById: {},
  questionsById: {},
  answersById: {},
  entriesById: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE': {
      return mergeStates(state, action.state);
    }
  }
  return state;
}
