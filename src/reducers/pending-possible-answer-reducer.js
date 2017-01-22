import {
  UPDATE_PENDING_POSSIBLE_ANSWER,
  SAVE_PENDING_POSSIBLE_ANSWER
} from '../actions/action-types';

import { PossibleAnswer } from '../models/PossibleAnswer';

const initialState = new PossibleAnswer();

const pendingPossibleAnswer = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_PENDING_POSSIBLE_ANSWER:
    return state.merge(action.payload.pending_possible_answer);
  case SAVE_PENDING_POSSIBLE_ANSWER:
    return initialState;
  default:
    return state;
  }
}

export default pendingPossibleAnswer;
