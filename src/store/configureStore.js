import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import remoteActionMiddleware from '../remote_action_middleware';
import io from 'socket.io-client';
import {store} from '../index';
import {setState} from '../actions/index';

