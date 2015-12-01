import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {devTools, persistState, applyMiddleware} from 'redux-devtools';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

const entry = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      return {
        id: action.id,
        title: action.title,
        isMaster: action.isMaster
      };
    case 'ADD_QUESTION':
      return {
        questions: [...state, action.id]
      };
    case 'REMOVE_QUESTION':
      return {
        questions: state.filter(x => x !== action.id)
      };
    default:
      return state;
  }
};

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY': {
      let obj = {};
      obj[action.id] = entry(undefined, action);
      return Object.assign({}, state, obj);
    }
    case 'REMOVE_ENTRY': {
      let nextState = Object.assign({}, state);
      delete nextState[action.id];
      return nextState;
    }
    case 'ADD_QUESTION': {
      const e = state[action.entry];
      const q = entry(e.questions, action);
      let nextState = {};
      nextState[action.entry] = Object.assign({}, state[action.entry], q);
      return Object.assign({}, state, nextState);
    }
    case 'REMOVE_QUESTION': {
      const e = state[action.entry];
      const q = entry(e.questions, action);
      let nextState = {};
      nextState[action.entry] = Object.assign({}, state[action.entry], q);
      return Object.assign({}, state, nextState);
    }
    default:
      return state;
  }
};

const question = (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.id,
        text: action.text
      };
    case 'ADD_ANSWER':
      return {
        answers: [...state, action.id]
      };
    case 'REMOVE_ANSWER':
      return {
        answers: state.filter(x => x !== action.id)
      };
    default:
      return state;
  }
};

const questionsById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION': {
      let obj = {};
      obj[action.id] = question(undefined, action);
      return Object.assign({}, state, obj);
    }
    case 'REMOVE_QUESTION': {
      let next = Object.assign({}, state);
      delete next[action.id];
      return next;
    }
    case 'ADD_ANSWER': {
      const q = state[action.question];
      const a = question(q.answers, action);
      let nextState = {};
      nextState[action.question] = Object.assign({}, state[action.question], a);
      return Object.assign({}, state, nextState);
    }
    case 'REMOVE_ANSWER': {
      const q = state[action.question];
      const a = question(q.answers, action);
      let nextState = {};
      nextState[action.question] = Object.assign({}, state[action.question], a);
      return Object.assign({}, state, nextState);
    }
    default:
      return state;
  }
}

const answer = (state, action) => {
  switch(action.type) {
    case 'ADD_ANSWER':
      return {
        id: action.id,
        text: action.text,
        question: action.question
      };
    default:
      return state;
  }
};

const answersById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ANSWER':
      let obj = {};
      obj[action.id] = answer(undefined, action);
      return Object.assign({}, state, obj);
    default:
      return state;
  }
}

const triviaApp = combineReducers({
  entriesById,
  questionsById,
  answersById
});

export const store = createStore(triviaApp);

const render = () => {
  const state = store.getState();
  console.log("full state:", state);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
