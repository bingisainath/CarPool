import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, ScrollView, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';

import CustomButton from '../../../components/customButton/customButton';
import CustomTextInput from '../../../components/customTextInput/customTextInput';
import {baseLocalEng} from '../../../utils/baseLocalization';
import {style} from './style';
import {signUpRequest} from '../../../redux/actions';
//@ts-ignore
const SignUpScreen = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const otpConfirm = useSelector((state: any) => state.otpConfirm);
  const loading = useSelector((state: any) => state.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');

  const updateName = (value: string) => {
    setName(value);
  };

  const updateEmail = (value: string) => {
    setEmail(value);
  };

  const updateEmergencyContactNumber = (value: string) => {
    setEmergencyContactNumber(value);
  };
  const data = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ];
  const renderItem = (item: any) => {
    return (
      <View style={style.item}>
        <Text style={style.textItem}>{item.label}</Text>
      </View>
    );
  };

  const handleSubmit = async () => {
    const res = await dispatch(
      signUpRequest(
        name,
        email,
        gender,
        emergencyContactNumber,
        props.route.params.phoneNumber,
      ),
    );
  };

  useEffect(() => {
    if (otpConfirm == undefined || otpConfirm == 'SignUp') {
      console.log('undefines', otpConfirm);
    } else {
      // console.log("OTP succeess : ",otpConfirm);
      navigation.navigate('OTP', {
        otpConfirm: otpConfirm,
        userDetails: {
          name: name,
          email: email,
          gender: gender,
          emergencyContactNumber: emergencyContactNumber,
          phoneNumber: props.route.params.phoneNumber,
        },
        phoneNumber: props.route.params.phoneNumber,
      });
    }
  }, [otpConfirm]);

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/images/Background3.png')}
        style={style.image}>
      <ScrollView contentContainerStyle={style.contentContainer}>
        <Text style={style.textStyle}>
          {baseLocalEng.signupHeader}
          {props.route.params.phoneNumber}
        </Text>
        <Text style={style.textStyle}>{baseLocalEng.signupHeader1}</Text>
        <CustomTextInput
          label={baseLocalEng.name}
          mandatory={true}
          placeholder={baseLocalEng.namePlaceholder}
          updateValue={updateName}
        />
        <CustomTextInput
          label={baseLocalEng.email}
          mandatory={true}
          placeholder={baseLocalEng.emailPlaceholder}
          updateValue={updateEmail}
        />
        <View style={style.dropdownContainer}>
          <Text style={style.labelText}>
            {baseLocalEng.gender}
            <Text style={style.mandatoryText}>{baseLocalEng.req}</Text>
          </Text>
          <Dropdown
            style={style.dropdown}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            placeholderStyle={{color:'#000'}}
            selectedTextStyle	={{color:'#000'}}
            labelField="label"
            valueField="value"
            placeholder={baseLocalEng.genderPlaceholder}
            value={gender}
            onChange={item => {
              //@ts-ignore
              setGender(item.value);
            }}
            renderItem={renderItem}
          />
        </View>
        <CustomTextInput
          label={baseLocalEng.emergencyContactNumber}
          mandatory={true}
          placeholder={baseLocalEng.emergencyContactNumberPlaceholder}
          updateValue={updateEmergencyContactNumber}
          keyboardType="number-pad"
        />

        {loading ? (
          <View style={style.activityIndicator}>
            <ActivityIndicator size={'large'} color="#2ab5e8" />
          </View>
        ) : (
          <View style={style.btn}>
            <CustomButton
              text={baseLocalEng.submit}
              disabled={false}
              backgroundColor="#000"
              onPress={handleSubmit}
            />
          </View>
        )}
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
