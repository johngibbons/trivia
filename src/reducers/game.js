import {
  addOrUpdateItem,
  removeItem,
  addReferenceItem,
  removeReferenceItem,
  addOrUpdateArrayElement,
  removeArrayElement
} from './core';

import {
  ADD_GAME,
  REMOVE_GAME,
  UPDATE_GAME,
  ADD_ENTRY,
  REMOVE_ENTRY,
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPDATE_ANSWERED_ORDER
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

  case UPDATE_ANSWERED_ORDER: {
    const game = state[action.payload.game];
    const question = action.payload.question;
    const currAnsweredOrder = game.answeredOrder || [];
    const newAnsweredOrder = action.payload.answer ?
      addOrUpdateArrayElement(currAnsweredOrder, question) :
        removeArrayElement(currAnsweredOrder, question);
    return addOrUpdateItem(state, {
      id: action.payload.game,
      answeredOrder: newAnsweredOrder
    });
  }

  default:
    return state;
  }
};

export default gamesById;
