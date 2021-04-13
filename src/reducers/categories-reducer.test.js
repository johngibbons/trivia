import { savePendingCategory } from "../actions/pending-game-actions";
import {
  setCategories,
  toggleCorrectNominee,
} from "../actions/category-actions";
import Category from "../models/Category";
import Nominee from "../models/Nominee";
import { Map, is } from "immutable";
import reducer from "./categories-reducer";

describe("categories reducer", () => {
  it("should save pending category", () => {
    const pendingCategory = new Category({
      id: 1,
      nominees: new Map()
        .set(1, new Nominee({ id: 1, name: "nominee" }))
        .set(2, new Nominee({ id: 2, name: "another" })),
    });
    const action = savePendingCategory(pendingCategory);
    const expectedResult = new Map().set(
      1,
      new Category({
        id: 1,
        nominees: new Map().set(1, true).set(2, true),
      })
    );
    expect(reducer(undefined, action)).toEqual(expectedResult);
  });

  it("should set retrieved categories", () => {
    const newCategories = {
      category1: {
        id: "category1",
        name: "category 1",
        nominees: {
          nominee1: true,
          nominee2: true,
        },
      },
      category2: {
        id: "category2",
        name: "category 2",
        nominees: {
          nominee3: true,
          nominee4: true,
        },
      },
    };
    const existingCategories = {
      category2: {
        id: "category2",
        name: "an old name",
      },
      category3: {
        id: "category3",
        name: "different category",
      },
    };
    const initialState = new Map()
      .set(
        "category2",
        new Category({
          ...existingCategories["category2"],
          nominees: new Map(existingCategories["category2"].nominees),
        })
      )
      .set(
        "category3",
        new Category({
          ...existingCategories["category3"],
          nominees: new Map(existingCategories["category3"].nominees),
        })
      );
    const action = setCategories(newCategories);
    const expectedResult = new Map()
      .set(
        "category1",
        new Category({
          ...newCategories["category1"],
          nominees: new Map(newCategories["category1"].nominees),
        })
      )
      .set(
        "category2",
        new Category({
          ...newCategories["category2"],
          nominees: new Map(newCategories["category2"].nominees),
        })
      )
      .set(
        "category3",
        new Category({
          ...existingCategories["category3"],
          nominees: new Map(existingCategories["category3"].nominees),
        })
      );

    expect(is(reducer(initialState, action), expectedResult)).toEqual(true);
  });

  it("should set correct answer", () => {
    const nominee = new Nominee({
      id: "abc",
      category: "category1",
    });
    const initialState = new Map()
      .set("category1", new Category())
      .set("category2", new Category());
    const action = toggleCorrectNominee(nominee);
    const expectedResult = new Map()
      .set("category1", new Category({ correctAnswer: nominee.id }))
      .set("category2", new Category());

    expect(reducer(initialState, action)).toEqual(expectedResult);
  });
});
