import {View, Text, TextInput, Alert, ActivityIndicator, ImageBackground} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomButton from '../../../components/customButton/customButton';
import {style} from './style';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {otpRequest} from '../../../redux/actions';

import {useDispatch, useSelector} from 'react-redux';

const SignInOtpScreen = (props: any) => {
  const dispatch = useDispatch();
  const otpConfirm = useSelector((state: any) => state.otpConfirm);
  const isLogin = useSelector((state: any) => state.isLogin);
  const OTPcheck = useSelector((state: any) => state.OTPcheck);
  const loading = useSelector((state: any) => state.loading);

  const {navigation} = props;
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [count, setCount] = useState(60);
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const otpValidate = () => {
    let otp = '123456';
    let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6;

    dispatch(
      otpRequest(
        enteredOtp,
        props.route.params,
        props.route.params.userDetails,
      ),
    );
  };

  useEffect(() => {
    console.log('=============== OTPcheck =====================');
    console.log(OTPcheck);
    console.log('====================================');
  }, [OTPcheck]);

  const resendOtp = () => {
    setF1('');
    setF2('');
    setF3('');
    setF4('');
    setF5('');
    setF6('');
    setError(false);
    setCount(60);
  };
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/images/Background1.png')}
        style={style.image}>
        <Text style={style.title}>
          {baseLocalEng.otpTitle}
          {props.route.params.phoneNumber}
        </Text>
        <View style={style.otpView}>
          <TextInput
            //@ts-ignore
            ref={et1}
            style={[
              style.inputView,
              {borderColor: f1.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={f1}
            selectionColor="#000"
            onChangeText={txt => {
              setF1(txt);
              //@ts-ignore
              txt.length >= 1 ? et2.current.focus() : et1.current.focus();
            }}
          />
          <TextInput
            //@ts-ignore
            ref={et2}
            style={[
              style.inputView,
              {borderColor: f2.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            selectionColor="#000"
            value={f2}
            onChangeText={txt => {
              setF2(txt);
              //@ts-ignore
              txt.length >= 1 ? et3.current.focus() : et1.current.focus();
            }}
          />
          <TextInput
            //@ts-ignore
            ref={et3}
            style={[
              style.inputView,
              {borderColor: f3.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            selectionColor="#000"
            value={f3}
            onChangeText={txt => {
              setF3(txt);
              //@ts-ignore
              txt.length >= 1 ? et4.current.focus() : et2.current.focus();
            }}
          />

          <TextInput
            //@ts-ignore
            ref={et4}
            style={[
              style.inputView,
              {borderColor: f4.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            selectionColor="#000"
            value={f4}
            onChangeText={txt => {
              setF4(txt);
              //@ts-ignore
              txt.length >= 1 ? et5.current.focus() : et3.current.focus();
            }}
          />

          <TextInput
            //@ts-ignore
            ref={et5}
            style={[
              style.inputView,
              {borderColor: f5.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            selectionColor="#000"
            value={f5}
            onChangeText={txt => {
              setF5(txt);
              //@ts-ignore
              txt.length >= 1 ? et6.current.focus() : et4.current.focus();
            }}
          />

          <TextInput
            //@ts-ignore
            ref={et6}
            style={[
              style.inputView,
              {borderColor: f6.length >= 1 ? 'blue' : '#000'},
            ]}
            keyboardType="number-pad"
            maxLength={1}
            selectionColor="#000"
            value={f6}
            onChangeText={txt => {
              setF6(txt);
              //@ts-ignore
              txt.length >= 1 ? et6.current.focus() : et5.current.focus();
            }}
          />
        </View>
        {OTPcheck === false ? (
          <View style={style.errorView}>
            <Text style={style.errorText}>{baseLocalEng.otpError}</Text>
          </View>
        ) : null}

        <View style={style.resendView}>
          {count !== 0 && (
            <>
              <Text style={style.resendOtpTextTimer}>
                {baseLocalEng.otpResend} :{' '}
              </Text>
              <Text style={style.resendOtpTextTimer}>{count + ' seconds'}</Text>
            </>
          )}
          {count === 0 && (
            <Text style={style.resendOtpText} onPress={() => resendOtp()}>
              {baseLocalEng.otpResendButton}
            </Text>
          )}
        </View>
        {loading ? (
          <View style={style.activityIndicator}>
            <ActivityIndicator size={'large'} color="#000" />
          </View>
        ) : (
          <View style={style.btn}>
            {f1 !== '' &&
            f2 !== '' &&
            f3 !== '' &&
            f4 !== '' &&
            f5 !== '' &&
            f6 !== '' ? (
              <CustomButton
                text="Verify OTP"
                disabled={false}
                backgroundColor="#000"
                onPress={() => otpValidate()}></CustomButton>
            ) : (
              <CustomButton text="Verify OTP" disabled={true}></CustomButton>
            )}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default SignInOtpScreen;
