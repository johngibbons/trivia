import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const gamesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_GAME': {
      return addItem(state, action);
    }
    case 'REMOVE_GAME': {
      return removeItem(state, action);
    }
    case 'ADD_ENTRY': {
      return addReferenceItem(state, action, 'game', 'entries');
    }
    case 'REMOVE_ENTRY': {
      return removeReferenceItem(state, action, 'game', 'entries');
    }
    case 'ADD_QUESTION': {
      return addReferenceItem(state, action, 'game', 'questions');
    }
    case 'REMOVE_QUESTION': {
      return removeReferenceItem(state, action, 'game', 'questions');
    }
    default:
      return state;
  }
}

export default gamesById;
