import {
  addItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      addItem(state, action);
    }
    case 'REMOVE_ENTRY': {
      removeItem(state, action);
    }
    case 'ADD_QUESTION': {
      addReferenceItem(state, action, 'entry', 'questions');
    }
    case 'REMOVE_QUESTION': {
      removeReferenceItem(state, action, 'entry', 'questions');
    }
    default:
      return state;
  }
};

export default entriesById;
