import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../styles/theme';
import {style} from './style';

type CustomTravellerRidesProps = {
  day?: string;
  date?: string;
  time?: string;
  vehicleNumber?: string;
  price?: string;
  pickUpLocation?: string;
  dropLocation?: string;
  onPress?: () => void;
};
const CustomTravellerRides = (props: CustomTravellerRidesProps) => {
  return (
    <View style={style.container}>
      <View style={style?.navigationStyle}>
        <View style={style.subcontainer}>
          <Icon style={style.caricon} name="car" size={25} color="#000" />
          <View>
            <Text style={style.textColorStyle}>
              {/* {props.day},{' '} */}
              <Text>
                {props.date}, <Text>{props.time}</Text>
              </Text>
            </Text>
            <Text style={style.textColorStyle}>
              Car . {props.vehicleNumber}
            </Text>
          </View>
        </View>
        <View>
          <Text style={style.textColorStyle}>Rs.{props.price}</Text>
        </View>
      </View>
      <View style={style.subcontainer_1}>
        <View>
          <Icon style={style.caricon} name="map-pin" size={30} color="#000" />
        </View>
        <View style={style.pickup}>
          <Text style={style.textColorStyle}>{props.pickUpLocation}</Text>
        </View>
      </View>
      <Icon1
        style={style.icon1Style}
        name="dots-vertical"
        size={40}
        color="#000"
      />
      <View style={style?.navigationStyle}>
        <View style={style.subcontainer_1}>
          <View>
            <Icon style={style.caricon} name="map-pin" size={30} color="#000" />
          </View>
          <View style={style.pickup}>
            <Text style={style.textColorStyle}>{props.dropLocation}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.onPress}>
          <Icon name="angle-right" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomTravellerRides;
