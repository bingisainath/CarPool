import React from 'react';
import { Text, View } from 'react-native';
import { baseLocalEng } from '../../utils/baseLocalization';
import { style } from './style';

type CustomBookingDetailsProps = {
  headername?: string;
  name?: string;
  vehicleNumber?: string;
  date?: string;
  time?: string;
  price?: string;
  seatBooked?: number;
  pickUpLocation?: string;
  dropLocation?: string;
};
const CustomBookingDetails = (props: CustomBookingDetailsProps) => {
  return (
    <View style={style.container}>
      <Text style={style.header}>{props.headername}</Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.name} : </Text>
        {props.name}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.vehicleNumber} : </Text>
        {props.vehicleNumber}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.date} : </Text>
        {props.date}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.time} : </Text>
        {props.time}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.price} : </Text>
        {props.price}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.seatBooked} : </Text>
        {props.seatBooked}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.pickUpLocation} : </Text>
        {props.pickUpLocation}
      </Text>
      <Text style={style.mainText}>
        <Text style={style.text}>{baseLocalEng.dropLocation} : </Text>
        {props.dropLocation}
      </Text>
      
    </View>
  );
};

export default CustomBookingDetails;
