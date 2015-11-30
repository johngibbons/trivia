import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, combineReducers} from 'redux';

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
    default:
      return state;
  }
};

const entriesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      let obj = {};
      obj[action.id] = entry(undefined, action);
      return Object.assign({}, state, obj);
    case 'ADD_QUESTION':
      const e = state[action.entry];
      const q = entry(e.questions, action);
      let nextState = {};
      nextState[action.entry] = Object.assign({}, state[action.entry], q);
      return Object.assign({}, state, nextState);
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
    default:
      return state;
  }
};

const questionsById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION':
      let obj = {};
      obj[action.id] = question(undefined, action);
      return Object.assign({}, state, obj);
    case 'REMOVE_QUESTION':
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
  ReactDOM.render(
    <App
      questionsById={state.questionsById}
      answersById={state.answersById}
      entriesById={state.entriesById}
    />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
