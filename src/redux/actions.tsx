export const checkRequest = (data: any) => ({
  type: 'CHECK_REQUEST',
  payload: {data},
});

export const checkSuccess = (data: any) => ({
  type: 'CHECK_SUCCESS',
  payload: {data},
});

export const pickUpLocationRequest = (data: any) => ({
  type: 'PICKUP_REQUEST',
  payload: {data},
});

export const pickUpLocationSuccess = (data: any) => ({
  type: 'PICKUP_SUCCESS',
  payload: {data},
});

export const dropOffLocationRequest = (data: any) => ({
  type: 'DROP_REQUEST',
  payload: {data},
});

export const dropOffLocationSuccess = (data: any) => ({
  type: 'DROP_SUCCESS',
  payload: {data},
});

export const userPickUpLocationRequest = (data: any) => ({
  type: 'USER_PICKUP_REQUEST',
  payload: {data},
});

export const userPickUpLocationSuccess = (data: any) => ({
  type: 'USER_PICKUP_SUCCESS',
  payload: {data},
});

export const userDropOffLocationRequest = (data: any) => ({
  type: 'USER_DROP_REQUEST',
  payload: {data},
});

export const userDropOffLocationSuccess = (data: any) => ({
  type: 'USER_DROP_SUCCESS',
  payload: {data},
});

export const phoneRequest = (phoneNumber: any) => ({
  type: 'PHONE_REQUEST',
  payload: phoneNumber,
});

export const phoneSuccess = (phoneNumber: any) => ({
  type: 'PHONE_SUCCESS',
  payload: phoneNumber,
});

export const signUpRequest = (
  name: string,
  email: string,
  gender: string,
  emergencyContact: string,
  phoneNumber: string,
) => ({
  type: 'SIGNUP_REQUEST',
  payload: {name, email, gender, emergencyContact, phoneNumber},
});

export const signUpSuccess = (user: any) => ({
  type: 'SIGNUP_SUCCESS',
  payload: user,
});

export const otpRequest = (otp: any, otpFun: any, userDetails: any) => ({
  type: 'OTP_REQUEST',
  payload: {otp, otpFun, userDetails},
});

export const otpSuccess = (res: any) => ({
  type: 'OTP_SUCCESS',
  payload: res,
});

export const publishRideRequest = (data: any) => ({
  type: 'PUBLISH_RIDE_REQUEST',
  payload: data,
});

export const publishRideSuccess = (res: any) => ({
  type: 'PUBLISH_RIDE_SUCCESS',
  payload: res,
});

export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const profileDataRequest = (id: any) => ({
  type: 'PROFILE_REQUEST',
  payload: id,
});

export const profileDataSuccess = (res: any) => ({
  type: 'PROFILE_SUCCESS',
  payload: res,
});

export const publishRideDataRequest = (id: any) => ({
  type: 'PUBLSIH_RIDE_DATA_REQUEST',
  payload: id,
});

export const publishRideDataSuccess = (res: any) => ({
  type: 'PUBLSIH_RIDE_DATA_SUCCESS',
  payload: res,
});

export const searchDataRequest = (data: any) => ({
  type: 'SEARCH_DATA_REQUEST',
  payload: data,
});

export const searchDataSuccess = (data: any) => ({
  type: 'SEARCH_DATA_SUCCESS',
  payload: data,
});

export const updateIsReceivedRequest = () => ({
  type: 'UPDATE_ISRECEIVED',
});

export const updateIsChangedRequest = () => ({
  type: 'UPDATE_ISCHANGED',
});

export const updateLocationRequest = () => ({
  type: 'UPDATE_LOCATION',
});

export const updateUserLocationRequest = () => ({
  type: 'UPDATE_USER_LOCATION',
});

export const updateNameRequest = (id: any, name: string) => ({
  type: 'UPDATE_NAME_REQUEST',
  payload: {id, name},
});

export const updateNameSuccess = () => ({
  type: 'UPDATE_NAME_SUCCESS',
});

export const updateEmePhoneRequest = (id: any, phoneNumber: string) => ({
  type: 'UPDATE_EMEPHONE_REQUEST',
  payload: {id, phoneNumber},
});

export const updateEmePhoneSuccess = () => ({
  type: 'UPDATE_EMEPHONE_SUCCESS',
});

export const searchRideRequest = (data: any) => ({
  type: 'SEARCH_RIDE_REQUEST',
  payload: data,
});

export const updateSearchRideSeat = (data: any) => ({
  type: 'UPDATE_SEARCH_RIDE_SEAT',
  payload: data,
});

export const bookedRideDataRequest = (id: any) => ({
  type: 'BOOKED_RIDE_DATA_REQUEST',
  payload: id,
});

export const bookedRideDataSuccess = (res: any) => ({
  type: 'BOOKED_RIDE_DATA_SUCCESS',
  payload: res,
});
