import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson,
} from "./adminSaga";
import { watchCheckAuthStatus, watchSignOut } from "./authSaga";
import { watchFetchUser, watchFetchOrCreateUser } from "./userSaga";
import {
  watchCreateGame,
  watchFetchGame,
  watchSelectCorrectNominee,
} from "./gameSaga";
import {
  watchCreateGroup,
  watchFetchGroup,
  watchSaveGroupValues,
} from "./groupSaga";
import {
  watchCreateEntry,
  watchFetchEntry,
  watchSelectNominee,
  watchUserEntries,
} from "./entrySaga";

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus(),
    watchSaveTitle(),
    watchSavePerson(),
    watchSignOut(),
    watchFetchUser(),
    watchFetchOrCreateUser(),
    watchCreateGame(),
    watchFetchGame(),
    watchCreateGroup(),
    watchFetchGroup(),
    watchSaveGroupValues(),
    watchCreateEntry(),
    watchFetchEntry(),
    watchSelectNominee(),
    watchSelectCorrectNominee(),
    watchUserEntries(),
  ];
}

export default rootSaga;
