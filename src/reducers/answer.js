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

export default answersById;
