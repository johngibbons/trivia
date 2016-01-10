import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem,
  changeOrRemoveReferenceValue
} from './core';

import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPDATE_QUESTION,
  ADD_ANSWER,
  REMOVE_ANSWER
} from '../constants';

const questionsById = (state = {}, action) => {
  switch(action.type) {

  case ADD_QUESTION: {
    return addOrUpdateItem(state, action.payload);
  }

  case REMOVE_QUESTION: {
    return removeItem(state, action.payload);
  }

  case UPDATE_QUESTION: {
    return addOrUpdateItem(state, action.payload);
  }

  case ADD_ANSWER: {
    return addReferenceItem(state, action.payload, 'question', 'answers');
  }

  case REMOVE_ANSWER: {
    return removeReferenceItem(state, action.payload, 'question', 'answers');
  }

  default:
    return state;
  }

};

export default questionsById;
