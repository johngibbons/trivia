import Nominee from "../models/Nominee";
import Category from "../models/Category";
import store from "../store";
import { nomineesSelector, currentNomineesSelector } from "./nominees-selector";
import { is, Map } from "immutable";

describe("nominees selector", () => {
  it("should select nominees", () => {
    const nominees = new Map()
      .set(1, new Nominee({ text: "Casey Affleck" }))
      .set(2, new Nominee({ text: "Denzel Washington" }));
    const state = { ...store.getState(), nominees };
    expect(nomineesSelector(state)).toEqual(nominees);
  });

  it("should select current nominees", () => {
    const nominees = new Map()
      .set(
        "nominee1",
        new Nominee({
          id: "nominee1",
          text: "Casey Affleck",
        })
      )
      .set(
        "nominee2",
        new Nominee({
          id: "nominee2",
          text: "Denzel Washington",
        })
      );
    const currentCategory = new Category({
      id: "category1",
      nominees: nominees.map(() => true),
    });
    const category = new Category({
      id: "category2",
      nominees: new Map().set("nominee3", new Nominee()),
    });
    const state = {
      ...store.getState(),
      nominees,
      categories: new Map()
        .set("category1", currentCategory)
        .set("category2", category),
    };
    const props = { category: currentCategory };
    expect(
      is(currentNomineesSelector(state, props), nominees.toIndexedSeq())
    ).toEqual(true);
  });
});
