import shortid from 'shortid';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function addGame(id) {
  return {
    type: 'ADD_GAME',
    payload: {
      id
    },
    meta: {remote: true}
  };
}

export function updateGameAttr(obj) {
  return {
    type: 'UPDATE_GAME_ATTRIBUTE',
    payload: {
      ...obj
    },
    meta: {remote: true}
  }
}

export function addEntry(id, game) {
  return {
    type: 'ADD_ENTRY',
    payload: {
      id,
      game
    },
    meta: {remote: true}
  }
}

export function updateEntryAttr(obj) {
  return {
    type: 'ADD_SELECTION',
    payload: {
      ...obj
    },
    meta: {remote: true}
  }
}

export function removeEntry(props) {
  return {
    type: 'REMOVE_ENTRY',
    payload: {
      id: props.id,
      game: props.game
    },
    meta: {remote: true}
  };
}

export function addQuestion(input, game) {
  return {
    type: 'ADD_QUESTION',
    payload: {
      id: shortid.generate(),
      text: input.value,
      game
    },
    meta: {remote: true}
  }
}

export function updateQuestionAttr(obj) {
  return {
    type: 'UPDATE_QUESTION_ATTRIBUTE',
    payload: {
      ...obj
    },
    meta: {remote: true}
  }
}

export function removeQuestion(props) {
  return {
    type: 'REMOVE_QUESTION',
    payload: {
      id: props.id,
      game: props.game
    },
    meta: {remote: true}
  }
}

export function addAnswer(text, question) {
  return {
    type: 'ADD_ANSWER',
    payload: {
      id: shortid.generate(),
      text,
      question
    },
    meta: {remote: true}
  }
}

export function updateAnswerAttr(obj) {
  return {
    type: 'UPDATE_ANSWER_ATTRIBUTE',
    payload: {
      ...obj
    },
    meta: {remote: true}
  }
}

export function removeAnswer(id, question) {
  return {
    type: 'REMOVE_ANSWER',
    payload: {
      id,
      question
    },
    meta: {remote: true}
  }
}
