import {SET_ROUTER} from '../constants';

const router = (state = {}, action) => {
  switch(action.type) {

  case SET_ROUTER:
    return {...state, ...action.payload};

  default:
    return state;
  }
};

export default router;
