import { watchSearchSubmit } from './adminSaga';

function* rootSaga() {
  yield [
    watchSearchSubmit()
  ];
}

export default rootSaga
