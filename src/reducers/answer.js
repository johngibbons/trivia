import { addOrUpdateItem, removeItem } from './core';
import {
  ADD_ANSWER,
  ADD_ANSWERS,
  REMOVE_ANSWER,
  UPDATE_ANSWER
} from '../constants';

const answersById = (state = {}, action) => {
  switch(action.type) {

  case ADD_ANSWER:
    return addOrUpdateItem(state, action.payload);

  case ADD_ANSWERS:
    return {...state, ...action.payload};

  case REMOVE_ANSWER:
    return removeItem(state, action.payload);

  case UPDATE_ANSWER:
    return addOrUpdateItem(state, action.payload);

  default:
    return state;

  }
};

export default answersById;
