import {
  LOG_IN_USER,
  LOG_OUT_USER
} from '../constants';

const currentUser = (state = {}, action) => {
  switch(action.type) {

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
