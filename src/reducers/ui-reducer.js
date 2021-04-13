import {
  CLOSE_MODAL,
  CREATE_GAME,
  CREATE_GROUP_SUCCESS,
  CREATE_NEW_CATEGORY,
  HIDE_ALERT_BAR,
  OPEN_MODAL,
  SAVE_GROUP_VALUES_SUCCESS,
  SAVE_PENDING_CATEGORY,
  SET_NEXT_LOCATION,
  SHOW_ALERT_BAR,
  SIGN_IN_SUCCESS,
  UPDATE_NEW_ENTRY_NAME,
  UPDATE_NEW_GAME_NAME,
  UPDATE_NEW_GROUP_NAME,
  UPDATE_SEARCH_FIELD,
  UPDATE_VALUE_FIELD,
} from "../actions/action-types";

import { UI } from "../models/UI";
import { Map } from "immutable";

const ui = (state = new UI(), action) => {
  switch (action.type) {
    case CREATE_NEW_CATEGORY:
      return state.set("modal", "NEW_CATEGORY");
    case OPEN_MODAL:
      return state.set("modal", action.payload.id);
    case CLOSE_MODAL:
    case CREATE_GAME:
    case SAVE_PENDING_CATEGORY:
    case SIGN_IN_SUCCESS:
      return state.delete("modal");
    case UPDATE_SEARCH_FIELD:
      return state.set("searchValue", action.payload.value);
    case UPDATE_NEW_GAME_NAME:
      return state.set("newGameName", action.payload.value);
    case UPDATE_NEW_GROUP_NAME:
      return state.set("newGroupName", action.payload.value);
    case UPDATE_NEW_ENTRY_NAME:
      return state.set("newEntryName", action.payload.value);
    case UPDATE_VALUE_FIELD:
      return state.setIn(
        ["values", action.payload.categoryId],
        action.payload.value
      );
    case CREATE_GROUP_SUCCESS:
      return state
        .delete("modal")
        .set("values", new Map(action.payload.group.values));
    case SAVE_GROUP_VALUES_SUCCESS:
      return state
        .delete("modal")
        .mergeIn(["values"], new Map(action.payload.newValues));
    case SET_NEXT_LOCATION:
      return state.set("nextLocation", action.payload.nextLocation);
    case SHOW_ALERT_BAR:
      return state.merge({
        isAlertBarOpen: true,
        alertBarMessage: action.payload.message,
        isAlertBarError: action.payload.isError,
      });
    case HIDE_ALERT_BAR:
      return state.merge({
        isAlertBarOpen: false,
        alertBarMessage: "",
        isAlertBarError: false,
      });
    default:
      return state;
  }
};

export default ui;
