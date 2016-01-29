import Firebase from 'firebase';

export const ROOT_REF = new Firebase('https://flickering-torch-250.firebaseio.com');

export const COMBINE_STATES = 'COMBINE_STATES';

export const SET_ROUTE = 'SET_ROUTE';

export const SET_FLASH = 'SET_FLASH';
export const CLEAR_FLASH = 'CLEAR_FLASH';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';

export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

export const ADD_QUESTION = 'ADD_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const ADD_ANSWER = 'ADD_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';

export const ADD_OR_UPDATE_SELECTION = 'ADD_OR_UPDATE_SELECTION';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const colors = {
  primary: '#ba9c37',
  success: '#5cb85c',
  danger: '#d9534f',
  grayBase: '#000',
  gray: '#777',
  grayLight: '#e7e7e7'
};
