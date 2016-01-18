import {
  SET_CURRENT_USER,
  LOG_IN_USER,
  LOG_OUT_USER
} from '../constants';

const currentUser = (state = {}, action) => {
  switch(action.type) {

  case SET_CURRENT_USER: {
    return {...state, ...action.payload};
  }

  case LOG_IN_USER: {
    return {...state, ...action.payload};
  }

  case LOG_OUT_USER: {
    return {};
  }

  default:
    return state;

  }
};

export default currentUser;
