import auth from '@react-native-firebase/auth';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';

import {logoutRequest} from '../../redux/actions';
import {baseLocalEng} from '../../utils/baseLocalization';
import {style} from './style';

const ProfileScreen = (props: any) => {
  const {navigation, route} = props;
  const [avatar, setAvatar] = useState(
    'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
  );

  const user = auth().currentUser;
  const userData = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(userData?.name);
    setEmergencyPhone(userData?.emergencyContactNumber);
  }, [userData]);

  const [name, setName] = useState(userData?.name);
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);
  const [phone, setPhone] = useState(user?.phoneNumber);
  const [emergencyPhone, setEmergencyPhone] = useState(
    userData?.emergencyContactNumber,
  );

  return (
    <ImageBackground
      source={require('../../assets/images/Background5.png')}
      style={style.image1}>
      <View style={style.mainContainer}>
        <View style={style.profileHeader}>
          <Image style={style.image} source={{uri: avatar}} />
        </View>
        <View style={style.subContainer}>
          <View style={style.subContainer1}>
            <View style={style.profileBody}>
              <Icon name="user" size={30} color="#808e9b" />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>{baseLocalEng.name}</Text>
                <Text style={style.textColorStyle}>{name}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateName')}>
              <Icon name="angle-right" size={35} color="#808e9b" />
            </TouchableOpacity>
          </View>

          <View style={style.profileBody}>
            <Icon name="envelope" size={20} color="#808e9b" />
            <View style={style.profileSubBody}>
              <Text style={style.profileText}>{baseLocalEng.email}</Text>
              <Text style={style.textColorStyle}>{email}</Text>
            </View>
          </View>

          <View style={style.profileBody}>
            <Icon name="venus-mars" size={20} color="#808e9b" />
            <View style={style.profileSubBody}>
              <Text style={style.profileText}>{baseLocalEng.gender}</Text>
              <Text style={style.textColorStyle}>{gender}</Text>
            </View>
          </View>

          <View style={style.profileBody}>
            <Icon name="phone" size={30} color="#808e9b" />
            <View style={style.profileSubBody}>
              <Text style={style.profileText}>{baseLocalEng.phoneNumber}</Text>
              <Text style={style.textColorStyle}>{phone}</Text>
            </View>
          </View>

          <View style={style.subContainer1}>
            <View style={style.profileBody}>
              <Icon name="mobile" size={45} color="#808e9b" />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>
                  {baseLocalEng.emergencyContactNumber}
                </Text>
                <Text style={style.textColorStyle}>{emergencyPhone}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UpdateEmergencyNumber')}>
              <Icon name="angle-right" size={35} color="#808e9b" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={async () => {
              await auth().signOut();
              console.log('Logout');
              dispatch(logoutRequest());
              // navigation.navigate('IntroSlider2')
            }}>
            <View style={style.profileBody}>
              <Icon1 name="logout" size={30} color="#808e9b" />
              <View style={style.profileSubBody}>
                <Text style={style.profileText}>{baseLocalEng.logout}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
