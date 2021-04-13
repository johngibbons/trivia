import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_SEARCH_FIELD,
  UPDATE_NEW_GAME_NAME,
  UPDATE_NEW_GROUP_NAME,
  UPDATE_NEW_ENTRY_NAME,
} from "./action-types";

import {
  openModal,
  closeModal,
  updateSearchField,
  updateNewGameName,
  updateNewGroupName,
  updateNewEntryName,
} from "./ui-actions";

describe("ui actions", () => {
  it("should create open modal action", () => {
    const id = "NEW_GROUP";
    const expectedAction = {
      type: OPEN_MODAL,
      payload: { id },
    };
    expect(openModal(id)).toEqual(expectedAction);
  });

  it("should create close modal action", () => {
    const expectedAction = {
      type: CLOSE_MODAL,
    };
    expect(closeModal()).toEqual(expectedAction);
  });

  it("should create update search field action", () => {
    const value = "search value";
    const expectedAction = {
      type: UPDATE_SEARCH_FIELD,
      payload: { value },
    };
    expect(updateSearchField(value)).toEqual(expectedAction);
  });

  it("should create update new game name action", () => {
    const value = "Game Name";
    const expectedAction = {
      type: UPDATE_NEW_GAME_NAME,
      payload: { value },
    };
    expect(updateNewGameName(value)).toEqual(expectedAction);
  });

  it("should create update new group name action", () => {
    const value = "Group Name";
    const expectedAction = {
      type: UPDATE_NEW_GROUP_NAME,
      payload: { value },
    };
    expect(updateNewGroupName(value)).toEqual(expectedAction);
  });

  it("should create update new entry name action", () => {
    const value = "Entry Name";
    const expectedAction = {
      type: UPDATE_NEW_ENTRY_NAME,
      payload: { value },
    };
    expect(updateNewEntryName(value)).toEqual(expectedAction);
  });
});
