import {updateItem} from './core';

export default function(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE': {
      const games = updateItem(state.gamesById, action.payload);
      return {...state, gamesById: {...games}};
    }
  }
  return state;
}
