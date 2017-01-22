import {
  CREATE_NEW_GAME,
  UPDATE_PENDING_GAME,
  SAVE_PENDING_GAME,
  CREATE_NEW_QUESTION,
  UPDATE_PENDING_QUESTION,
  SAVE_PENDING_QUESTION,
  UPDATE_PENDING_POSSIBLE_ANSWER,
  SAVE_PENDING_POSSIBLE_ANSWER,
  DELETE_POSSIBLE_ANSWER
} from './action-types';

export function createNewGame() {
  return {
    type: CREATE_NEW_GAME
  }
}

export function updatePendingGame(pending_game) {
  return {
    type: UPDATE_PENDING_GAME,
    payload: {
      pending_game
    }
  }
}

export function savePendingGame(pending_game) {
  return {
    type: SAVE_PENDING_GAME,
    payload: {
      pending_game
    }
  }
}

export function createNewQuestion() {
  return {
    type: CREATE_NEW_QUESTION
  }
}

export function updatePendingQuestion(pending_question) {
  return {
    type: UPDATE_PENDING_QUESTION,
    payload: {
      pending_question
    }
  }
}

export function savePendingQuestion(pending_question) {
  return {
    type: SAVE_PENDING_QUESTION,
    payload: {
      pending_question
    }
  }
}

export function updatePendingPossibleAnswer(pending_possible_answer) {
  return {
    type: UPDATE_PENDING_POSSIBLE_ANSWER,
    payload: {
      pending_possible_answer
    }
  }
}

export function savePendingPossibleAnswer(possible_answer) {
  return {
    type: SAVE_PENDING_POSSIBLE_ANSWER,
    payload: {
      possible_answer
    }
  }
}

export function deletePossibleAnswer(index) {
  return {
    type: DELETE_POSSIBLE_ANSWER,
    payload: {
      index
    }
  }
}
