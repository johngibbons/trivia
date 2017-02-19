import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson
} from './adminSaga';
import {
  watchCheckAuthStatus,
  watchSignOut
} from './authSaga';
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
  watchSelectNominee
} from './entrySaga';

function* rootSaga() {
  yield [
    watchSearchSubmit(),
    watchCheckAuthStatus(),
    watchSaveTitle(),
    watchSavePerson(),
    watchSignOut(),
    watchCreateGame(),
    watchFetchGame(),
    watchCreateGroup(),
    watchFetchGroup(),
    watchCreateEntry(),
    watchFetchEntry(),
    watchSelectNominee(),
    watchSelectCorrectNominee()
  ];
}

export default rootSaga
