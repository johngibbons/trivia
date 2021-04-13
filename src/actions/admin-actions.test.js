import {
  SUBMIT_SEARCH,
  SUBMIT_SEARCH_SUCCESS,
  SUBMIT_SEARCH_FAILURE,
  SAVE_TITLE,
  SAVE_PERSON,
} from "./action-types";

import {
  submitSearch,
  submitSearchSuccess,
  submitSearchFailure,
  saveTitle,
  savePerson,
} from "./admin-actions.js";

describe("admin actions", () => {
  it("should return search action", () => {
    const value = "some search";
    const expectedAction = {
      type: SUBMIT_SEARCH,
      payload: {
        value,
      },
    };
    expect(submitSearch(value)).toEqual(expectedAction);
  });

  it("should return submit search success action", () => {
    const response = [
      {
        thing: "thing",
      },
      {
        secondThing: "secondThing",
      },
    ];
    const expectedAction = {
      type: SUBMIT_SEARCH_SUCCESS,
      payload: {
        response,
      },
    };
    expect(submitSearchSuccess(response)).toEqual(expectedAction);
  });

  it("should return submit search failure action", () => {
    const errors = { some_error: "error" };
    const expectedAction = {
      type: SUBMIT_SEARCH_FAILURE,
      payload: {
        errors,
      },
    };
    expect(submitSearchFailure(errors)).toEqual(expectedAction);
  });

  it("should return save title action", () => {
    const title = { name: "A title" };
    const expectedAction = {
      type: SAVE_TITLE,
      payload: {
        title,
      },
    };
    expect(saveTitle(title)).toEqual(expectedAction);
  });

  it("should return save person action", () => {
    const person = { name: "John Smith" };
    const expectedAction = {
      type: SAVE_PERSON,
      payload: {
        person,
      },
    };
    expect(savePerson(person)).toEqual(expectedAction);
  });
});
