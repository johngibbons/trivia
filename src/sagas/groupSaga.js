import { call, put, takeLatest, fork, select } from "redux-saga/effects";
import {
  CREATE_GROUP,
  FETCH_GROUP,
  SAVE_GROUP_VALUES,
} from "../actions/action-types";
import {
  createGroupSuccess,
  setGroup,
  setGroupAttr,
  saveGroupValuesSuccess,
} from "../actions/group-actions";
import { syncEntry } from "../actions/entry-actions";
import { syncUser } from "../actions/user-actions";
import API from "../api";
import { currentUserSelector } from "../selectors/current-user-selector";
import { pendingValuesSelector } from "../selectors/ui-selector.js";
import { push } from "react-router-redux";
import { fetchGameAndDependents, syncCategories } from "./gameSaga";
import {
  get,
  sync,
  update,
  CHILD_CHANGED,
  CHILD_ADDED,
  CHILD_REMOVED,
} from "./firebase-saga";
import { database } from "firebase";
import { Map } from "immutable";
import Group from "../models/Group";

export function* createGroup(action) {
  try {
    const currentUser = yield select(currentUserSelector);
    const newGroupId = yield call(API.createGroupId, null);
    const ref = database()
      .ref("categories")
      .orderByChild("game")
      .equalTo(action.payload.game);
    const response = yield call([ref, ref.once], "value");
    const categories = response.val();
    const categoryValues = Object.keys(categories).reduce(
      (acc, key) => ({ ...acc, [key]: categories[key].value }),
      {}
    );
    yield call(
      API.createGroup,
      newGroupId,
      action.payload,
      currentUser,
      categoryValues
    );
    yield put(
      createGroupSuccess(
        newGroupId,
        new Group({
          ...action.payload,
          id: newGroupId,
          admin: currentUser.id,
          values: new Map(categoryValues),
        }).toJS()
      )
    );
    yield put(push(`/groups/${newGroupId}`));
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchCreateGroup() {
  yield fork(takeLatest, CREATE_GROUP, createGroup);
}

export function* fetchGroup(action) {
  const { id } = action.payload;
  try {
    const group = yield call(get, "groups", id);
    yield put(setGroup(group));
    yield call(fetchGameAndDependents, group.game);
    yield call(syncGroupAndDependents, null);
  } catch (errors) {
    console.log(errors);
  }
}

export function* syncGroup() {
  yield fork(sync, `groups`, {
    [CHILD_ADDED]: setGroupAttr,
    [CHILD_CHANGED]: setGroupAttr,
    [CHILD_REMOVED]: setGroupAttr,
  });
}

export function* syncEntries() {
  yield fork(sync, "entries", {
    [CHILD_ADDED]: syncEntry,
    [CHILD_CHANGED]: syncEntry,
  });
}

export function* syncUsers() {
  yield fork(sync, "users", {
    [CHILD_ADDED]: syncUser,
  });
}

export function* syncGroupAndDependents() {
  yield fork(syncGroup, null);
  yield fork(syncCategories, null);
  yield fork(syncEntries, null);
  yield fork(syncUsers, null);
}

export function* watchFetchGroup() {
  yield fork(takeLatest, FETCH_GROUP, fetchGroup);
}

export function* saveGroupValues(action) {
  try {
    const newValues = yield select(pendingValuesSelector);
    yield call(
      update,
      `groups/${action.payload.groupId}`,
      "values",
      newValues.toJS()
    );
    yield put(saveGroupValuesSuccess(action.payload.groupId, newValues));
  } catch (errors) {
    console.log(errors);
  }
}

export function* watchSaveGroupValues() {
  yield fork(takeLatest, SAVE_GROUP_VALUES, saveGroupValues);
}
