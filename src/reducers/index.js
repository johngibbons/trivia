import flash from './flash';
import currentUser from './current_user';
import usersById from './user';
import gamesById from './game';
import entriesById from './entry';
import questionsById from './question';
import answersById from './answer';
import rState from './state';
import modal from './modal';
import {COMBINE_STATES} from '../constants';

const combined = (state = {}, action) => {
  if (action.type === COMBINE_STATES){
    return rState(state, action);
  }

  const remoteState = state.remote || {};
  const clientState = state.client || {};

  return {
    client: {
      flash: flash(clientState.flash, action),
      currentUser: currentUser(clientState.currentUser, action),
      modal: modal(clientState.modal, action)
    },
    remote: {
      usersById: usersById(remoteState.usersById, action),
      gamesById: gamesById(remoteState.gamesById, action),
      entriesById: entriesById(remoteState.entriesById, action),
      questionsById: questionsById(remoteState.questionsById, action),
      answersById: answersById(remoteState.answersById, action)
    }
  };

};

export default combined;
