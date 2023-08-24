import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
// import {TextInput, Provider as PaperProvider} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import CustomButton from '../../../components/customButton/customButton';
import CustomTextInput from '../../../components/customTextInput/customTextInput';
import {style} from './style';
import {baseLocalEng} from './../../../utils/baseLocalization';
import {theme} from './../../../styles/theme';
import CustomRoundButton from '../../../components/customRoundButton/customRoundButton';
// import {publishRideRequest} from '../../../redux/actions';

const PublishRideMainScreen = (props: any) => {
  const {navigation} = props;
  // const dispatch = useDispatch();

  const pickUplocation = useSelector((state: any) => state.pickUplocation);
  const droplocation = useSelector((state: any) => state.dropOfflocation);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toString());
  const [selectedTime, setSelectedTime] = useState('Select Time');
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    const date = new Date().toString();
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    // hideDatePicker();

    const time = new Date().toString();
    const ti = new Date(time);
    const y = dt.toLocaleTimeString();
    const y1 = y.split(' ');
    const y2 = y1[0].split(':');
    setSelectedTime(y2[0] + ':' + y2[1] + ' ' + y1[1]);
    // hideTimePicker();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date: any) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time: any) => {
    const dt = new Date(time);
    const x = dt.toLocaleTimeString();
    const x1 = x.split(' ');
    const x2 = x1[0].split(':');
    setSelectedTime(x2[0] + ':' + x2[1] + ' ' + x1[1]);
    hideTimePicker();
  };

  const minusHead = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const addHead = () => {
    if (count == 7) {
      setCount(7);
    } else {
      setCount(count + 1);
    }
  };

  const updatePrice = (value: string) => {
    setPrice(value);
  };

  const updateVehicleNumber = (value: string) => {
    setVehicleNumber(value);
  };

  const onSearch = async () => {
    if (count == 0) {
      setErr('Select Proper Passengers');
    } else {
      if (price == '') {
        setErr('Enter Valid Price');
      } else {
        if (vehicleNumber == '') {
          setErr('Enter Valid Vehicle Number');
        } else {
          setErr('');
          navigation.navigate('BookingConfirmationScreen', {
            vehicleNumber: vehicleNumber,
            date: selectedDate,
            time: selectedTime,
            count: count,
            price: price,
            location: {
              pickUp: pickUplocation,
              drop: droplocation,
            },
          });
        }
      }
    }

    // navigation.navigate('BookingConfirmationScreen', {
    //   vehicleNumber: vehicleNumber,
    //   date: selectedDate,
    //   time: selectedTime,
    //   count: count,
    //   price: price,
    //   location: {
    //     pickUp: pickUplocation,
    //     drop: droplocation,
    //   },
    // });
  };

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../../assets/images/Background5.png')}
        style={style.image}>
        <View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 60,
              marginBottom: 40,
            }}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              {baseLocalEng.rideMainScreenText}
            </Text>
          </View>
          <View style={style.subContainer}>
            <Icon
              name={'calendar-month-outline'}
              size={40}
              color={'#000000'}></Icon>
            <Text style={style.labelStyle}>{baseLocalEng.date}</Text>
            <TouchableOpacity style={{paddingTop: 6}}>
              <Text style={style.textStyle} onPress={() => showDatePicker()}>
                {selectedDate}
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  minimumDate={new Date()}
                  mode="date"
                  onConfirm={handleDateConfirm}
                  onCancel={hideDatePicker}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.subContainer}>
            <Icon
              name={'clock-time-eight-outline'}
              size={40}
              color={'#000000'}></Icon>
            <Text style={style.labelStyle}>{baseLocalEng.time}</Text>
            <TouchableOpacity style={{paddingTop: 6}}>
              <Text style={style.textStyle} onPress={() => showTimePicker()}>
                {selectedTime}
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.subContainer}>
            <Icon name={'human-male-female'} size={35} color={'#000000'}></Icon>
            <Text style={style.labelStyle}>{baseLocalEng.passengers}</Text>
            <View style={style.addPersonStyle}>
              <TouchableOpacity
                style={style.minusStyle}
                onPress={() => {
                  minusHead();
                }}>
                <Icon name={'minus-box'} size={35} color={'#9da8a8'}></Icon>
              </TouchableOpacity>
              <Text style={style.countStyle}>{count}</Text>
              <TouchableOpacity
                style={style.plusStyle}
                onPress={() => {
                  addHead();
                }}>
                <Icon name={'plus-box'} size={35} color={'#000'}></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.subContainer}>
            <Icon name={'currency-inr'} size={35} color={'#000000'}></Icon>
            <Text style={style.labelStyle}>Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                value={price}
                style={style.priceStyle}
                placeholderTextColor='#000'
                keyboardType="number-pad"
                onChangeText={text => updatePrice(text)}
                placeholder="Price"
              />
            </View>
            <Text
              style={{
                color: theme.black,
                marginBottom: 20,
                marginTop: 10,
                marginLeft: 5,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              /-
            </Text>
          </View>
          <View style={style.subContainer}>
            <Icon name={'car'} size={35} color={'#000000'}></Icon>
            <Text style={style.labelStyle}>{baseLocalEng.vehicleNumber}</Text>
            <View style={style.textInputContainer}>
              <TextInput
                style={style.input}
                placeholderTextColor='#000'
                onChangeText={text => updateVehicleNumber(text)}
                value={vehicleNumber}
                placeholder="Vehicle Number"
              />
            </View>
          </View>
          <View style={style.errContainer}>
            <Text style={style.errText}>{err}</Text>
          </View>
        </View>
        <View style={style.btn}>
          <CustomRoundButton
            onPress={onSearch}
            text="Submit"
            disabled={false}
            backgroundColor="#000"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PublishRideMainScreen;
