import {call, put, takeLatest} from 'redux-saga/effects';
import {
  bookedRideDataSuccess,
  dropOffLocationSuccess,
  logoutSuccess,
  otpSuccess,
  phoneSuccess,
  pickUpLocationSuccess,
  profileDataSuccess,
  publishRideDataSuccess,
  searchDataSuccess,
  signUpSuccess,
  updateNameSuccess,
  userDropOffLocationSuccess,
  userPickUpLocationSuccess,
} from './actions';
import {
  bookedRideData,
  otpCheck,
  phoneCheck,
  profile,
  publishRide,
  publishRideData,
  searchRide,
  searchRideData,
  signUp,
  updateEmePhone,
  updateName,
  updateSearchRideSeat,
} from './asyncFunctions';

function* phoneCheckSaga(action: any) {
  try {
    //@ts-ignore
    const res = yield call(phoneCheck, action.payload);

    console.log('SignIN res: ', res);

    if (res.data == 'auth/user-not-found') {
      yield put(phoneSuccess('SignUp'));
    } else {
      yield put(phoneSuccess(res));
    }
  } catch (error) {
    //@ts-ignore
    console.log('SignIn Error :', error.message);
  }
}

function* signUpSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(signUp, action.payload);

    yield put(signUpSuccess(data));
  } catch (error) {
    //@ts-ignore
    console.log('SignUp Error :', error.message);
  }
}

// Validating using OTP
function* otpSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(otpCheck, action.payload);

    if (data.code == 'auth/invalid-verification-code' || data == undefined) {
      yield put(otpSuccess(false));
    } else {
      yield put(otpSuccess(true));
    }
  } catch (error) {
    console.log('OTP Error :', error);
  }
}

function* pickUplocation(action: any) {
  try {
    //@ts-ignore
    yield put(pickUpLocationSuccess(action.payload.data));
  } catch (e) {
    console.log('Error:', e);
  }
}

function* dropOfflocation(action: any) {
  try {
    //@ts-ignore
    yield put(dropOffLocationSuccess(action.payload.data));
  } catch (e) {
    console.log('Error:', e);
  }
}

function* userPickUplocation(action: any) {
  try {
    //@ts-ignore
    yield put(userPickUpLocationSuccess(action.payload.data));
  } catch (e) {
    console.log('Error:', e);
  }
}

function* userDropOfflocation(action: any) {
  try {
    //@ts-ignore
    yield put(userDropOffLocationSuccess(action.payload.data));
  } catch (e) {
    console.log('Error:', e);
  }
}

function* PublishRideSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(publishRide, action.payload);
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* ProfileSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(profile, action.payload);

    yield put(profileDataSuccess(data._data));
  } catch (error) {
    //@ts-ignore
    console.log('SignUp Error :', error.message);
  }
}

function* publishRideDataRequestSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(publishRideData, action.payload);

    yield put(publishRideDataSuccess(data));
  } catch (error) {
    //@ts-ignore
    console.log('SignUp Error :', error.message);
  }
}

function* bookedRideDataRequestSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(bookedRideData, action.payload);

    yield put(bookedRideDataSuccess(data));
  } catch (error) {
    //@ts-ignore
    console.log('SignUp Error :', error.message);
  }
}

function* searchDataRequestSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(searchRideData, action.payload);

    yield put(searchDataSuccess(data));
  } catch (error) {
    //@ts-ignore
    console.log('Search Error :', error.message);
  }
}

function* searchRideRequestSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(searchRide, action.payload);
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* updateSearchRideSeatSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(updateSearchRideSeat, action.payload);
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* updateNameSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(updateName, action.payload);
    yield put(updateNameSuccess());
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* updateEmePhoneSaga(action: any) {
  try {
    //@ts-ignore
    const data = yield call(updateEmePhone, action.payload);
  } catch (e) {
    console.log('Error: ', e);
  }
}

function* logout() {
  try {
    //@ts-ignore
    const data = yield put(logoutSuccess());
  } catch (e) {
    console.log(e);
  }
}

export function* mainSaga() {
  yield takeLatest('PHONE_REQUEST', phoneCheckSaga);
  yield takeLatest('PICKUP_REQUEST', pickUplocation);
  yield takeLatest('SIGNUP_REQUEST', signUpSaga);
  yield takeLatest('OTP_REQUEST', otpSaga);
  yield takeLatest('DROP_REQUEST', dropOfflocation);
  yield takeLatest('USER_PICKUP_REQUEST', userPickUplocation);
  yield takeLatest('USER_DROP_REQUEST', userDropOfflocation);
  yield takeLatest('PUBLISH_RIDE_REQUEST', PublishRideSaga);
  yield takeLatest('PROFILE_REQUEST', ProfileSaga);
  yield takeLatest('PUBLSIH_RIDE_DATA_REQUEST', publishRideDataRequestSaga);
  yield takeLatest('SEARCH_DATA_REQUEST', searchDataRequestSaga);
  yield takeLatest('SEARCH_RIDE_REQUEST', searchRideRequestSaga);
  yield takeLatest('UPDATE_SEARCH_RIDE_SEAT', updateSearchRideSeatSaga);
  yield takeLatest('UPDATE_NAME_REQUEST', updateNameSaga);
  yield takeLatest('UPDATE_EMEPHONE_REQUEST', updateEmePhoneSaga);
  yield takeLatest('BOOKED_RIDE_DATA_REQUEST', bookedRideDataRequestSaga);
  yield takeLatest('LOGOUT_REQUEST', logout);
}
