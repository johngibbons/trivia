import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson
} from './adminSaga';
import {
  watchCheckAuthStatus,
  watchSignOut
} from './authSaga';
import { watchFetchUser } from './userSaga';
import {
  watchCreateGame,
  watchFetchGame,
  watchSelectCorrectNominee
} from './gameSaga';
import {
  watchCreateGroup,
  watchFetchGroup
} from './groupSaga';
import {
  watchCreateEntry,
  watchFetchEntry,
  watchSelectNominee,
  watchUserEntries
} from './entrySaga';

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus(),
    watchSaveTitle(),
    watchSavePerson(),
    watchSignOut(),
    watchFetchUser(),
    watchCreateGame(),
    watchFetchGame(),
    watchCreateGroup(),
    watchFetchGroup(),
    watchCreateEntry(),
    watchFetchEntry(),
    watchSelectNominee(),
    watchSelectCorrectNominee(),
    watchUserEntries()
  ];
}

export default rootSaga
