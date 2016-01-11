import {createStore, applyMiddleware} from 'redux';
import firebaseMiddleware from '../firebase_middleware';
import rootReducer from '../reducers/index';
import {ROOT_REF} from '../constants';
import {combineStates} from '../actions/index';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  firebaseMiddleware
)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
