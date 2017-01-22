import {
  CREATE_NEW_QUESTION,
  UPDATE_PENDING_QUESTION,
  SAVE_PENDING_POSSIBLE_ANSWER,
  DELETE_POSSIBLE_ANSWER
} from '../actions/action-types';

import { Question } from '../models/Question';
import { PossibleAnswer } from '../models/PossibleAnswer';

const initialState = new Question();

const pendingQuestion = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_NEW_QUESTION:
    return initialState;
  case UPDATE_PENDING_QUESTION:
    return state.merge(action.payload.pending_question);
  case SAVE_PENDING_POSSIBLE_ANSWER:
    return state.set(
      'possible_answers',
      state.get('possible_answers').push(new PossibleAnswer({text: action.payload.possible_answer}))
    );
  case DELETE_POSSIBLE_ANSWER:
    return state.set(
      'possible_answers',
      state.get('possible_answers').delete(action.payload.index)
    );
  default:
    return state;
  }
}

export default pendingQuestion;
