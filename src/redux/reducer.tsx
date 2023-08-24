const initialState = {
  check: '',
  loading: false,
  pickUplocation: '',
  dropOfflocation: '',
  userPickUpLocation: '',
  userDropOffLocation: '',
  accConfirm: '',
  isLogin: '',
  otpConfirm: '',
  publishRes: '',
  userData: '',
  OTPcheck: '',
  publishedRides: [],
  bookedRides: [],
  searchRides: [],
  isChanged: false,
  isReceived: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'PICKUP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PICKUP_SUCCESS':
      return {
        ...state,
        pickUplocation: action.payload.data,
        loading: false,
      };
    case 'DROP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DROP_SUCCESS':
      return {
        ...state,
        dropOfflocation: action.payload.data,
        loading: false,
      };
    case 'USER_PICKUP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_PICKUP_SUCCESS':
      return {
        ...state,
        userPickUpLocation: action.payload.data,
        loading: false,
      };
    case 'USER_DROP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_DROP_SUCCESS':
      return {
        ...state,
        userDropOffLocation: action.payload.data,
        loading: false,
      };

    case 'PHONE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'PHONE_SUCCESS':
      return {
        ...state,
        accConfirm: action.payload,
        otpConfirm: action.payload,
        loading: false,
        error: null,
      };

    case 'SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        otpConfirm: action.payload,
        newLogin: true,
        loading: false,
        error: null,
      };

    case 'OTP_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'OTP_SUCCESS':
      return {
        ...state,
        isLogin: action.payload,
        OTPcheck: action.payload,
        loading: false,
        error: null,
      };

    case 'PUBLISH_RIDE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'PUBLISH_RIDE_SUCCESS':
      return {
        ...state,
        publishRes: action.payload,
        pickUplocation: '',
        dropOfflocation: '',
        loading: false,
        error: null,
      };

    case 'SEARCH_RIDE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'UPDATE_SEARCH_RIDE_SEAT':
      return {
        ...state,
        error: null,
      };

    case 'PROFILE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: null,
        isChanged: true,
      };

    case 'PUBLSIH_RIDE_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'PUBLSIH_RIDE_DATA_SUCCESS':
      return {
        ...state,
        publishedRides: action.payload,
        loading: false,
        error: null,
      };

    case 'BOOKED_RIDE_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'BOOKED_RIDE_DATA_SUCCESS':
      return {
        ...state,
        bookedRides: action.payload,
        loading: false,
        error: null,
      };

    case 'SEARCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'SEARCH_DATA_SUCCESS':
      return {
        ...state,
        searchRides: action.payload,
        loading: false,
        error: null,
        isReceived: true,
      };

    case 'UPDATE_NAME_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'UPDATE_NAME_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };

    case 'UPDATE_EMEPHONE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'UPDATE_EMEPHONE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };

    case 'UPDATE_ISRECEIVED':
      return {
        ...state,
        isReceived: false,
      };

    case 'UPDATE_ISCHANGED':
      return {
        ...state,
        isChanged: false,
      };

    case 'UPDATE_LOCATION':
      return {
        ...state,
        pickUplocation: '',
        dropOfflocation: '',
      };

    case 'UPDATE_USER_LOCATION':
      return {
        ...state,
        userPickUpLocation: '',
        userDropOffLocation: '',
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLogin: false,
        loading: false,
        check: '',
        pickUplocation: '',
        dropOfflocation: '',
        userPickUpLocation: '',
        userDropOffLocation: '',
        accConfirm: '',
        otpConfirm: '',
        publishRes: '',
        OTPcheck: '',
        userData: '',
        bookedRides: [],
        publishedRides: [],
        searchRides: [],
        isReceived: false,
        isChanged: false,
      };
  }
};

export default reducer;
