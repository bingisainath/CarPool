import React from 'react';
import { DimensionValue, Text, TouchableOpacity } from 'react-native';
import { style } from './style';

type CustomButtonProps = {
  text: string;
  disabled: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  width?: DimensionValue;
};

const CustomButton = ({
  text,
  disabled,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  width,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        style.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : '#CCCCCC',
          borderColor: borderColor ? borderColor : '#C4C4C4',
          width: width ? width : '90%',
        },
      ]}>
      <Text
        style={[
          style.text,
          {
            color: textColor ? textColor : '#FFFFFF',
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
