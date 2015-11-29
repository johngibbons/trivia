import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, combineReducers} from 'redux';

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
      }
    default:
      return state;
  }
};

const questions = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      let obj = {};
      obj[action.id] = question(undefined, action);
      return Object.assign({}, state, obj);
    case 'ADD_ANSWER':
      const q = state[action.question];
      const a = question(q.answers, action);
      let nextState = {};
      nextState[action.question] = Object.assign({}, state[action.question], a);
      return Object.assign({}, state, nextState);
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

const answers = (state = {}, action) => {
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
  questions,
  answers
});
export const store = createStore(triviaApp);

const render = () => {
  ReactDOM.render(
    <App appState={store.getState()} />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
