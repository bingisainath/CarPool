// rootSaga.js
import {all} from 'redux-saga/effects';
import {mainSaga} from './sagaFunctions';

export default function* rootSaga() {
  yield all([mainSaga()]);
}
