import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, routingMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;
