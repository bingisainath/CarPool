import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React from 'react';
import {style} from './style';
import {baseLocalEng} from '../../utils/baseLocalization';
import CustomBookingDetails from '../../components/customBookingDetails/customBookingDetails';
import CustomButton from '../../components/customButton/customButton';
import {theme} from '../../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import CustomRoundButton from '../../components/customRoundButton/customRoundButton';
import {
  bookedRideDataRequest,
  searchRideRequest,
  updateSearchRideSeat,
  updateUserLocationRequest,
} from '../../redux/actions';
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';
//@ts-ignore
const SearchBookingConfirmation = (props: any) => {
  const user = auth().currentUser;
  const {navigation, route} = props;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userData);

  const onDone = async () => {
    dispatch(
      searchRideRequest({
        id: uuid.v4(),
        name: userData?.name,
        riderName: route?.params?.riderName,
        vehicleNumber: route?.params?.vehicleNumber,
        date: route?.params?.date,
        time: route?.params?.time,
        count: route?.params?.count,
        price: route?.params?.price * route?.params?.count,
        location: {
          pickUp: route?.params?.location?.pickUp,
          drop: route?.params?.location?.drop,
        },
        userID: user?.uid,
        phoneNumber: route?.params?.phoneNumber,
      }),
    );
    dispatch(
      updateSearchRideSeat({
        id: route?.params?.id,
        seatBooked: route?.params?.totalSeat - route.params.count,
      }),
    );

    dispatch(updateUserLocationRequest());
    dispatch(bookedRideDataRequest(user?.uid));

    
    // Alert.alert('Info', 'Yahoo! Ride has Booked', [
    //   {
    //     text: 'OK',
    //     onPress: () => {
    //       navigation.navigate('SearchScreen');
    //       setTimeout(() => {
    //         dispatch(updateUserLocationRequest());
    //       }, 500);
    //     },
    //   },
    // ]);

    navigation.navigate('SearchScreen');

  };
  return (
    <View style={style.mainContainer}>
      <View style={style.profileHeader}>
        <Image
          source={require('../../assets/images/confirmation.png')}
          style={{height: 120, width: 120, marginTop: 10}}
        />
        <Text style={style.profilePictureText}>
          {baseLocalEng.bookingConfirmed}
        </Text>
      </View>
      <CustomBookingDetails
        headername="Booking Details :"
        name={userData?.name}
        vehicleNumber={route?.params?.vehicleNumber}
        date={route?.params?.date}
        time={route?.params?.time}
        price={(route?.params?.price * route?.params?.count).toString()}
        seatBooked={route?.params?.count}
        pickUpLocation={route?.params?.location?.pickUp.title}
        dropLocation={
          route?.params?.location?.drop.title
        }></CustomBookingDetails>
      <View style={style.FinalTextcontainer}>
        <Text style={style.FinalText}>{baseLocalEng.haveaSafeJoutney}</Text>
      </View>
      <View style={style.btn}>
        <CustomButton
          text="Done"
          backgroundColor={theme.black}
          width="40%"
          disabled={false}
          onPress={onDone}></CustomButton>
      </View>
    </View>
  );
};

export default SearchBookingConfirmation;
