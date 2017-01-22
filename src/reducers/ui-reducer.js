import {
  CREATE_NEW_GAME,
  CREATE_NEW_QUESTION,
  SAVE_PENDING_QUESTION,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/action-types';

import { UI } from '../models/UI';

const ui = (state = new UI(), action) => {
  switch (action.type) {
  case CREATE_NEW_GAME:
    return state.set('modal', 'NEW_GAME');
  case CREATE_NEW_QUESTION:
    return state.set('modal', 'NEW_QUESTION');
  case OPEN_MODAL:
    return state.set('modal', action.payload.id);
  case CLOSE_MODAL:
  case SAVE_PENDING_QUESTION:
    return state.delete('modal');
  default:
    return state;
  }
}

export default ui;
