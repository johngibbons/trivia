import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem
} from './core';

import {
  ADD_GAME,
  REMOVE_GAME,
  UPDATE_GAME,
  ADD_ENTRY,
  REMOVE_ENTRY,
  ADD_QUESTION,
  REMOVE_QUESTION
} from '../constants';

const initialState = {
  title: '',
  questions: [],
  entries: []
};

const gamesById = (state = {}, action) => {
  switch(action.type) {

  case ADD_GAME: {
    return addOrUpdateItem(state, action.payload);
  }

  case REMOVE_GAME: {
    return removeItem(state, action.payload);
  }

  case UPDATE_GAME: {
    return addOrUpdateItem(state, action.payload);
  }

  case ADD_ENTRY: {
    return addReferenceItem(state, action.payload, 'game', 'entries');
  }

  case REMOVE_ENTRY: {
    return removeReferenceItem(state, action.payload, 'game', 'entries');
  }

  case ADD_QUESTION: {
    return addReferenceItem(state, action.payload, 'game', 'questions');
  }

  case REMOVE_QUESTION: {
    return removeReferenceItem(state, action.payload, 'game', 'questions');
  }

  default:
    return state;
  }
};

export default gamesById;
