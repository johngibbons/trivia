import {ROOT_REF} from './constants';

export default store => next => action => {
  if (action.meta && action.meta.remote) {
    console.group(action.type);
    console.info('dispatching', action);
    console.log('prev state', store.getState());
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    let remoteState = store.getState().remote;
    ROOT_REF.set({remoteState});
    return result;
  } else {
    console.group(action.type);
    console.info('dispatching', action);
    console.log('prev state', store.getState());
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result;
  }
};
