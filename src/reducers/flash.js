import {SET_FLASH, CLEAR_FLASH} from '../constants';
import {addOrUpdateItem} from './core';

const flash = (state = {}, action) => {
  switch (action.type) {

  case SET_FLASH: {
    return {...state, ...action.payload};
  }

  case CLEAR_FLASH: {
    return {};
  }

  default:
    return state;
  }
};

export default flash;
