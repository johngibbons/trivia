import { setEntry, setEntries, selectNominee } from "../actions/entry-actions";
import { Map } from "immutable";

import reducer from "../reducers/entries-reducer";

import Entry from "../models/Entry";

describe("entries reducer", () => {
  it("should set entry", () => {
    const entry = new Entry({
      id: "entry1",
      name: "Entry 1",
      group: "group1",
      game: "game1",
      selections: new Map({
        category1: "nominee1",
      }),
      user: "user1",
    });
    const action = setEntry(entry);
    const expectedResult = new Map().set("entry1", entry);
    expect(reducer(undefined, action)).toEqual(expectedResult);
  });

  it("should set a nominee selection", () => {
    const entryId = "entry1";
    const nominee = {
      id: "nominee1",
      category: "category1",
      name: "nominee",
    };
    const action = selectNominee(entryId, nominee);
    const expectedResult = new Map().set(
      "entry1",
      new Entry({
        selections: new Map().set("category1", "nominee1"),
      })
    );
    expect(reducer(undefined, action)).toEqual(expectedResult);
  });

  it("should set entries", () => {
    const entries = {
      entry1: {
        id: "entry1",
        name: "some entry",
      },
      entry2: {
        id: "entry2",
        name: "some other entry",
      },
    };
    const action = setEntries(entries);
    expect(reducer(undefined, action)).toEqual(
      new Map()
        .set(
          "entry1",
          new Entry({
            id: "entry1",
            name: "some entry",
          })
        )
        .set(
          "entry2",
          new Entry({
            id: "entry2",
            name: "some other entry",
          })
        )
    );
  });

  it("should handle set entries null", () => {
    const action = setEntries(null);
    expect(reducer(undefined, action)).toEqual(new Map());
  });
});
