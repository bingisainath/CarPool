import React from 'react';
import {Image, Text, View} from 'react-native';
import {baseLocalEng} from '../../utils/baseLocalization';
import CustomButton from '../customButton/customButton';
import {style} from './style';

type CustomDriverDetailsProps = {
  profilePicture?: string;
  name?: string;
  gender?: string;
  rating?: number;
  date?: string;
  time?: string;
  seatAvailable?: number;
  onPress?: () => void;
};
const CustomDriverDetails = (props: CustomDriverDetailsProps) => {
  return (
    <View style={style.constainer}>
      <View style={style.subcontainer}>
        <View>
          <Image
            style={style.image}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={style.subcontainer_1}>
          <Text style={style.subcontainer_1_text}>{props.name}</Text>
          <Text style={style.subcontainer_1_text}>{props.gender}</Text>
          <Text style={style.subcontainer_1_text}>
            {baseLocalEng.rating} : {props.rating} / {baseLocalEng.totalRating}
          </Text>
        </View>
      </View>
      <View style={style.subcontainer1}>
        <View>
          <Text style={style.textColorStyle}>
            <Text style={style.subcontainer1_1_text}>
              {baseLocalEng.date} :{' '}
            </Text>
            {props.date}
          </Text>
          <Text style={style.textColorStyle}>
            <Text style={style.subcontainer1_1_text}>
              {baseLocalEng.time} :{' '}
            </Text>
            {props.time}
          </Text>
          <Text style={style.textColorStyle}>
            <Text style={style.subcontainer1_1_text}>
              {baseLocalEng.seatAvailable} :{' '}
            </Text>
            {props.seatAvailable}
          </Text>
        </View>
        <CustomButton
          text="Join"
          disabled={false}
          width="30%"
          onPress={props.onPress}
          backgroundColor="#000"></CustomButton>
      </View>
    </View>
  );
};

export default CustomDriverDetails;
