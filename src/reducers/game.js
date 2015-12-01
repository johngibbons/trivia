const gamesById = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_GAME': {
      return {...state, [action.id]: {id: action.id, title: action.title}};
    }
    case 'REMOVE_GAME': {
      let next = Object.assign({}, state);
      delete next[action.id];
      return next;
    }
    case 'ADD_ENTRY': {
      const entries = state[action.game].entries || [];
      return {...state,
        [action.game]: {
          ...state[action.game],
          entries: [...entries, action.id]
        }
      }
    }
    case 'REMOVE_ENTRY': {
      return {...state,
        [action.game]: {
          ...state[action.game],
          entries: state[action.game].entries.filter(x => x !== action.id)
        }
      };
    }
    case 'ADD_QUESTION': {
      const questions = state[action.game].questions || [];
      return {...state,
        [action.game]: {
          ...state[action.game],
          questions: [...questions, action.id]
        }
      }
    }
    case 'REMOVE_QUESTION': {
      return {...state,
        [action.game]: {
          ...state[action.game],
          questions: state[action.game].questions.filter(x => x !== action.id)
        }
      };
    }
    default:
      return state;
  }
}

export default gamesById;
