import { Map } from 'immutable'
import { PossibleAnswer } from '../models/PossibleAnswer.js';

import {
  SAVE_PENDING_QUESTION
} from '../actions/action-types';

import devInitialState from './devStates/possible-answers'

const answers = (state = devInitialState, action) => {
  switch (action.type) {
  case SAVE_PENDING_QUESTION:
    return action.payload.pending_question.possible_answers.reduce((acc, answer) => acc.set(answer.id, answer), state)
  default:
    return state;
  }
}

export default answers;
