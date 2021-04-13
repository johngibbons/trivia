import {
  CREATE_ENTRY,
  UPDATE_ENTRY,
  FETCH_ENTRY,
  SET_ENTRY,
  SELECT_NOMINEE,
} from "./action-types";

import {
  createEntry,
  updateEntry,
  fetchEntry,
  setEntry,
  selectNominee,
} from "./entry-actions";

import User from "../models/User";

describe("entry actions", () => {
  it("should create a create entry action", () => {
    const name = "Some name";
    const group = 1;
    const game = 2;
    const user = new User({ name: "John" });
    const expectedAction = {
      type: CREATE_ENTRY,
      payload: {
        name,
        group,
        game,
        user,
      },
    };
    expect(createEntry(name, group, game, user)).toEqual(expectedAction);
  });

  it("should create a fetch entry action", () => {
    const id = 1;
    const expectedAction = {
      type: FETCH_ENTRY,
      payload: {
        id,
      },
    };
    expect(fetchEntry(id)).toEqual(expectedAction);
  });

  it("should create a set entry action", () => {
    const entry = {
      name: "some entry",
    };
    const expectedAction = {
      type: SET_ENTRY,
      payload: {
        entry,
      },
    };
    expect(setEntry(entry)).toEqual(expectedAction);
  });

  it("should create an update entry action", () => {
    const entry = {
      name: "Some new name",
    };
    const expectedAction = {
      type: UPDATE_ENTRY,
      payload: {
        entry,
      },
    };
    expect(updateEntry(entry)).toEqual(expectedAction);
  });

  it("should create a select nominee action", () => {
    const entryId = 1;
    const nominee = {
      id: 1,
      category: 2,
      name: "Some new name",
    };
    const expectedAction = {
      type: SELECT_NOMINEE,
      payload: {
        entryId,
        nominee,
      },
    };
    expect(selectNominee(entryId, nominee)).toEqual(expectedAction);
  });
});
