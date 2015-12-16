import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import remoteActionMiddleware from '../remote_action_middleware';
import io from 'socket.io-client';
import {setState} from '../actions/index';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

socket.on('state', state => {
    console.log('merging states');
    store.dispatch(setState(state));
  }
);
