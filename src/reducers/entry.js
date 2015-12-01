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

export default entriesById;
