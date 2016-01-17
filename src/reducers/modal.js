import {TOGGLE_MODAL} from '../constants';

const modal = (state = null, action) => {
  switch (action.type) {

  case TOGGLE_MODAL: {
    if (state && action.payload && action.payload.name === state) {
      //toggle open modal to closed
      return null;
    }

    return action.payload && action.payload.name;
  }

  default:
    return state;

  }
};

export default modal;
