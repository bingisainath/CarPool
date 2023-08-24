import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {baseLocalEng} from './../../../../utils/baseLocalization';
import {style} from './style';

const PublishedRideDetailsScreen = (props: any) => {
  const {navigation, route} = props;
  const [gender, setGender] = useState('Male');
  const [avatar, setAvatar] = useState(
    'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
  );
  const [pickUp, setPickUp] = useState('Pune, India');
  const [drop, setDrop] = useState('Mumbai, India');
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <View style={style?.subContainer}>
          <View>
            <Image style={style.image} source={{uri: avatar}} />
          </View>
          <View style={style.subcontainer_1}>
            <Text style={style?.mainTextStyle}>{route.params.name}</Text>
            <Text style={style?.mainTextStyle1}>{gender}</Text>
          </View>
        </View>
        <View style={style?.seperator}></View>
        <View style={style.subcontainer_2}>
          <View style={style?.viewStyle}>
            <Icon
              name={'calendar-month-outline'}
              size={40}
              color={'#000000'}></Icon>
            <Text style={style?.textStyle}>{baseLocalEng?.date}</Text>
            <Text style={style?.textStyle1}>{route.params.date}</Text>
          </View>
          <View style={style?.viewStyle}>
            <Icon
              name={'clock-time-eight-outline'}
              size={40}
              color={'#000000'}></Icon>
            <Text style={style?.textStyle}>{baseLocalEng?.time}</Text>
            <Text style={style?.textStyle1}>{route.params.time}</Text>
          </View>
          <View style={style?.viewStyle}>
            <Icon name={'currency-inr'} size={35} color={'#000000'}></Icon>
            <Text style={style?.textStyle}>{baseLocalEng?.fare}</Text>
            <Text style={style?.textStyle1}>
              {'  '}
              {route.params.price} /-
            </Text>
          </View>
          <View style={style?.viewStyle}>
            <Icon name={'human-male-female'} size={35} color={'#000000'}></Icon>
            <Text style={style?.textStyle}>{baseLocalEng?.seatBooked}</Text>
            <Text style={style?.textStyle1}>
              {'  '}
              {route.params.count}
            </Text>
          </View>
        </View>
      </View>
      <View style={style?.seperator}></View>
      <View style={style.subcontainer_3}>
        <View style={style?.locationViewStyle}>
          <EntypoIcon
            name={'location-pin'}
            size={35}
            color={'#000000'}></EntypoIcon>
          <Text style={style?.textStyle}>
            {baseLocalEng?.pickUpLocation}
          </Text>
          <Text style={style?.textStyle1} numberOfLines={1}>{'   '}{route.params.location.pickUp}</Text>
        </View>
        <View style={style?.threeDotViewStyle}>
          <EntypoIcon
            name={'dots-three-vertical'}
            size={35}
            color={'#000000'}></EntypoIcon>
        </View>
        <View style={style?.locationViewStyle}>
          <EntypoIcon
            name={'location-pin'}
            size={35}
            color={'#000000'}></EntypoIcon>
          <Text style={style?.textStyle}>{baseLocalEng?.dropLocation}</Text>
          <Text style={style?.textStyle1} numberOfLines={1}>{'   '}{route.params.location.drop}</Text>
        </View>
      </View>
    </View>
  );
};

export default PublishedRideDetailsScreen;
