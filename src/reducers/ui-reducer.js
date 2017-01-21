import { List, Map } from 'immutable'
import {
  CREATE_NEW_GAME,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/action-types';

import { UI } from '../models/UI';

const ui = (state = new UI(), action) => {
  switch (action.type) {
  case CREATE_NEW_GAME:
    return state.set('modal', 'NEW_GAME');
  case OPEN_MODAL:
    return state.set('modal', action.payload.id);
  case CLOSE_MODAL:
    return state.delete('modal');
  default:
    return state;
  }
}

export default ui;
