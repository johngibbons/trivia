import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import { browserHistory } from "react-router";
import rootReducer from "./reducers";
import rootSaga from "./sagas/index";
import persistState from "redux-localstorage";
import { Map, fromJS } from "immutable";
import Nominee from "./models/Nominee";
import Entry from "./models/Entry";
import Game from "./models/Game";
import Group from "./models/Group";
import Category from "./models/Category";
import User from "./models/User";

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(browserHistory);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, routingMiddleware),
    persistState(
      ["nominees", "entries", "games", "groups", "categories", "users"],
      {
        key: "TRVIA",
        serialize(data) {
          return JSON.stringify(
            Object.keys(data).reduce(
              (acc, key) => ({ ...acc, [key]: data[key].toJS() }),
              {}
            )
          );
        },
        deserialize(data) {
          const jsObj = JSON.parse(data);
          if (!jsObj) return;
          return Object.keys(jsObj).reduce((acc, key) => {
            switch (key) {
              case "nominees": {
                const nominees = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(nominees).reduce((acc, id) => {
                    return acc.set(id, new Nominee(fromJS(nominees[id])));
                  }, new Map()),
                };
              }
              case "entries": {
                const entries = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(entries).reduce((acc, id) => {
                    return acc.set(id, new Entry(fromJS(entries[id])));
                  }, new Map()),
                };
              }
              case "games": {
                const games = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(games).reduce((acc, id) => {
                    return acc.set(id, new Game(fromJS(games[id])));
                  }, new Map()),
                };
              }
              case "groups": {
                const groups = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(groups).reduce((acc, id) => {
                    return acc.set(id, new Group(fromJS(groups[id])));
                  }, new Map()),
                };
              }
              case "categories": {
                const categories = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(categories).reduce((acc, id) => {
                    return acc.set(id, new Category(fromJS(categories[id])));
                  }, new Map()),
                };
              }
              case "users": {
                const users = jsObj[key];
                return {
                  ...acc,
                  [key]: Object.keys(users).reduce((acc, id) => {
                    return acc.set(id, new User(fromJS(users[id])));
                  }, new Map()),
                };
              }
              default:
                return undefined;
            }
          }, {});
        },
      }
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;
