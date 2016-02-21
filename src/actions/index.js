import shortid from 'shortid';
import {
  ROOT_REF,
  COMBINE_STATES,
  SET_ROUTER,
  SET_FLASH,
  SET_CURRENT_USER,
  CLEAR_FLASH,
  TOGGLE_MODAL,
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
  REMOVE_ANSWER,
  LOG_IN_USER,
  LOG_OUT_USER,
  UPDATE_USER
} from '../constants';

export function startFirebaseListeners() {
  return function(dispatch, getState) {
    ROOT_REF.on('value', function(remoteState) {
      const newState = remoteState.val().remoteState;
      dispatch(combineStates({remote: newState}));

      ROOT_REF.onAuth((authData) => {
        if (authData) {
          const dbUser = newState.usersById[authData.uid] || {};
          let currentUser = {
            id: authData.uid,
            name: dbUser.name || '',
            email: authData[authData.provider].email,
            provider: authData.provider,
            avatarURL: dbUser.avatarURL || authData[authData.provider].profileImageURL,
            username: dbUser.username || authData[authData.provider].email.split('@')[0].replace(/[\.\_\+]/g, '')
          };
          dispatch(setCurrentUser(currentUser));
        }
      });
    });
  };
}

export function setRouter(params, path) {
  return {
    type: SET_ROUTER,
    payload: {
      params,
      path
    }
  };
}

export function setFlash(type, message) {
  return {
    type: SET_FLASH,
    payload: {
      type,
      message
    }
  };
}

export function clearFlash() {
  return {
    type: CLEAR_FLASH
  };
}

export function toggleModal(name) {
  return {
    type: TOGGLE_MODAL,
    payload: {
      name
    }
  };
}

export function setCurrentUser(userData) {
  return {
    type: SET_CURRENT_USER,
    payload: {...userData}
  };
}

export function logInUser(userData) {
  return {
    type: LOG_IN_USER,
    payload: {...userData},
    meta: {remote: true}
  };
}

export function logOutUser() {
  return {
    type: LOG_OUT_USER
  };
}

export function updateUser(obj) {
  return {
    type: UPDATE_USER,
    payload: {
      ...obj
    },
    meta: {remote: true}
  };
}

export function combineStates(state) {
  return {
    type: COMBINE_STATES,
    state
  };
}

export function addGame(id, user) {
  return {
    type: ADD_GAME,
    payload: {
      id,
      user
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

export function addEntry(id, game, user) {
  return {
    type: ADD_ENTRY,
    payload: {
      id,
      game,
      user
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

export function removeEntry(id, game, user) {
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
