import {
  CREATE_GAME,
  UPDATE_GAME,
  CREATE_GAME_SUCCESS,
  FETCH_GAME,
  SET_GAME,
} from "./action-types";

import {
  createGame,
  createGameSuccess,
  updateGame,
  fetchGame,
  setGame,
} from "./game-actions";

describe("game actions", () => {
  it("should create game create action", () => {
    const name = "Some name";
    const expectedAction = {
      type: CREATE_GAME,
      payload: {
        name,
      },
    };
    expect(createGame(name)).toEqual(expectedAction);
  });

  it("should create game create success action", () => {
    const gameId = 1;
    const game = { name: "Some name" };
    const expectedAction = {
      type: CREATE_GAME_SUCCESS,
      payload: {
        gameId,
        game,
      },
    };
    expect(createGameSuccess(gameId, game)).toEqual(expectedAction);
  });

  it("should create fetch game action", () => {
    const id = 1;
    const expectedAction = {
      type: FETCH_GAME,
      payload: {
        id,
      },
    };
    expect(fetchGame(id)).toEqual(expectedAction);
  });

  it("should create set game action", () => {
    const game = { id: 1, name: "Some name" };
    const expectedAction = {
      type: SET_GAME,
      payload: {
        game,
      },
    };
    expect(setGame(game)).toEqual(expectedAction);
  });

  it("should create game update action", () => {
    const game = { name: "Some name" };
    const expectedAction = {
      type: UPDATE_GAME,
      payload: {
        game,
      },
    };
    expect(updateGame(game)).toEqual(expectedAction);
  });
});
