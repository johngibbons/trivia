import {
  SUBMIT_SEARCH_SUCCESS,
  SUBMIT_SEARCH_FAILURE
} from '../actions/action-types';

import { Admin } from '../models/Admin';
import { fromJS } from 'immutable';

const admin = (state = new Admin(), action) => {
  switch (action.type) {
  case SUBMIT_SEARCH_SUCCESS:
    return state.set('searchResults', fromJS(action.payload.response.results))
  default:
    return state;
  }
}

export default admin;
