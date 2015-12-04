export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

let nextGameId = 0;
export function addGame(input) {
  return {
    type: 'ADD_GAME',
    payload: {
      id: nextGameId++,
      title: input.value
    },
    meta: {remote: true}
  };
}

let nextEntryId = 0;
export function addEntry(props) {
  return {
    type: 'ADD_ENTRY',
    payload: {
      id: nextEntryId++,
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

let nextQuestionId = 0;
export function addQuestion(input, props) {
  return {
    type: 'ADD_QUESTION',
    payload: {
      id: nextQuestionId++,
      text: input.value,
      entry: props.entry
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

let nextAnswerId = 0;
export function addAnswer(input, props) {
  return {
    type: 'ADD_ANSWER',
    payload: {
      id: nextAnswerId++,
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
