import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/customButton/customButton';
import CustomTextInput from '../../components/customTextInput/customTextInput';
import {
  profileDataRequest,
  updateEmePhoneRequest,
  updateIsChangedRequest,
  updateNameRequest,
} from '../../redux/actions';
import {theme} from './../../styles/theme';
import {baseLocalEng} from './../../utils/baseLocalization';
import {style} from './style';

export const UpdateProfileScreenName = (props: any) => {
  const {navigation} = props;
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const user = auth().currentUser;
  const loading = useSelector((state: any) => state.loading);
  const isChanged = useSelector((state: any) => state.isChanged);

  const updateName = (value: string) => {
    setName(value);
  };

  const handleUpdate = async () => {
    await dispatch(updateNameRequest(user?.uid, name));
    await dispatch(profileDataRequest(user?.uid));
  };

  useEffect(() => {
    if (isChanged == true) {
      dispatch(updateIsChangedRequest());
      navigation.navigate('Profile');
      // Alert.alert('Info', 'Name Change Successfull', [
      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       navigation.navigate('Profile');
      //       // setTimeout(() => {
      //       //   dispatch(updateLocationRequest());
      //       // }, 500);
      //     },
      //   },
      // ]);
    }
  }, [isChanged]);

  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{baseLocalEng.updateName}</Text>
      <CustomTextInput
        label="Full Name"
        updateValue={updateName}></CustomTextInput>
      <Text style={style.textMsgStyle}>{baseLocalEng.updateNameMsg}</Text>

      {loading ? (
        <View style={style.activityIndicator}>
          <ActivityIndicator size={'large'} color="#000" />
        </View>
      ) : (
        <View style={style.btn}>
          {name === '' ? (
            <CustomButton disabled={true} text="Update"></CustomButton>
          ) : (
            <CustomButton
              onPress={handleUpdate}
              disabled={false}
              backgroundColor={theme.black}
              text="Update"></CustomButton>
          )}
        </View>
      )}
    </View>
  );
};

export const UpdateProfileScreenEmergencyNumber = (props: any) => {
  const {navigation} = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const user = auth().currentUser;
  const loading = useSelector((state: any) => state.loading);
  const isChanged = useSelector((state: any) => state.isChanged);
  const updatePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  const handleUpdate = async () => {
    await dispatch(updateEmePhoneRequest(user?.uid, phoneNumber));
    await dispatch(profileDataRequest(user?.uid));
  };

  useEffect(() => {

    console.log('================= isChanged ===================');
    console.log(isChanged);
    console.log('====================================');

    if (isChanged == true) {
      dispatch(updateIsChangedRequest());
      navigation.navigate('Profile');
      // Alert.alert('Info', 'Phone Change Successfull', [
      //   {
      //     text: 'OK',
      //     onPress: () => {
            
      //       // setTimeout(() => {
      //       //   dispatch(updateLocationRequest());
      //       // }, 500);
      //     },
      //   },
      // ]);

    }
  }, [isChanged]);

  return (
    <View style={style.container}>
      <Text style={style.textStyle}>{baseLocalEng.updateEmergencyPhn}</Text>
      <CustomTextInput
        label="Phone Number"
        updateValue={updatePhoneNumber}
        keyboardType="number-pad"></CustomTextInput>
      <Text style={style.textMsgStyle}>
        {baseLocalEng.updateEmergencyPhnMsg}
      </Text>
      {loading ? (
        <View style={style.activityIndicator}>
          <ActivityIndicator size={'large'} color="#000" />
        </View>
      ) : (
        <View style={style.btn}>
          {phoneNumber.length !== 10 ? (
            <CustomButton disabled={true} text="Update"></CustomButton>
          ) : (
            <CustomButton
              onPress={handleUpdate}
              disabled={false}
              backgroundColor={theme.black}
              text="Update"></CustomButton>
          )}
        </View>
      )}
    </View>
  );
};
