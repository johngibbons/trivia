import {
  CREATE_GROUP,
  CREATE_GROUP_SUCCESS,
  FETCH_GROUP,
} from "./action-types";

import { createGroup, createGroupSuccess, fetchGroup } from "./group-actions";

describe("group actions", () => {
  it("should create an action for creating a group", () => {
    const name = "Some Group";
    const game = "2017Oscars";
    const expectedAction = {
      type: CREATE_GROUP,
      payload: {
        name,
        game,
      },
    };
    expect(createGroup(name, game)).toEqual(expectedAction);
  });

  it("should create an action for create success", () => {
    const id = "123";
    const group = { name: "Some Group", game: 2 };
    const expectedAction = {
      type: CREATE_GROUP_SUCCESS,
      payload: {
        id,
        group,
      },
    };
    expect(createGroupSuccess(id, group)).toEqual(expectedAction);
  });

  it("should create an action for fetching a group", () => {
    const id = 1;
    const expectedAction = {
      type: FETCH_GROUP,
      payload: {
        id,
      },
    };
    expect(fetchGroup(id)).toEqual(expectedAction);
  });
});
