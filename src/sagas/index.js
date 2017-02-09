import {
  watchSearchSubmit,
  watchSaveTitle,
  watchSavePerson
} from './adminSaga';
import { watchCheckAuthStatus } from './authSaga';
import {
  watchCreateGame,
  watchFetchGame
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
    watchCreateGame(),
    watchFetchGame(),
    watchCreateGroup(),
    watchFetchGroup(),
    watchCreateEntry(),
    watchFetchEntry(),
    watchSelectNominee()
  ];
}

export default rootSaga
