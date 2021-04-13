import store from "../store";
import Game from "../models/Game";
import Entry from "../models/Entry";
import Nominee from "../models/Nominee";
import Category from "../models/Category";
import {
  currentGameSelector,
  entryGameSelector,
  gameStartedSelector,
} from "./games-selector";
import { Map, fromJS } from "immutable";

describe("game selector", () => {
  it("should select current game", () => {
    const props = { routeParams: { id: 1 } };
    const currentGame = new Game({ id: 1, name: "Some Game" });
    const state = {
      ...store.getState(),
      games: new Map().set(1, currentGame),
    };
    expect(currentGameSelector(state, props)).toEqual(currentGame);
  });

  it("should select entry game", () => {
    const entryId = 1;
    const gameId = 2;
    const props = { routeParams: { id: entryId } };
    const currentEntry = new Entry({ id: entryId, game: gameId });
    const entryGame = new Game({ id: gameId, name: "Some Game" });
    const state = {
      ...store.getState(),
      games: new Map().set(gameId, entryGame),
      entries: new Map().set(entryId, currentEntry),
    };
    expect(entryGameSelector(state, props)).toEqual(entryGame);
  });

  describe("gameStartedSelector", () => {
    const games = new Map().set(
      "game1",
      new Game({
        id: "game1",
        categories: fromJS({
          category1: true,
          category2: true,
        }),
      })
    );
    const nominees = new Map().set(
      "nominee1",
      new Nominee({
        id: "nominee1",
        game: "game1",
      })
    );
    const props = {
      nominee: nominees.get("nominee1"),
    };

    it("should return true after first selection", () => {
      const categories = new Map().set(
        "category1",
        new Category({
          id: "category1",
          correctAnswer: "nominee1",
        })
      );
      const state = {
        games,
        categories,
        nominees,
      };
      expect(gameStartedSelector(state, props)).toEqual(true);
    });

    it("should return false if none selected", () => {
      const categories = new Map().set(
        "category1",
        new Category({
          id: "category1",
        })
      );
      const state = {
        games,
        categories,
        nominees,
      };
      expect(gameStartedSelector(state, props)).toEqual(false);
    });
  });
});
