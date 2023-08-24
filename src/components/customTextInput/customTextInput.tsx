import * as React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {style} from './style';

type CustomTextInputProps = {
  label?: string;
  placeholder?: string;
  mandatory?: boolean;
  error?: boolean;
  errorText?: string;
  keyboardType?: string;
  updateValue: (value: string) => void;
};

const CustomTextInput = ({
  label,
  placeholder,
  mandatory,
  error,
  errorText,
  keyboardType,
  updateValue,
}: CustomTextInputProps) => {
  const [text, setText] = React.useState('');

  const onChangeText = (input: string) => {
    setText(input);
    updateValue(input);
  };

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Text style={style.textStyle}>{label}</Text>
        {mandatory ? <Text style={{color: 'red'}}> *</Text> : <Text></Text>}
      </View>
      <TextInput
        mode="outlined"
        activeOutlineColor={error ? 'red' : '#000000'}
        outlineColor={error ? 'red' : '#000000'}
        placeholder={placeholder}
        value={text}
        onChangeText={onChangeText}
        //@ts-ignore
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
      {error ? <Text style={style.errorText}>{errorText}</Text> : null}
    </View>
  );
};

export default CustomTextInput;
