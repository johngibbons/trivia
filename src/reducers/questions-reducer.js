import { Map } from 'immutable'
import { Question } from '../models/Question';

import {
  SAVE_PENDING_QUESTION
} from '../actions/action-types'

import devInitialState from './devStates/questions';

const questions = (state = devInitialState, action) => {
  switch (action.type) {
  case SAVE_PENDING_QUESTION:
      const newState = state.set(action.payload.pending_question.id, action.payload.pending_question.update('possible_answers', answers => answers.map(answer => answer.id)))
      return newState;
  default:
    return state;
  }
}

export default questions;
