import {updateItem} from './core';

export default function(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_GAME_EDITING': {
      action.payload.editing = state.gamesById[action.payload.id].editing ? false : true;
      const games = updateItem(state.gamesById, action.payload);
      return {...state, gamesById: {...games}};
    }
  }
  return state;
}
