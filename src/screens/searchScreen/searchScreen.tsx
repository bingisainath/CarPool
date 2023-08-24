import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/customButton/customButton';
import CustomRoundButton from '../../components/customRoundButton/customRoundButton';
import {
  searchDataRequest,
  updateUserLocationRequest,
} from './../../redux/actions';
import {style} from './style';
import {baseLocalEng} from './../../utils/baseLocalization';

//@ts-ignore
const SearchScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [locationValidation, setLocationValidation] = useState('start');

  const pickUplocation = useSelector((state: any) => state.userPickUpLocation);
  const droplocation = useSelector((state: any) => state.userDropOffLocation);

  const handleSubmit = () => {

    if (pickUplocation == undefined || pickUplocation == '') {
      setLocationValidation('WrongPick');
    } else {
      if (droplocation == undefined || droplocation == '') {
        setLocationValidation('WrongDrop');
      } else {
        setLocationValidation('start');
        navigation.navigate('SearchFinalSelection');
      }
    }
  };

  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../assets/images/Background3.png')}
        style={style.image}>
        <View style={style.inputContainer}>
          <View style={style.mainTextContainer}>
            <Text style={style.mainText}>{baseLocalEng.SearchMain}</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.text}>{baseLocalEng.SearchIntro}</Text>
          </View>
          <View style={style.heading}>
            <Text style={style.text}>Source :</Text>
          </View>
          <View style={style.overlay}>
            <Icon name={'map-marker'} size={40} color={'#000000'}></Icon>
            <Text
              style={style.textStyle}
              numberOfLines={1}
              onPress={() => {
                setLocationValidation('start');
                navigation.navigate('ChooseLocation', {
                  loc: 'pickup',
                  btnName: 'Confirm',
                  req: 'search',
                });
              }}>
              {pickUplocation?.title == '' || pickUplocation?.title == undefined
                ? 'Leaving from'
                : pickUplocation?.title}
            </Text>
          </View>
          <View style={style.downArrow}>
            <Feather
              name={'chevrons-down'}
              size={40}
              color={'#000000'}></Feather>
          </View>
          <View style={style.heading}>
            <Text style={style.text}>Destination :</Text>
          </View>
          <View style={style.overlay}>
            <Icon name={'map-marker'} size={40} color={'#000000'}></Icon>
            <Text
              style={style.textStyle}
              numberOfLines={1}
              onPress={() => {
                setLocationValidation('start');
                navigation.navigate('ChooseLocation', {
                  loc: 'drop',
                  btnName: 'Confirm',
                  req: 'search',
                });
              }}>
              {droplocation?.title == '' || droplocation?.title == undefined
                ? 'Going to'
                : droplocation?.title}
            </Text>
          </View>
        </View>
        {locationValidation === 'start' ? null : locationValidation ===
            'WrongPick' || locationValidation === 'WrongDrop' ? (
          locationValidation === 'WrongPick' ? (
            <View style={style.errContainer}>
              <Text style={style.errText}>Select Proper Pick Location</Text>
            </View>
          ) : (
            <View style={style.errContainer}>
              <Text style={style.errText}>Select Proper Drop Location</Text>
            </View>
          )
        ) : null}
        <View style={style.btn}>
          <CustomRoundButton
            onPress={handleSubmit}
            text="Submit"
            disabled={false}
            backgroundColor="#000"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;
