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

export function updateAttr(obj) {
  return {
    type: 'UPDATE_ATTRIBUTE',
    payload: {
      ...obj
    },
    meta: {remote: true}
  }
}

export function addEntry(props) {
  return {
    type: 'ADD_ENTRY',
    payload: {
      id: shortid.generate(),
      game: props.params.id
    },
    meta: {remote: true}
  }
}

export function updateEntry(input, props) {
  return {
    type: 'UPDATE_ENTRY',
    payload: {
      id: props.id,
      title: input.value
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

export function addQuestion(input, props) {
  return {
    type: 'ADD_QUESTION',
    payload: {
      id: shortid.generate(),
      text: input.value,
      game: props.game
    },
    meta: {remote: true}
  }
}

export function removeQuestion(props) {
  return {
    type: 'REMOVE_QUESTION',
    payload: {
      id: props.id,
      entry: props.entry
    },
    meta: {remote: true}
  }
}

export function addAnswer(input, props) {
  return {
    type: 'ADD_ANSWER',
    payload: {
      id: shortid.generate(),
      text: input.value,
      question: props.id
    },
    meta: {remote: true}
  }
}

export function removeAnswer(props) {
  return {
    type: 'REMOVE_ANSWER',
    payload: {
      id: props.id,
      question: props.question
    },
    meta: {remote: true}
  }
}
