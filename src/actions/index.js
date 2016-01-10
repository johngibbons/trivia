import shortid from 'shortid';
import {
  ADD_GAME,
  UPDATE_GAME,
  ADD_ENTRY,
  UPDATE_ENTRY,
  REMOVE_ENTRY,
  ADD_OR_UPDATE_SELECTION,
  ADD_QUESTION,
  UPDATE_QUESTION,
  REMOVE_QUESTION,
  ADD_ANSWER,
  UPDATE_ANSWER,
  REMOVE_ANSWER
} from '../constants';

export function addGame(id) {
  return {
    type: ADD_GAME,
    payload: {
      id
    },
    meta: {remote: true}
  };
}

export function updateGameAttr(obj) {
  return {
    type: UPDATE_GAME,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function addEntry(id, game) {
  return {
    type: ADD_ENTRY,
    payload: {
      id,
      game
    },
    meta: {remote: true}
  };
}

export function updateEntryAttr(obj) {
  return {
    type: UPDATE_ENTRY,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function addOrUpdateSelection(obj) {
  return {
    type: ADD_OR_UPDATE_SELECTION,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function removeEntry(id, game) {
  return {
    type: REMOVE_ENTRY,
    payload: {
      id,
      game
    },
    meta: {remote: true}
  };
}

export function addQuestion(input, game) {
  return {
    type: ADD_QUESTION,
    payload: {
      id: shortid.generate(),
      text: input.value,
      game
    },
    meta: {remote: true}
  };
}

export function updateQuestionAttr(obj) {
  return {
    type: UPDATE_QUESTION,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function removeQuestion(id, game) {
  return {
    type: REMOVE_QUESTION,
    payload: {
      id,
      game
    },
    meta: {remote: true}
  };
}

export function addAnswer(question) {
  return {
    type: ADD_ANSWER,
    payload: {
      id: shortid.generate(),
      question
    },
    meta: {remote: true}
  };
}

export function updateAnswerAttr(obj) {
  return {
    type: UPDATE_ANSWER,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function removeAnswer(id, question) {
  return {
    type: REMOVE_ANSWER,
    payload: {
      id,
      question
    },
    meta: {remote: true}
  };
}
