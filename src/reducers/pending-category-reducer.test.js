import {
  createNewCategory,
  updatePendingCategory,
  savePendingCategory,
  savePendingNominee,
  deleteNominee,
} from "../actions/pending-game-actions";

import Category from "../models/Category";
import Nominee from "../models/Nominee";
import reducer from "./pending-category-reducer";
import { Map } from "immutable";

describe("pending category reducer", () => {
  it("should return empty category on create new", () => {
    const action = createNewCategory();
    const initialState = new Category({ name: "Some Name" });

    expect(reducer(initialState, action)).toEqual(new Category());
  });

  it("should return empty category on save pending", () => {
    const action = savePendingCategory();
    const initialState = new Category({ name: "Some Name" });

    expect(reducer(initialState, action)).toEqual(new Category());
  });

  it("should overwrite with new data on update", () => {
    const newName = "new name";
    const action = updatePendingCategory({ name: "new name" });
    const initialState = new Category({ name: "Some Name" });
    const expectedState = new Category({ name: newName });

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should save pending nominee", () => {
    const newNominee = { id: 1, name: "new name" };
    const action = savePendingNominee(newNominee);
    const expectedState = new Category({
      nominees: new Map().set(1, new Nominee(newNominee)),
    });

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it("should delete nominee", () => {
    const toDelete = { id: 1, name: "new name" };
    const otherNominee = { id: 2, name: "another" };
    const action = deleteNominee(toDelete);
    const initialState = new Category({
      nominees: new Map()
        .set(1, new Nominee(toDelete))
        .set(2, new Nominee(otherNominee)),
    });
    const expectedState = new Category({
      nominees: new Map().set(2, new Nominee(otherNominee)),
    });

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
