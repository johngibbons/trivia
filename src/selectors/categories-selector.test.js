import Category from "../models/Category";
import Game from "../models/Game";
import Entry from "../models/Entry";
import store from "../store";
import {
  givenCategorySelector,
  currentCategorySelector,
  currentCategoriesSelector,
  entryCategoriesSelector,
  entryScoreSelector,
} from "./categories-selector";
import { Map, is } from "immutable";

describe("categories selector", () => {
  it("should return entry categories", () => {
    const gameCategories = new Map()
      .set(1, new Category({ id: 1, game: "game" }))
      .set(2, new Category({ id: 2, game: "game" }));
    const categories = gameCategories.set(
      3,
      new Category({ id: 3, game: "otherGame" })
    );
    const games = new Map().set(
      "game",
      new Game({ id: "game", categories: gameCategories })
    );
    const entries = new Map().set(
      "entry",
      new Entry({ id: "entry", game: "game" })
    );
    const state = {
      ...store.getState(),
      categories,
      games,
      entries,
    };
    const expectedResult = new Map()
      .set(1, new Category({ id: 1, game: "game" }))
      .set(2, new Category({ id: 2, game: "game" }))
      .toIndexedSeq();

    const props = { routeParams: { id: "entry" } };
    expect(is(entryCategoriesSelector(state, props), expectedResult)).toEqual(
      true
    );
  });

  describe("entryScoreSelector", () => {
    const categories = new Map()
      .set(
        "category1",
        new Category({
          id: "category1",
          value: 1,
          correctAnswer: "nominee1",
        })
      )
      .set(
        "category2",
        new Category({
          id: "category2",
          value: 2,
          correctAnswer: "nominee2",
        })
      )
      .set(
        "category3",
        new Category({
          id: "category3",
          value: 5,
          correctAnswer: "nominee3",
        })
      )
      .set(
        "category4",
        new Category({
          id: "category4",
          value: 4,
        })
      );

    const game = new Game({
      id: "game1",
      categories,
    });

    const props = { routeParams: { id: "entry1" } };

    it("should return entry score", () => {
      const entry = new Entry({
        id: "entry1",
        game: "game1",
        selections: new Map({
          category1: "nominee1",
          category2: "nominee2",
          category3: "nominee5",
        }),
      });

      const state = {
        ...store.getState(),
        entries: new Map().set("entry1", entry),
        categories,
        games: new Map().set("game1", game),
      };

      expect(entryScoreSelector(state, props)).toEqual(3);
    });

    it("should return 0 when no selections", () => {
      const entry = new Entry({
        id: "entry1",
        game: "game1",
        selections: new Map(),
      });

      const state = {
        ...store.getState(),
        entries: new Map().set("entry1", entry),
        categories,
        games: new Map().set("game1", game),
      };

      expect(entryScoreSelector(state, props)).toEqual(0);
    });
  });

  it("should select category from props", () => {
    const props = {
      category: new Category({
        id: "category1",
      }),
    };
    expect(givenCategorySelector(undefined, props)).toEqual(props.category);
  });

  it("should select current category", () => {
    const categories = new Map()
      .set("category1", new Category({ id: "category1" }))
      .set("category2", new Category({ id: "category2" }));
    const state = {
      ...store.getState(),
      categories,
    };
    const props = { category: { id: "category1" } };

    expect(currentCategorySelector(state, props)).toEqual(
      categories.get("category1")
    );
  });

  it("should get game categories", () => {
    const gameCategories = new Map()
      .set("category1", new Category({ id: "category1" }))
      .set("category2", new Category({ id: "category2" }));
    const game = new Game({
      id: "game1",
      categories: gameCategories,
    });
    const state = {
      ...store.getState(),
      games: new Map().set("game1", game),
      categories: gameCategories.set(
        "category3",
        new Category({ id: "category3" })
      ),
    };
    const props = { routeParams: { id: "game1" } };
    expect(currentCategoriesSelector(state, props)).toEqual(
      gameCategories.keySeq().map((id) => state.categories.get(id))
    );
  });
});
