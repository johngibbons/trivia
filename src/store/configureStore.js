import {createStore, applyMiddleware} from 'redux';
import firebaseMiddleware from '../firebase_middleware';
import rootReducer from '../reducers/index';
import {ROOT_REF} from '../constants';
import {combineStates} from '../actions/index';

const createStoreWithMiddleware = applyMiddleware(firebaseMiddleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

ROOT_REF.on('value', (remote) => {
  console.log('merging states');
  const newState = remote.val().state;
  store.dispatch(combineStates(newState));
});
