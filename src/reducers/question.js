const questionsById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_QUESTION': {
      return {...state, [action.id]: {id: action.id, text: action.text}}
    }
    case 'REMOVE_QUESTION': {
      let next = Object.assign({}, state);
      delete next[action.id];
      return next;
    }
    case 'ADD_ANSWER': {
      const answers = state[action.question].answers || [];
      return {...state,
        [action.question]: {
          ...state[action.question],
          answers: [...answers, action.id]
        }
      };
    }
    case 'REMOVE_ANSWER': {
      return {...state,
        [action.question]: {
          ...state[action.question],
          answers: state[action.question].answers.filter(x => x !== action.id)
        }
      };
    }
    default:
      return state;
  }
};

export default questionsById;
