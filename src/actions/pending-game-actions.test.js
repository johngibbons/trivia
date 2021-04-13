import {
  CREATE_NEW_CATEGORY,
  UPDATE_PENDING_CATEGORY,
  SAVE_PENDING_CATEGORY,
  UPDATE_PENDING_NOMINEE,
  SAVE_PENDING_NOMINEE,
  DELETE_NOMINEE,
} from "./action-types";

import {
  createNewCategory,
  updatePendingCategory,
  savePendingCategory,
  updatePendingNominee,
  savePendingNominee,
  deleteNominee,
} from "./pending-game-actions";

import Category from "../models/Category";
import Nominee from "../models/Nominee";

describe("pending game actions", () => {
  it("should create action for create new category", () => {
    const expectedAction = {
      type: CREATE_NEW_CATEGORY,
    };
    expect(createNewCategory()).toEqual(expectedAction);
  });

  it("should create action for update pending category", () => {
    const pendingCategory = { id: 1, name: "Some name" };
    const expectedAction = {
      type: UPDATE_PENDING_CATEGORY,
      payload: {
        pendingCategory,
      },
    };
    expect(updatePendingCategory(pendingCategory)).toEqual(expectedAction);
  });

  it("should create action for save pending category", () => {
    const pendingCategory = new Category({ id: 1, name: "Some name" });
    const gameId = 2;
    const expectedAction = {
      type: SAVE_PENDING_CATEGORY,
      payload: {
        pendingCategory,
        gameId,
      },
    };
    expect(savePendingCategory(pendingCategory, gameId)).toEqual(
      expectedAction
    );
  });

  it("should create action for update pending nominee", () => {
    const pendingNominee = { id: 1, text: "Casey Affleck" };
    const expectedAction = {
      type: UPDATE_PENDING_NOMINEE,
      payload: {
        pendingNominee,
      },
    };
    expect(updatePendingNominee(pendingNominee)).toEqual(expectedAction);
  });

  it("should create action for save pending nominee", () => {
    const nominee = new Nominee({ id: 1, text: "Some text" });
    const expectedAction = {
      type: SAVE_PENDING_NOMINEE,
      payload: {
        nominee,
      },
    };
    expect(savePendingNominee(nominee)).toEqual(expectedAction);
  });

  it("should create action for delete nominee", () => {
    const nominee = new Nominee({ id: 1, text: "Some text" });
    const expectedAction = {
      type: DELETE_NOMINEE,
      payload: {
        nominee,
      },
    };
    expect(deleteNominee(nominee)).toEqual(expectedAction);
  });
});
