import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {baseLocalEng} from '../../utils/baseLocalization';
import CustomBookingDetails from '../../components/customBookingDetails/customBookingDetails';
import CustomButton from '../../components/customButton/customButton';
import {theme} from '../../styles/theme';
import {useDispatch, useSelector} from 'react-redux';
import {publishRideDataRequest, publishRideRequest} from '../../redux/actions';
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';

import {profileDataRequest, updateLocationRequest} from '../../redux/actions';

//@ts-ignore
const BookingConfirmationScreen = (props: any) => {
  const user = auth().currentUser;

  const userData = useSelector((state: any) => state.userData);

  useEffect(() => {
    dispatch(profileDataRequest(user?.uid));
  }, []);

  const {navigation, route} = props;
  const dispatch = useDispatch();
  const onSearch = async () => {
    dispatch(
      publishRideRequest({
        id: uuid.v4(),
        vehicleNumber: route.params.vehicleNumber,
        date: route?.params?.date,
        time: route.params.time,
        count: route.params.count,
        price: route.params.price,
        location: {
          pickUp: route.params.location.pickUp,
          drop: route.params.location.drop,
        },
        userID: user?.uid,
        name: userData?.name,
        phoneNumber: user?.phoneNumber,
      }),
    );

    dispatch(updateLocationRequest());

    dispatch(publishRideDataRequest(user?.uid));

    // Alert.alert('Info', 'Yahoo! Published Ride', [
    //   {
    //     text: 'OK',
    //     onPress: () => {
    //       navigation.navigate('PublisedRideScreen');
    //       setTimeout(() => {
    //         dispatch(updateLocationRequest());
    //       }, 500);
    //     },
    //   },
    // ]);

    navigation.navigate('PublisedRideScreen');
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
        headername="Booking Details"
        name={userData?.name}
        vehicleNumber={route?.params?.vehicleNumber}
        date={route?.params?.date}
        time={route?.params?.time}
        price={route?.params?.price}
        seatBooked={route.params.count}
        pickUpLocation={route?.params?.location?.pickUp?.title}
        dropLocation={
          route?.params?.location?.drop?.title
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
          onPress={onSearch}></CustomButton>
      </View>
    </View>
  );
};

export default BookingConfirmationScreen;
