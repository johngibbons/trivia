import gamesById from './game';
import entriesById from './entry';
import questionsById from './question';
import answersById from './answer';
import remoteState from './state';
import {COMBINE_STATES} from '../constants';

const combined = (state = {}, action) => {
  if (action.type === COMBINE_STATES){
    return remoteState(state, action);
  }

  return {
    gamesById: gamesById(state.gamesById, action),
    entriesById: entriesById(state.entriesById, action),
    questionsById: questionsById(state.questionsById, action),
    answersById: answersById(state.answersById, action)
  };

}

export default combined;
