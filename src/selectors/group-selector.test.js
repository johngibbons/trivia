import { currentGroupSelector } from "./group-selector";

import { Map } from "immutable";
import Group from "../models/Group";

import store from "../store";

describe("group selector", () => {
  it("should select current group", () => {
    const currentGroup = new Group({ name: "My group" });
    const state = { ...store.getState(), groups: Map().set(1, currentGroup) };
    const props = { routeParams: { id: 1 } };
    expect(currentGroupSelector(state, props)).toEqual(currentGroup);
  });

  it("should return empty group if no matching", () => {
    const currentGroup = new Group({ name: "My group" });
    const state = { ...store.getState(), groups: Map().set(2, currentGroup) };
    const props = { routeParams: { id: 1 } };
    expect(currentGroupSelector(state, props)).toEqual(new Group());
  });
});
