import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CustomButton from '../../../components/customButton/customButton';
import CustomTextInput from '../../../components/customTextInput/customTextInput';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';
import {phoneRequest} from '../../../redux/actions';

const SignInScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const accConfirm = useSelector((state: any) => state.accConfirm);
  const otpConfirm = useSelector((state: any) => state.otpConfirm);
  const loading = useSelector((state: any) => state.loading);

  const [phoneNumber, setPhoneNumber] = useState('');

  const checkPhoneNumber = (value: string) => {
    // code to check phone number using firebase
    setPhoneNumber(value);
  };

  const handleSubmit = async () => {
    console.log('Pressed');
    const completePhone = `+91${phoneNumber}`;
    dispatch(phoneRequest(completePhone));
  };

  useEffect(() => {
    if (accConfirm == undefined || accConfirm == '') {
      console.log(accConfirm);
    } else if (accConfirm == 'SignUp') {
      navigation.navigate('SignUp', {phoneNumber: phoneNumber});
    } else {
      navigation.navigate('OTP', {
        phoneNumber: phoneNumber,
        otpConfirm: otpConfirm,
      });
    }
  }, [accConfirm]);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/images/Background1.png')}
        style={style.image}>
      <Text style={style.labelText}>{baseLocalEng.signinHeader}</Text>
      <Text style={style.normalText}>{baseLocalEng?.signinMessage}</Text>
      <View style={style.phoneContainer}>
        <View style={style.dropdown}>
          <Text style={style.disabledText}>+91</Text>
        </View>
        <View style={style.textInput}>
          <CustomTextInput
            mandatory={false}
            placeholder="Enter Phone Number..."
            keyboardType="number-pad"
            updateValue={checkPhoneNumber}
          />
        </View>
      </View>
      {loading ? (
        <View style={style.activityIndicator}>
          <ActivityIndicator size={'large'} color="#000" />
        </View>
      ) : (
        <View style={style.btn}>
          {phoneNumber.length == 10 ? (
            <CustomButton
              text="Submit"
              disabled={false}
              backgroundColor="#000"
              onPress={handleSubmit}
            />
          ) : (
            <CustomButton
              text="Submit"
              disabled={true}
              backgroundColor="#c4c4c4"
            />
          )}
        </View>
      )}
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
