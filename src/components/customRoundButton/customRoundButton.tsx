



import React from 'react';
import { DimensionValue, Text, TouchableOpacity } from 'react-native';
import { style } from './style';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

type CustomRoundButtonProps = {
  text: string;
  disabled: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  width?: DimensionValue;
};

const CustomRoundButton = ({
  text,
  disabled,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  width,
}: CustomRoundButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        style.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : '#CCCCCC',
          borderColor: borderColor ? borderColor : '#C4C4C4',
        },
      ]}>
       <Icon name="angle-double-right" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default CustomRoundButton;
